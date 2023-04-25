import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import Link from "./Link"

const Button = ({ className, label, url, onClick }) => {
  const body = { __html: label }

  return url ? (
    <Link
      url={url}
      className={classNames(["btn", className])}
      dangerouslySetInnerHTML={body}
    />
  ) : (
    <button
      className={classNames(["btn", className])}
      onClick={onClick}
      dangerouslySetInnerHTML={body}
    />
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
