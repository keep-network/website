import React from "react"
import { Link as GatsbyLink, withPrefix } from "gatsby"
import { Link as ScrollLink } from "react-scroll"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"

const Link = ({ url, children, ...props }) => {
  let location
  try {
    location = useLocation()
  } catch (error) {
    location = window.location
  }

  const currentPageIsHome = location.pathname === withPrefix("/")

  // Test if url is an external link
  if (/^http/.test(url)) {
    return (
      <a href={url} rel="noopener noreferrer" target="_blank" {...props}>
        {children}
      </a>
    )
  }

  // Test if the url is a hash link on the home page
  const regex = /^\/?#/
  if (currentPageIsHome && regex.test(url)) {
    return (
      <ScrollLink
        href={url}
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
