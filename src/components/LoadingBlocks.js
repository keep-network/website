import React from "react"
import PropTypes from "prop-types"

const LoadingBlocks = ({ numberOfBlocks = 3 }) => {
  const renderBlocks = () => {
    const blocks = []
    for (let i = 1; i < numberOfBlocks + 1; i++) {
      blocks.push(<div className={`block block${i}`}></div>)
    }
    return blocks
  }

  // const containerNumberOfBlockCLassName =
  return (
    <div
      className={`loading-block-container blocks-animation${numberOfBlocks}`}
    >
      {renderBlocks()}
    </div>
  )
}

export default LoadingBlocks

LoadingBlocks.propTypes = {
  numberOfBlock: PropTypes.oneOf([1, 2, 3]),
}
LoadingBlocks.defaultProps = {
  numberOfBlock: 3,
}
