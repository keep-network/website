import React from "react"
import { NavLink } from "reactstrap"
import { Link } from "gatsby"
import NavScrollItem from "./NavScrollItem"

function NavItem(props) {
  const { label, url } = props

  // Test if url is an external link
  if (/^http/.test(url)) {
    return (
      <li className="nav-item">
        <NavLink href={url} rel="noopener noreferrer" target="_blank">
          {label}
        </NavLink>
      </li>
    )
  }

  // Test if the url is a hash link on the home page
  const regex = /^\/?#/
  if (regex.test(url)) {
    return (
      <NavScrollItem href={url} to={url.replace(regex, "")} hashSpy={true}>
        {label}
      </NavScrollItem>
    )
  }

  return (
    <li className="nav-item">
      <Link to={url} activeClassName="active">
        {label}
      </Link>
    </li>
  )
}

NavItem.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
}

export default NavItem
