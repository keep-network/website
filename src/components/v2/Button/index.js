import React from "react"
import PropTypes from "prop-types"

function Button(props) {
  const { label, type } = props

  return (
    <button className={`btn2 btn2-state--${type}`}>
      <p>{label}</p>
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
}

export default Button
