import { useEffect, useState } from "react"
import CoveragePoolsFactory from "../lib/coverage-pool"

const coveragePoolV1 = CoveragePoolsFactory.create()
const useCoveragePoolsAPY = () => {
  const [isFetching, setIsFetching] = useState(true)
  const [coveragePoolAPY, setCoveragePoolAPY] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    let shouldSetState = true

    setIsFetching(true)
    coveragePoolV1
      .apy()
      .then((apy) => {
        if (shouldSetState) {
          setCoveragePoolAPY([
            {
              value: apy,
              pool: "COVERAGE",
            },
          ])
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

  return [coveragePoolAPY, isFetching, error]
}

export default useCoveragePoolsAPY
