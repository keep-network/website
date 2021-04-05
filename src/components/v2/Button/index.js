import React from "react"
import PropTypes from "prop-types"

function Button(props) {
  const { className, label } = props

  return (
    <button className={`${className} btn2`}>
      <p>{label}</p>
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
}

export default Button
