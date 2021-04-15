import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

const Button = ({ className, label, url, onClick }) => {
  return (
    <a
      href={url}
      className={classNames(["btn", className])}
      onClick={(e) => onClick(e)}
    >
      {label}
    </a>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
