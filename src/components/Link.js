import React from "react"
import { Link as GatsbyLink } from "gatsby"
import PropTypes from "prop-types"

const Link = ({ url, children, ...props }) => {
  if (/^http/.test(url)) {
    return (
      <a href={url} rel="noopener noreferrer" target="_blank" {...props}>
        {children}
      </a>
    )
  }

  return (
    <GatsbyLink to={url} {...props}>
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  url: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Link
