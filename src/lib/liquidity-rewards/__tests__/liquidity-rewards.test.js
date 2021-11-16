import { Contract } from "ethers"
import BigNumber from "bignumber.js"

import {
  LiquidityRewards,
  LiquidityRewardsFactory,
  LiquidityRewardsUniswap,
  LiquidityRewardsSaddle,
  LiquidityRewardsKeepVault,
  SUPPORTED_LIQUIDITY_POOLS,
} from "../liquidity-rewards"
import { Token } from "../utils"
import { UniswapExchangeService } from "../exchange-service"
import LPRewardsKEEPETH from "../abis/LPRewardsKEEPETH.json"
import LPRewardsTBTCETH from "../abis/LPRewardsTBTCETH.json"
import LPRewardsTBTCv2Saddle from "../abis/LPRewardsTBTCv2Saddle.json"
import KeepVault from "../abis/KeepVault.json"

jest.mock("ethers")

describe("Test LiquidityRewards", () => {
  describe("Test base LiquidityRewards", () => {
    const liquidityRewards = new LiquidityRewards(
      {},
      { getKeepTokenPriceInUSD: () => {} }
    )
    const mockedTotalSupply = Token.fromTokenUnit(100000)
    const mockedRewarPoolPerWeek = "30000"
    const mockedTotalSupplyInUSD = "50000"
    const mockedKeepTokenPriceInUSD = new BigNumber("0.55")
    liquidityRewards._totalSupply = jest
      .fn()
      .mockResolvedValue(mockedTotalSupply)
    liquidityRewards._rewardPoolPerWeek = jest
      .fn()
      .mockResolvedValue(mockedRewarPoolPerWeek)
    liquidityRewards._totalSupplyInUSD = jest
      .fn()
      .mockResolvedValue(mockedTotalSupplyInUSD)

    const exchangeSpy = jest
      .spyOn(liquidityRewards.exchangeSercvice, "getKeepTokenPriceInUSD")
      .mockResolvedValue(mockedKeepTokenPriceInUSD)
    const calculateRSpy = jest.spyOn(liquidityRewards, "_calculateR")
    const calculateAPYSpy = jest.spyOn(liquidityRewards, "_calculateAPY")

    test("should correctly calculate APY", async () => {
      const result = await liquidityRewards.calculateAPY()

      expect(liquidityRewards._totalSupply).toHaveBeenCalled()
      expect(liquidityRewards._rewardPoolPerWeek).toHaveBeenCalled()
      expect(liquidityRewards._totalSupplyInUSD).toHaveBeenCalledWith(
        mockedTotalSupply.toString()
      )
      expect(exchangeSpy).toHaveBeenCalled()
      expect(calculateRSpy).toHaveBeenCalledWith(
        mockedKeepTokenPriceInUSD,
        mockedRewarPoolPerWeek,
        mockedTotalSupplyInUSD
      )

      const expectedR = new BigNumber(mockedKeepTokenPriceInUSD)
        .multipliedBy(mockedRewarPoolPerWeek)
        .div(mockedTotalSupplyInUSD)

      expect(calculateAPYSpy).toHaveBeenCalledWith(expectedR, 52)

      const expectedAPY = expectedR
        .plus(1)
        .pow(52)
        .minus(1)
        .multipliedBy(100)
        .decimalPlaces(2, BigNumber.ROUND_DOWN)
        .toString()

      expect(result).toEqual(expectedAPY)
    })
  })

  describe("Test LiquidityRewards factory", () => {
    beforeEach(() => {
      Contract.mockClear()
    })

    test.each`
      pool                                       | contractArtifact         | expectedPoolInstance
      ${SUPPORTED_LIQUIDITY_POOLS.KEEP_ETH}      | ${LPRewardsKEEPETH}      | ${LiquidityRewardsUniswap}
      ${SUPPORTED_LIQUIDITY_POOLS.TBTC_ETH}      | ${LPRewardsTBTCETH}      | ${LiquidityRewardsUniswap}
      ${SUPPORTED_LIQUIDITY_POOLS.TBTCv2_SADDLE} | ${LPRewardsTBTCv2Saddle} | ${LiquidityRewardsSaddle}
      ${SUPPORTED_LIQUIDITY_POOLS.KEEP}          | ${KeepVault}             | ${LiquidityRewardsKeepVault}
    `(
      "should create the liquidity rewards pool wrapper correctly",
      ({ pool, contractArtifact, expectedPoolInstance }) => {
        const liquidityRewards = LiquidityRewardsFactory.create(pool)
        const mockContractCalls = Contract.mock.calls
        expect(Contract).toHaveBeenCalled()
        expect(mockContractCalls[0][0]).toEqual(
          contractArtifact.networks[1].address
        )
        expect(mockContractCalls[0][1]).toEqual(contractArtifact.abi)

        expect(liquidityRewards).toBeInstanceOf(expectedPoolInstance)
        expect(liquidityRewards.exchangeSercvice).toBeInstanceOf(
          UniswapExchangeService
        )
        expect(liquidityRewards.contract).toBeInstanceOf(Contract)
      }
    )
  })

  describe("Test LiquidityRewardsUniswap", () => {
    const mockedTotalSupply = "10000"
    const mockedWrappedTokenAddress = "0x1A8dC"
    const mockedRewardRate = "0.7"
    const mockedContractInstance = {
      totalSupply: jest.fn(() => mockedTotalSupply),
      rewardRate: jest.fn(() => mockedRewardRate),
      wrappedToken: jest.fn(() => mockedWrappedTokenAddress),
    }
    const mockedPairData = {
      reserveUSD: 100,
      totalSupply: 1000,
    }
    const mockedExchangeService = {
      getUniswapPairData: jest.fn(() => mockedPairData),
    }

    let liquidityRewards = null

    beforeEach(() => {
      liquidityRewards = new LiquidityRewardsUniswap(
        mockedContractInstance,
        mockedExchangeService
      )
    })

    test("should return total supply", async () => {
      const result = await liquidityRewards._totalSupply()

      expect(mockedContractInstance.totalSupply).toHaveBeenCalled()
      expect(result).toEqual(mockedTotalSupply)
    })
    test("should return reward rate", async () => {
      const result = await liquidityRewards._rewardRate()

      expect(mockedContractInstance.rewardRate).toHaveBeenCalled()
      expect(result).toEqual(mockedRewardRate)
    })

    test("should return reward pool per week", async () => {
      const expectedRewardPoolPerWeek = Token.toTokenUnit(
        new BigNumber(mockedRewardRate).multipliedBy(604800)
      )

      const result = await liquidityRewards._rewardPoolPerWeek()

      expect(mockedContractInstance.rewardRate).toHaveBeenCalled()
      expect(result).toEqual(expectedRewardPoolPerWeek)
    })

    test("should return total supply in usd", async () => {
      const getWrappedTokenAddressSpy = jest
        .spyOn(liquidityRewards, "_getWrappedTokenAddress")
        .mockResolvedValue(mockedWrappedTokenAddress)
      const expectedSupplyInUSD = Token.toTokenUnit(mockedTotalSupply)
        .multipliedBy(mockedPairData.reserveUSD)
        .div(mockedPairData.totalSupply)

      const result = await liquidityRewards._totalSupplyInUSD(mockedTotalSupply)

      expect(getWrappedTokenAddressSpy).toHaveBeenCalled()
      expect(mockedExchangeService.getUniswapPairData).toHaveBeenCalledWith(
        mockedWrappedTokenAddress
      )
      expect(result).toEqual(expectedSupplyInUSD)
    })

    test("should return wrapped token address", async () => {
      expect(liquidityRewards._wrappedTokenAddress).toBeNull()

      const result = await liquidityRewards._getWrappedTokenAddress()
      const result2 = await liquidityRewards._getWrappedTokenAddress()

      expect(mockedContractInstance.wrappedToken).toHaveBeenCalledTimes(1)
      expect(result).toEqual(mockedWrappedTokenAddress.toLowerCase())
      expect(result).toEqual(result2)
      expect(liquidityRewards._wrappedTokenAddress).toEqual(result)
    })
  })

  describe("Test LiquidityRewardsSaddle", () => {
    const mockedTotalSupply = "10000"
    const mockedWrappedTokenTotalSupply = "5000"
    const mockedWrappedTokenContract = {
      totalSupply: jest.fn(() => mockedWrappedTokenTotalSupply),
    }
    const mockedBTCPrice = new BigNumber("10")

    const mockedExchangeService = {
      getBTCPriceInUSD: jest.fn(() => mockedBTCPrice),
    }

    let liquidityRewards = null

    beforeEach(() => {
      liquidityRewards = new LiquidityRewardsSaddle({}, mockedExchangeService)
    })

    test("should return total supply in USD", async () => {
      const getWrappedTokenContractSpy = jest
        .spyOn(liquidityRewards, "_getWrappedTokenContract")
        .mockReturnValue(mockedWrappedTokenContract)
      const expectedResult = new BigNumber(mockedTotalSupply)
        .multipliedBy(
          mockedBTCPrice.multipliedBy(
            Token.toTokenUnit(mockedWrappedTokenTotalSupply)
          )
        )
        .div(mockedWrappedTokenTotalSupply)

      const result = await liquidityRewards._totalSupplyInUSD(mockedTotalSupply)

      expect(getWrappedTokenContractSpy).toHaveBeenCalled()
      expect(mockedWrappedTokenContract.totalSupply).toHaveBeenCalled()
      expect(mockedExchangeService.getBTCPriceInUSD).toHaveBeenCalled()
      expect(result).toEqual(expectedResult)
    })
  })

  describe("Test LiquidityRewardsSaddle", () => {
    const mockedTotalSupply = "10000"
    const mockedWrappedTokenTotalSupply = "5000"
    const mockedWrappedTokenContract = {
      totalSupply: jest.fn(() => mockedWrappedTokenTotalSupply),
    }
    const mockedBTCPrice = new BigNumber("10")

    const mockedExchangeService = {
      getBTCPriceInUSD: jest.fn(() => mockedBTCPrice),
    }

    let liquidityRewards = null

    beforeEach(() => {
      liquidityRewards = new LiquidityRewardsSaddle({}, mockedExchangeService)
      Contract.mockClear()
    })

    test("should return total supply in USD", async () => {
      const getWrappedTokenContractSpy = jest
        .spyOn(liquidityRewards, "_getWrappedTokenContract")
        .mockReturnValue(mockedWrappedTokenContract)
      const expectedResult = new BigNumber(mockedTotalSupply)
        .multipliedBy(
          mockedBTCPrice.multipliedBy(
            Token.toTokenUnit(mockedWrappedTokenTotalSupply)
          )
        )
        .div(mockedWrappedTokenTotalSupply)

      const result = await liquidityRewards._totalSupplyInUSD(mockedTotalSupply)

      expect(getWrappedTokenContractSpy).toHaveBeenCalled()
      expect(mockedWrappedTokenContract.totalSupply).toHaveBeenCalled()
      expect(mockedExchangeService.getBTCPriceInUSD).toHaveBeenCalled()
      expect(result).toEqual(expectedResult)
    })

    test("should create wrapped token contract instance", async () => {
      const mockedAddress = "0x0"
      const spy = jest
        .spyOn(liquidityRewards, "_getWrappedTokenAddress")
        .mockReturnValue(mockedAddress)

      const result = await liquidityRewards._getWrappedTokenContract()
      const contractCalls = Contract.mock.calls

      expect(spy).toHaveBeenCalled()
      expect(Contract).toHaveBeenCalledTimes(1)
      expect(contractCalls[0][0]).toEqual(mockedAddress)
      expect(contractCalls[0][1]).toEqual([
        "function totalSupply() view returns (uint256)",
      ])
      expect(result).toBeInstanceOf(Contract)
    })
  })

  describe("Test LiquidityRewardsKeepVault", () => {
    const mockedTotalSupply = "10000"
    const mockedWrappedTokenAddress = "0x1A8dC"
    const mockedRewardRate = "0.7"
    const mockedFilter = []
    const event1 = [[100]]
    const event2 = [[300]]
    const mockedEventObj1 = {
      data: "0x0",
      topics: [],
      decode: jest.fn(() => event1),
    }

    const mockedEventObj2 = {
      data: "0x1",
      topics: [],
      decode: jest.fn(() => event2),
    }
    const mockedEvents = [mockedEventObj1, mockedEventObj2]

    const mockedContractInstance = {
      filters: {
        TokensLocked: jest.fn(() => mockedFilter),
      },
      queryFilter: jest.fn(() => mockedEvents),
      totalStaked: jest.fn(() => mockedTotalSupply),
      rewardRate: jest.fn(() => mockedRewardRate),
      wrappedToken: jest.fn(() => mockedWrappedTokenAddress),
    }

    const mockedKEEPPrice = new BigNumber("1")
    const mockedExchangeService = {
      getKeepTokenPriceInUSD: jest.fn(() => mockedKEEPPrice),
    }
    let liquidityRewards = null

    beforeEach(() => {
      liquidityRewards = new LiquidityRewardsKeepVault(
        mockedContractInstance,
        mockedExchangeService
      )
      Contract.mockClear()
    })

    test("should return total supply", async () => {
      const result = await liquidityRewards._totalSupply()

      expect(mockedContractInstance.totalStaked).toHaveBeenCalled()
      expect(result).toEqual(mockedTotalSupply)
    })

    test("should return reward pool per week", async () => {
      const amount = new BigNumber(event2[0])
      const weeksInMonth = new BigNumber(4.28571429)
      const expectedResult = Token.toTokenUnit(amount.div(weeksInMonth))

      const result = await liquidityRewards._rewardPoolPerWeek()

      expect(mockedContractInstance.filters.TokensLocked).toHaveBeenCalled()
      expect(mockedContractInstance.queryFilter).toHaveBeenCalledWith(
        mockedFilter,
        0
      )
      expect(mockedEventObj2.decode).toHaveBeenCalledWith(
        mockedEventObj2.data,
        mockedEventObj2.topics
      )
      expect(result).toEqual(expectedResult)
    })

    test("should return total supply in USD", async () => {
      const expectedResult = Token.toTokenUnit(mockedTotalSupply).multipliedBy(
        mockedKEEPPrice
      )

      const result = await liquidityRewards._totalSupplyInUSD(mockedTotalSupply)

      expect(mockedExchangeService.getKeepTokenPriceInUSD).toHaveBeenCalled()
      expect(result).toEqual(expectedResult)
    })
  })
})
