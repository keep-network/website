import { useEffect, useState } from "react"

import LiquidityRewardsFactory, {
  SUPPORTED_LIQUIDITY_POOLS,
} from "../lib/liquidity-rewards"

const liquidityRewardsTBTCv2Saddle = LiquidityRewardsFactory.create(
  SUPPORTED_LIQUIDITY_POOLS.TBTCv2_SADDLEV2
)

const useLiquidityRewardsAPY = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [liquidityRewardsAPYs, setLiquidityRewardsAPYs] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let shouldSetState = true

    setIsFetching(true)
    Promise.all([liquidityRewardsTBTCv2Saddle.calculateAPY()])
      .then(([apyTBTCv2SaddleV2]) => {
        if (shouldSetState) {
          setLiquidityRewardsAPYs(
            [{ value: apyTBTCv2SaddleV2, pool: "TBTCv2/SADDLEv2" }].sort(
              (a, b) => b.value - a.value
            )
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
