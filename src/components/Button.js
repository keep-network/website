import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Link from "./Link"

const Button = ({ className, label, url, onClick }) => {
  return url ? (
    <Link url={url} className={classNames(["btn", className])}>
      {label}
    </Link>
  ) : (
    <button className={classNames(["btn", className])} onClick={onClick}>
      {label}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: "",
  label: "",
  url: "",
  onClick: null,
}

export default Button
