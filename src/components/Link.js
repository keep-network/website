import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import PropTypes from "prop-types"

const Link = ({ url, children, ...props }) => {
  if (/^http/.test(url)) {
    return (
      <a href={url} rel="noopener noreferrer" target="_blank" {...props}>
        {children}
      </a>
    )
  }

  // Test if the url is a hash link on the home page
  const regex = /^\/?#/
  if (regex.test(url)) {
    return (
      <ScrollLink
        to={url.replace(regex, "")}
        smooth
        duration={500}
        offset={-100}
        {...props}
      >
        {children}
      </ScrollLink>
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
