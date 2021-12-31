import { APYCalculator, Token } from "../helper"
import { Contract, providers } from "ethers"
import AssetPool from "./abis/AssetPool.json"
import KeepToken from "./abis/KeepToken.json"
import RewardsPool from "./abis/RewardsPool.json"
import { UniswapExchangeService } from "../exchange-api/exchange-service"
import BigNumber from "bignumber.js"
import { INFURA_RPC_URL, NETWORK } from "../web3-config"

const REWARD_DURATION = 604800 // 7 days in seconds

export class CoveragePoolV1 {
  /**
   * @param {Contract} e
   * @param {Contract} _collateralToken
   * @param {Contract} _rewardPoolContract
   * @param {BaseExchangeService} _exchangeService
   */
  constructor(
    _assetPoolContract,
    _collateralToken,
    _rewardPoolContract,
    _exchangeService,
  ) {
    this.assetPoolContract = _assetPoolContract
    this.collateralToken = _collateralToken
    this.rewardPoolContract = _rewardPoolContract
    this.exchangeService = _exchangeService
  }

  /**
   * Returns the `AssetPool` contract's balance of the collateral token.
   * @return {Promise<string>} The `AssetPool` contract's balance of the
   * collateral token.
   */
  assetPoolCollateralTokenBalance = async () => {
    return (
      await this.collateralToken.balanceOf(this.assetPoolContract.address)
    ).toString()
  }

  /**
   * Calculates the reward pool per week. The `RewardsPool` will earn a given
   * amount of collateral token per week. Reward tokens from the previous
   * interval that has not been yet unlocked, are added to the new interval
   * being created.
   * @return  {Promise<string>} The reward pool per week (in collateral token)
   * in the smallest unit.
   */
  rewardPoolPerWeek = async () => {
    const rewardRate = (await this.rewardPoolRewardRate()).toString()

    return Token.toTokenUnit(rewardRate)
      .multipliedBy(REWARD_DURATION)
      .toString()
  }

  /**
   * Returns the `RewardsPool` contract's rate per second with which reward
   * tokens are unlocked.
   * @return {Promise<string>} The rate per second with which reward tokens are
   * unlocked.
   */
  rewardPoolRewardRate = async () => {
    return await this.rewardPoolContract.rewardRate()
  }

  /**
   * Calculates the APY of the coverage pool assuming that there are no calims.
   * @return {Promise<string>} APY.
   */
  apy = async () => {
    const totalSupply = await this.assetPoolCollateralTokenBalance()
    const rewardPoolPerWeek = await this.rewardPoolPerWeek()

    // We know that the collateral token is KEEP. TODO: consider a more abstract
    // solution to fetch the collateral token price in USD.
    const collateralTokenPriceInUSD = await this.exchangeService.getKeepTokenPriceInUSD()

    const totalSupplyInUSD = Token.toTokenUnit(totalSupply, 18).multipliedBy(
      collateralTokenPriceInUSD
    )

    const rewardRate = APYCalculator.calculatePoolRewardRate(
      collateralTokenPriceInUSD,
      rewardPoolPerWeek,
      totalSupplyInUSD
    )

    return APYCalculator.calculateAPY(rewardRate)
      .multipliedBy(100)
      .decimalPlaces(2, BigNumber.ROUND_DOWN)
      .toString()
  }
}

export class CoveragePoolsFactory {
  /**
   * Creates the Coveragge Pool V1 wrapper based on the type of pool.
   * @return {CoveragePoolV1} The Coverage Pool V1 wrapper.
   */
  static create() {
    const assetPoolAddress = AssetPool.address
    const keepTokenAddress = KeepToken.networks[1].address
    const rewardsPoolAddress = RewardsPool.address

    const assetPoolContract = new Contract(
      assetPoolAddress,
      AssetPool.abi,
      new providers.JsonRpcProvider(INFURA_RPC_URL, NETWORK)
    )

    const keepTokenContract = new Contract(
      keepTokenAddress,
      KeepToken.abi,
      new providers.JsonRpcProvider(INFURA_RPC_URL, NETWORK)
    )

    const rewardsPoolContract = new Contract(
      rewardsPoolAddress,
      RewardsPool.abi,
      new providers.JsonRpcProvider(INFURA_RPC_URL, NETWORK)
    )

    const exchangeService = new UniswapExchangeService()

    return new CoveragePoolV1(
      assetPoolContract,
      keepTokenContract,
      rewardsPoolContract,
      exchangeService
    )
  }
}
