import React from "react"
import PropTypes from "prop-types"

const LoadingBlocks = ({ numberOfBlocks = 3, animationDurationInSec = 1 }) => {
  const renderStyleForBlock = (currentBlockNumber) => {
    const duration = animationDurationInSec.toString() + "s"
    return {
      animation: `blocks_${numberOfBlocks}-shine_block${currentBlockNumber} ${duration} infinite ease-out`,
    }
  }

  const renderBlocks = () => {
    const blocks = []
    for (let i = 1; i < numberOfBlocks + 1; i++) {
      blocks.push(
        <div
          className={`block block${i}`}
          key={`loading_block_${i}`}
          style={renderStyleForBlock(i)}
        />
      )
    }
    return blocks
  }

  return (
    <div
      className={`loading-block-container blocks-animation${numberOfBlocks}`}
    >
      {renderBlocks()}
    </div>
  )
}

LoadingBlocks.propTypes = {
  numberOfBlocks: PropTypes.oneOf([1, 2, 3]),
  animationDurationInSec: PropTypes.number,
}
LoadingBlocks.defaultProps = {
  numberOfBlocks: 3,
  animationDurationInSec: 1,
}

export default LoadingBlocks
