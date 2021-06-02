import React from "react"
import PropTypes from "prop-types"

const LoadingBlocks = ({ numberOfBlocks = 3, animationDurationInSec = 1 }) => {
  const renderStyleForBlock = (currentBlockNumber) => {
    const duration = animationDurationInSec.toString() + "s"
    return {
      animation: `blocks_${numberOfBlocks}-shine_block${currentBlockNumber} ${duration} infinite ease-out`,
    }
  }

  return (
    <div
      className={`loading-block-container blocks-animation${numberOfBlocks}`}
    >
      {Array(numberOfBlocks)
        .fill(0)
        .map((_, i) => (
          <div
            className={`block block${i + 1}`}
            key={`loading_block_${i + 1}`}
            style={renderStyleForBlock(i + 1)}
          />
        ))}
    </div>
  )
}

LoadingBlocks.propTypes = {
  // @dev when adding more possible values to the numberOfBlocks please make
  // sure to also include the keyframesForLoadingBlocks mixin with given value
  // as an argument in loading-blocks.scss
  numberOfBlocks: PropTypes.oneOf([1, 2, 3]),
  animationDurationInSec: PropTypes.number,
}
LoadingBlocks.defaultProps = {
  numberOfBlocks: 3,
  animationDurationInSec: 1,
}

export default LoadingBlocks
