import React from "react"
import PropTypes from "prop-types"

function Icon(props) {
  const { classNames, src, alt } = props

  return <img src={require(src)} className={`icon ${classNames}`} alt={alt} />
}

Icon.propTypes = {
  classNames: PropTypes.array,
  src: PropTypes.string,
  alt: PropTypes.string,
}

export default Icon
