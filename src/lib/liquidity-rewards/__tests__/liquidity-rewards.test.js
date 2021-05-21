import { Contract } from "ethers"
import BigNumber from "bignumber.js"

import {
  LiquidityRewards,
  LiquidityRewardsFactory,
  LiquidityRewardsUniswap,
} from "../liquidity-rewards"
import { Token } from "../utils"
import LPRewardsKEEPETH from "../abis/LPRewardsKEEPETH.json"
import { UniswapExchangeService } from "../exchange-service"

jest.mock("ethers")

jest.mock("../abis/LPRewardsKEEPETH.json", () => ({
  abi: [],
  networks: {
    1: {
      address: "0x0",
    },
  },
}))

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
    test("should create the liquidity rewards pool wrapper correctly", () => {
      const liquidityRewards = LiquidityRewardsFactory.create("KEEP_ETH")
      const mockContractCalls = Contract.mock.calls
      expect(Contract).toHaveBeenCalled()
      expect(mockContractCalls[0][0]).toEqual(
        LPRewardsKEEPETH.networks[1].address
      )
      expect(mockContractCalls[0][1]).toEqual(LPRewardsKEEPETH.abi)

      expect(liquidityRewards).toBeInstanceOf(LiquidityRewardsUniswap)
      expect(liquidityRewards.exchangeSercvice).toBeInstanceOf(
        UniswapExchangeService
      )
      expect(liquidityRewards.contract).toBeInstanceOf(Contract)
    })
  })
})
