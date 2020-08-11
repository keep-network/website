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

const NavItem = ({ label, url }) => {
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

export const HeaderTemplate = ({ navItems = [] }) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)
  const dismissAnnouncement = () => {
    setIsAnnouncementVisible(false)
  }

  return (
    <header>
      <Navbar>
        <Container fluid="md">
          <NavScrollItem
            element="div"
            className="brand"
            activeClass="active"
            href="/"
            to="home"
          >
            <Icons.Keep height="61px" width="235px" />
          </NavScrollItem>
          {/* Mobile nav hamburger button */}
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
      {isAnnouncementVisible ? (
        <Announcement onClose={dismissAnnouncement} />
      ) : (
        ""
      )}
    </header>
  )
}

HeaderTemplate.propTypes = {
  navItems: PropTypes.array,
}

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
