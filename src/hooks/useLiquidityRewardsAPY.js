import { useEffect, useState } from "react"

import LiquidityRewardsFactory, {
  SUPPORTED_LIQUIDITY_POOLS,
} from "../lib/liquidity-rewards"

const liquidityRewardsKEEPETH = LiquidityRewardsFactory.create(
  SUPPORTED_LIQUIDITY_POOLS.KEEP_ETH
)
const liquidityRewardsTBTCSaddle = LiquidityRewardsFactory.create(
  SUPPORTED_LIQUIDITY_POOLS.TBTC_SADDLE
)

const liquidityRewardsTBTCETH = LiquidityRewardsFactory.create(
  SUPPORTED_LIQUIDITY_POOLS.TBTC_ETH
)
const liquidityRewardsKEEP = LiquidityRewardsFactory.create(
  SUPPORTED_LIQUIDITY_POOLS.KEEP
)

const useLiquidityRewardsAPY = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [liquidityRewardsAPYs, setLiquidityRewardsAPYs] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let shouldSetState = true

    setIsFetching(true)
    Promise.all([
      liquidityRewardsKEEPETH.calculateAPY(),
      liquidityRewardsTBTCSaddle.calculateAPY(),
      liquidityRewardsTBTCETH.calculateAPY(),
      liquidityRewardsKEEP.calculateAPY(),
    ])
      .then(([apyKEEPETH, apyTBTCSaddle, apyTBTCETH, apyKEEP]) => {
        if (shouldSetState) {
          setLiquidityRewardsAPYs(
            [
              { value: apyKEEPETH, pool: "KEEP/ETH" },
              { value: apyTBTCSaddle, pool: "TBTC/SADDLE" },
              { value: apyTBTCETH, pool: "TBTC/ETH" },
              { value: apyKEEP, pool: "KEEP" },
            ].sort((a, b) => b.value - a.value)
          )
          setIsFetching(false)
        }
      })
      .catch((error) => {
        if (shouldSetState) {
          setIsFetching(false)
          setError(error)
        }
        console.log(
          "Unexpected error while fetching liquidity rewards APY:",
          error
        )
      })

    return () => {
      shouldSetState = false
    }
  }, [])

  return [liquidityRewardsAPYs, isFetching, error]
}

export default useLiquidityRewardsAPY
