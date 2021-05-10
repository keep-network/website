import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"

const Button = ({ className, label, url, onClick }) => {
    
  const isEmail = /^([A-Za-z0-9_\-.+])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,})$/.test(url);

  return (
    <a
      href={isEmail ? `mailto:${url}` : url}
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
