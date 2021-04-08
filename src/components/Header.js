import React, { useState } from "react"
import {
  Container,
  Collapse,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
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

const NavItem = ({ label, url, subitems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(!dropdownOpen)

  // Test if dropdown menu
  if (!url && subitems && subitems.length > 0) {
    return (
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav>{label}</DropdownToggle>
        <DropdownMenu>
          {subitems.map((item, i) => (
            <DropdownItem key={`dropdown-item-${i}`}>
              <li className="nav-item">
                {/^http/.test(item.url) ? ( // Test if url is an external link
                  <NavLink
                    href={item.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <Link to={item.url} activeClassName="active">
                    {item.label}
                  </Link>
                )}
              </li>
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
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
  subitems: PropTypes.array,
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
            <ul className="external_btn">
              <li>
                <a
                  href="https://discordapp.com/invite/wYezN7v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.Discord />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="button button-primary nav-item"
                  rel="noopener noreferrer"
                >
                  Launch
                </a>
              </li>
            </ul>
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
              subitems {
                label
                url
              }
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
