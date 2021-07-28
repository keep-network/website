import { useEffect, useState } from "react"

import LiquidityRewardsFactory, {
  SUPPORTED_LIQUIDITY_POOLS,
} from "../lib/liquidity-rewards"
import { API_URL } from "../redux"

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
      fetch(`${API_URL}/calculate-apy?pool=KEEP_ETH`).then((res) => res.json()),
      fetch(`${API_URL}/calculate-apy?pool=TBTC_SADDLE`).then((res) =>
        res.json()
      ),
      fetch(`${API_URL}/calculate-apy?pool=TBTC_ETH`).then((res) => res.json()),
      fetch(`${API_URL}/calculate-apy?pool=KEEP`).then((res) => res.json()),
    ])
      .then(([apyKEEPETH, apyTBTCSaddle, apyTBTCETH, apyKEEP]) => {
        if (shouldSetState) {
          setLiquidityRewardsAPYs(
            [
              { value: apyKEEPETH.data, pool: "KEEP/ETH" },
              { value: apyTBTCSaddle.data, pool: "TBTC/SADDLE" },
              { value: apyTBTCETH.data, pool: "TBTC/ETH" },
              { value: apyKEEP.data, pool: "KEEP" },
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
