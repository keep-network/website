import React from "react"
import PropTypes from "prop-types";

const SlideInAnimation = ({ durationInSec = 1, children }) => {
  const chars = children.split("")

  const renderStyleForCharacter = (currentCharacterNumber) => {
    const duration = durationInSec.toString() + "s"
    return {
      animationName: `characters_${children.length}-move_character${currentCharacterNumber}`,
      animationDuration: duration,
      animationTimingFunction: "ease-out",
      animationIterationCount: 1,
      animationFillMode: "forwards",
      position: "relative",
      margin: "0 1px",
    }
  }

  const renderCharacters = (chars) => {
    return (
      <span className={"text-loader-container"}>
        {chars.map((char, i) => {
          return (
            <span
              className={`character${i + 1}`}
              key={`text-loader-${i}`}
              style={renderStyleForCharacter(i + 1)}
            >
              {char}
            </span>
          )
        })}
      </span>
    )
  }

  return renderCharacters(chars)
}

SlideInAnimation.propTypes = {
  durationInSec: PropTypes.number,
  children: (props, propName, componentName) => {
    const chars = props[propName].split("")
    if (chars.length < 1) {
      return new Error("No children supplied for " + componentName)
    } else if (chars.length > 10) {
      return new Error(
        "Children prop of " +
          componentName +
          "can't have more than 10 characters."
      )
    }
  },
}
SlideInAnimation.defaultProps = {
  durationInSec: 1,
}

export default SlideInAnimation
