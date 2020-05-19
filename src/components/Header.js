import React, { useState } from "react"
import {
  Container,
  Collapse,
  Nav,
  Navbar,
  NavbarToggler,
  NavLink,
} from "reactstrap"
import { graphql, Link, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

import Announcement from "./Announcement"
import NavScrollItem from "./NavScrollItem"
import * as Icons from "./Icons"
import { routes, sections } from "../constants"

const NavItem = ({ is_external_link: isExternal, label, url }) => {
  if (isExternal) {
    return (
      <li className="nav-item">
        <NavLink href={url} rel="noopener noreferrer" target="_blank">
          {label}
        </NavLink>
      </li>
    )
  }

  // Test if the url is a hash link on the home page
  if (/^#/.test(url)) {
    return (
      <NavScrollItem href="/" to={url.slice(1)} hashSpy={true}>
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
  is_external_link: PropTypes.bool,
  label: PropTypes.string,
  url: PropTypes.string,
}

export const HeaderTemplate = ({ navItems = [] }) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <header>
      <Announcement />
      <Navbar>
        <Container fluid="md">
          <NavScrollItem
            element="div"
            className="brand"
            activeClass="active"
            href={routes.MAIN}
            to={sections.HOME}
          >
            <Icons.Keep height="61px" width="235px" />
          </NavScrollItem>
          <NavbarToggler onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar>
            <Nav>
              {navItems.map((item, i) => (
                <NavItem key={`nav-item-${i}`} {...item} />
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

HeaderTemplate.propTypes = {
  navItems: PropTypes.array,
}

// Query for Header
export const query = graphql`
  query Header {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "header-nav" } } }
    ) {
      edges {
        node {
          frontmatter {
            nav_items {
              label
              is_external_link
              url
            }
          }
        }
      }
    }
  }
`

const Header = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const navItems =
        data.allMarkdownRemark.edges[0].node.frontmatter.nav_items
      return <HeaderTemplate navItems={navItems} />
    }}
  />
)

export default Header
