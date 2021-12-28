import { Contract, providers } from "ethers"
import { CoveragePoolsFactory, CoveragePoolV1 } from "../coverage-pools"
import { UniswapExchangeService } from "../../exchange-api/exchange-service"
import AssetPool from "../abis/AssetPool.json"
import KeepToken from "../abis/KeepToken.json"
import RewardsPool from "../abis/RewardsPool.json"
import { Token } from "../../liquidity-rewards/utils"
import { APYCalculator } from "../../helper"
import BigNumber from "bignumber.js"

jest.mock("ethers", () => {
  return {
    Contract: jest.fn(),
    providers: {
      JsonRpcProvider: jest.fn(),
    },
  }
})

jest.mock("../../exchange-api/exchange-service", () => {
  return {
    UniswapExchangeService: jest.fn(),
  }
})

jest.mock("../abis/AssetPool.json", () => {
  return {
    ...jest.requireActual("../abis/AssetPool.json"),
    address: jest
      .fn()
      .mockImplementation(() => "0x7bCa8838d96D723487823975FbeA80e87d04f341"),
    abi: jest.fn(),
  }
})

jest.mock("../abis/AssetPool.json", () => {
  return {
    ...jest.requireActual("../abis/AssetPool.json"),
    address: jest
      .fn()
      .mockImplementation(() => "0x7bCa8838d96D723487823975FbeA80e87d04f341"),
    abi: jest.fn(),
  }
})

jest.mock("../abis/KeepToken.json", () => {
  return {
    ...jest.requireActual("../abis/AssetPool.json"),
    networks: {
      "1": {
        address: jest
          .fn()
          .mockImplementation(
            () => "0x7bCa8838d96D723487823975FbeA80e87d04f342"
          ),
      },
    },
    abi: jest.fn(),
  }
})

jest.mock("../abis/RewardsPool.json", () => {
  return {
    ...jest.requireActual("../abis/AssetPool.json"),
    address: jest
      .fn()
      .mockImplementation(() => "0x7bCa8838d96D723487823975FbeA80e87d04f343"),
    abi: jest.fn(),
  }
})

const createMockedContract = (address) => ({
  makeCall: jest.fn(),
  address: address,
  getPastEvents: jest.fn(),
  balanceOf: jest.fn(),
})

const createMockedRewardsPoolContract = (address) => {
  return {
    ...createMockedContract(address),
    rewardRate: jest.fn(),
  }
}

describe("Test Coverage Pools", () => {
  /** @type {CoveragePoolV1} */
  let coveragePoolV1
  let mockJsonRPCProvider
  beforeEach(() => {
    mockJsonRPCProvider = new providers.JsonRpcProvider(null, null)
    const assetPoolContract = createMockedContract("0x9")
    const collateralToken = createMockedContract("0x6")
    const rewardsPoolContract = createMockedRewardsPoolContract("0x7")
    const exchangeService = {
      getKeepTokenPriceInUSD: jest.fn(),
    }

    coveragePoolV1 = new CoveragePoolV1(
      assetPoolContract,
      collateralToken,
      rewardsPoolContract,
      exchangeService
    )
  })

  it("should create coverage pool wrapper correctly", async () => {
    const CoveragePoolV1FactoryCreation = await CoveragePoolsFactory.create()

    expect(Contract).toHaveBeenCalledTimes(3)
    expect(Contract).toHaveBeenCalledWith(
      AssetPool.address,
      AssetPool.abi,
      mockJsonRPCProvider
    )
    expect(Contract).toHaveBeenCalledWith(
      KeepToken.networks[1].address,
      KeepToken.abi,
      mockJsonRPCProvider
    )
    expect(Contract).toHaveBeenCalledWith(
      RewardsPool.address,
      RewardsPool.abi,
      mockJsonRPCProvider
    )
    expect(UniswapExchangeService).toHaveBeenCalledTimes(1)
    expect(CoveragePoolV1FactoryCreation).toBeInstanceOf(CoveragePoolV1)
  })

  it("should return the asset pool collateral token balance", async () => {
    const mockedBalance = Token.fromTokenUnit("300").toString()
    const spy = jest
      .spyOn(coveragePoolV1.collateralToken, "balanceOf")
      .mockResolvedValue(mockedBalance)

    const result = await coveragePoolV1.assetPoolCollateralTokenBalance()

    expect(spy).toHaveBeenCalledWith(coveragePoolV1.assetPoolContract.address)
    expect(result).toEqual(mockedBalance)
  })

  it("should return the reward pool per week", async () => {
    const rewardRate = Token.fromTokenUnit("1000")
    const spyOnRewardRate = jest
      .spyOn(coveragePoolV1, "rewardPoolRewardRate")
      .mockResolvedValue(rewardRate.toString())

    const result = await coveragePoolV1.rewardPoolPerWeek()

    expect(spyOnRewardRate).toHaveBeenCalled()
    expect(result).toEqual(
      Token.toTokenUnit(rewardRate).multipliedBy(604800).toString()
    )
  })

  it("should calculate apy correctly", async () => {
    const mockedTotalSupply = Token.fromTokenUnit(100)
    const spyOnTotalSupply = jest
      .spyOn(coveragePoolV1, "assetPoolCollateralTokenBalance")
      .mockResolvedValue(mockedTotalSupply)

    const mockedRewardPoolPerWeek = "150"
    const spyOnRewarPoolPerWeek = jest
      .spyOn(coveragePoolV1, "rewardPoolPerWeek")
      .mockResolvedValue(mockedRewardPoolPerWeek)

    const mockedPriceInUSD = 0.5
    const spyOnGetPriceInUSD = jest
      .spyOn(coveragePoolV1.exchangeService, "getKeepTokenPriceInUSD")
      .mockResolvedValue(mockedPriceInUSD)

    const mockedPoolRewardRate = 0.2
    const spyOnPoolRewardRate = jest
      .spyOn(APYCalculator, "calculatePoolRewardRate")
      .mockReturnValue(mockedPoolRewardRate)

    const mockedAPY = new BigNumber("0.99")
    const spyOnAPY = jest
      .spyOn(APYCalculator, "calculateAPY")
      .mockReturnValue(mockedAPY)

    const result = await coveragePoolV1.apy()

    expect(spyOnTotalSupply).toHaveBeenCalled()
    expect(spyOnRewarPoolPerWeek).toHaveBeenCalled()
    expect(spyOnGetPriceInUSD).toHaveBeenCalled()
    expect(spyOnPoolRewardRate).toHaveBeenCalledWith(
      mockedPriceInUSD,
      mockedRewardPoolPerWeek,
      Token.toTokenUnit(mockedTotalSupply).multipliedBy(mockedPriceInUSD)
    )
    expect(spyOnAPY).toHaveBeenCalledWith(mockedPoolRewardRate)
    expect(result).toEqual(
      mockedAPY
        .multipliedBy(100)
        .decimalPlaces(2, BigNumber.ROUND_DOWN)
        .toString()
    )
  })
})
