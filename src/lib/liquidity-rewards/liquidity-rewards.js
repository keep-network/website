import { Contract, providers } from "ethers"
import BigNumber from "bignumber.js"

import { Token } from "./utils"
import { UniswapExchangeService } from "../exchange-api/exchange-service"
import KeepVault from "./abis/KeepVault.json"
import LPRewardsKEEPETH from "./abis/LPRewardsKEEPETH.json"
import LPRewardsTBTCETH from "./abis/LPRewardsTBTCETH.json"
import LPRewardsTBTCv2Saddle from "./abis/LPRewardsTBTCv2Saddle.json"

/** @typedef {import("../exchange-api/exchange-service").BaseExchangeService}
 * BaseExchangeService */

const WEEKS_IN_YEAR = 52
const WEEK_IN_SECONDS = 604800 // 7 days in seconds

const NETWORK = 1
const INFURA_RPC_URL =
  "https://mainnet.infura.io/v3/5348113af423473a85e22220ef987de8"

export class LiquidityRewards {
  /**
   * @param {Contract} _contract Ethers contract instance.
   * @param {BaseExchangeService} _exchangeService The exchange service.
   */
  constructor(_contract, _exchangeService) {
    this.contract = _contract
    this.exchangeSercvice = _exchangeService
  }

  calculateAPY = async () => {
    const totalSupply = await this._totalSupply()
    const rewardPoolPerWeek = await this._rewardPoolPerWeek()
    const totalSupplyInUSD = await this._totalSupplyInUSD(
      totalSupply.toString()
    )
    const keepTokenPriceInUSD = await this._getKeepTokenPriceInUSD()

    const r = this._calculateR(
      keepTokenPriceInUSD,
      rewardPoolPerWeek,
      totalSupplyInUSD
    )

    return this._calculateAPY(r, WEEKS_IN_YEAR)
      .multipliedBy(100)
      .decimalPlaces(2, BigNumber.ROUND_DOWN)
      .toString()
  }

  _getKeepTokenPriceInUSD = async () => {
    return await this.exchangeSercvice.getKeepTokenPriceInUSD()
  }

  _calculateR = (
    keepTokenPriceInUSD,
    rewardPoolPerInterval,
    totalLPTokensInLPRewardsInUSD
  ) => {
    return keepTokenPriceInUSD
      .multipliedBy(rewardPoolPerInterval)
      .div(totalLPTokensInLPRewardsInUSD)
  }

  /**
   * Calculates the APY.
   *
   * @param {BigNumber} r Period rate.
   * @param {number | string | BigNumber} n Number of compounding periods.
   * @return {BigNumber} APY value.
   */
  _calculateAPY = (r, n = WEEKS_IN_YEAR) => {
    return r.plus(1).pow(n).minus(1)
  }
}

export class LiquidityRewardsUniswap extends LiquidityRewards {
  _wrappedTokenAddress = null

  _totalSupply = async () => {
    return await this.contract.totalSupply()
  }

  _rewardRate = async () => {
    return await this.contract.rewardRate()
  }

  _rewardPoolPerWeek = async () => {
    const rewardRate = await this._rewardRate()

    return Token.toTokenUnit(
      new BigNumber(rewardRate.toString()).multipliedBy(WEEK_IN_SECONDS)
    )
  }

  /**
   *
   * @param {string} totalSupply
   */
  _totalSupplyInUSD = async (totalSupply) => {
    const pairData = await this.exchangeSercvice.getUniswapPairData(
      await this._getWrappedTokenAddress()
    )

    return Token.toTokenUnit(totalSupply)
      .multipliedBy(pairData.reserveUSD)
      .div(pairData.totalSupply)
  }

  _getWrappedTokenAddress = async () => {
    if (!this._wrappedTokenAddress) {
      this._wrappedTokenAddress = (await this.contract.wrappedToken())
        .toString()
        .toLowerCase()
    }

    return this._wrappedTokenAddress
  }
}

export class LiquidityRewardsSaddle extends LiquidityRewardsUniswap {
  /**
   * @param {string} totalSupply
   */
  _totalSupplyInUSD = async (totalSupply) => {
    const wrappedTokenContract = await this._getWrappedTokenContract()
    const wrappedTokenTotalSupply = (
      await wrappedTokenContract.totalSupply()
    ).toString()

    const BTCPriceInUSD = await this.exchangeSercvice.getBTCPriceInUSD()

    const wrappedTokenPoolInUSD = BTCPriceInUSD.multipliedBy(
      Token.toTokenUnit(wrappedTokenTotalSupply)
    )

    return new BigNumber(totalSupply)
      .multipliedBy(wrappedTokenPoolInUSD)
      .div(wrappedTokenTotalSupply)
  }

  /**
   * @return {Contract} The Ethers contract instance of the wrapped token
   */
  _getWrappedTokenContract = async () => {
    const contractAddress = await this._getWrappedTokenAddress()
    return new Contract(
      contractAddress,
      ["function totalSupply() view returns (uint256)"],
      new providers.JsonRpcProvider(INFURA_RPC_URL, NETWORK)
    )
  }
}

export class LiquidityRewardsKeepVault extends LiquidityRewards {
  _totalSupply = async () => {
    return await this.contract.totalStaked()
  }

  _rewardPoolPerWeek = async () => {
    // eslint-disable-next-line new-cap
    const tokensLockedEventFilter = this.contract.filters.TokensLocked()

    const tokensLockedEvents = (
      await this.contract.queryFilter(tokensLockedEventFilter, 0)
    ).reverse()

    const latestEvent = tokensLockedEvents[0]
    const latestEventData = latestEvent.decode(
      latestEvent.data,
      latestEvent.topics
    )
    const amount = latestEventData[0].toString()

    const rewardPoolPerMonth = new BigNumber(amount)
    const weeksInMonth = new BigNumber(4.28571429)

    return Token.toTokenUnit(rewardPoolPerMonth.div(weeksInMonth))
  }

  /**
   * @param {string} totalSupply
   */
  _totalSupplyInUSD = async (totalSupply) => {
    const keepTokenPriceInUSD = await this.exchangeSercvice.getKeepTokenPriceInUSD()

    return Token.toTokenUnit(totalSupply).multipliedBy(keepTokenPriceInUSD)
  }
}

export const SUPPORTED_LIQUIDITY_POOLS = {
  KEEP_ETH: "KEEP_ETH",
  TBTC_ETH: "TBTC_ETH",
  TBTCv2_SADDLE: "TBTCv2_SADDLE",
  KEEP: "KEEP",
}

/**
 * @typedef {Object.<(string, LiquidityRewards >} LiquidityRewardsPoolManager
 */
const LiquidityRewardsPoolManager = {
  [SUPPORTED_LIQUIDITY_POOLS.KEEP_ETH]: {
    pool: LiquidityRewardsUniswap,
    contractArtifact: LPRewardsKEEPETH,
  },
  [SUPPORTED_LIQUIDITY_POOLS.TBTC_ETH]: {
    pool: LiquidityRewardsUniswap,
    contractArtifact: LPRewardsTBTCETH,
  },
  [SUPPORTED_LIQUIDITY_POOLS.TBTCv2_SADDLE]: {
    pool: LiquidityRewardsSaddle,
    contractArtifact: LPRewardsTBTCv2Saddle,
  },
  [SUPPORTED_LIQUIDITY_POOLS.KEEP]: {
    pool: LiquidityRewardsKeepVault,
    contractArtifact: KeepVault,
  },
}

const uniswapExchangeSercie = new UniswapExchangeService()
export class LiquidityRewardsFactory {
  /**
   * Creates the Liquidity Rewards wrapper based on the type of pool.
   * @param {('KEEP_ETH' | 'TBTC_ETH' | 'TBTCv2_SADDLE' | 'KEEP')} typeOfPool -
   * The supported type of pools.
   * @return {LiquidityRewards} The Liquidity Rewards wrapper.
   */
  static create(typeOfPool) {
    const {
      pool: LiquidityRewardsPool,
      contractArtifact,
    } = LiquidityRewardsPoolManager[typeOfPool]

    const contractAddress = contractArtifact.networks[1].address
    const contract = new Contract(
      contractAddress,
      contractArtifact.abi,
      new providers.JsonRpcProvider(INFURA_RPC_URL, NETWORK)
    )

    return new LiquidityRewardsPool(contract, uniswapExchangeSercie)
  }
}
