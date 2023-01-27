import React, { useEffect, useState } from "react"
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
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

import Announcement from "./Announcement"
import NavScrollItem from "./NavScrollItem"
import Link from "./Link"
import * as Icons from "./Icons"

const NavItem = ({ label, url, subitems }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggle = () => setDropdownOpen(!dropdownOpen)

  // Test if dropdown menu
  if (!url && subitems && subitems.length > 0) {
    return (
      <Dropdown
        nav
        isOpen={dropdownOpen}
        toggle={toggle}
        onMouseEnter={toggle}
        onMouseLeave={toggle}
      >
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
                  <Link url={item.url} activeClassName="active">
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
      <Link url={url} activeClassName="active">
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

export const HeaderTemplate = ({
  navItems = [],
  isAnnouncementVisible,
  dismissAnnouncement,
}) => {
  const [collapsed, setCollapsed] = useState(true)
  const [isShrunk, setShrunk] = useState(false)

  const toggleNavbar = () => setCollapsed(!collapsed)

  useEffect(() => {
    const onScroll = () => {
      setShrunk((isShrunk) => {
        if (
          !isShrunk &&
          (document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50)
        ) {
          return true
        }

        if (
          isShrunk &&
          document.body.scrollTop < 4 &&
          document.documentElement.scrollTop < 4
        ) {
          return false
        }

        return isShrunk
      })
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className={isShrunk ? "stick" : ""}>
      {isAnnouncementVisible ? (
        <Announcement onClose={dismissAnnouncement} />
      ) : (
        ""
      )}
      <Navbar className={collapsed ? "collapsed" : ""}>
        <Container fluid="md">
          <NavScrollItem
            element="div"
            className={collapsed ? "brand" : "brand expanded"}
            activeClass="active"
            href="/"
            to="home"
          >
            <Icons.Keep height="61px" width="235px" />
          </NavScrollItem>
          {/* Mobile nav hamburger button */}
          <NavbarToggler
            className={collapsed ? "collapsed" : ""}
            onClick={toggleNavbar}
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav>
              {navItems.map((item, i) => (
                <NavItem key={`nav-item-${i}`} {...item} />
              ))}
            </Nav>
            <ul className="external_btn">
              <li className="nav-item">
                <Link
                  url="https://discord.gg/Threshold"
                  target="_blank"
                  className="discord"
                  rel="noopener noreferrer"
                >
                  <Icons.Discord />
                </Link>
                <div className="hint">
                  <Icons.Dashboard />
                  <span>
                    The staking dapp works best for a Desktop experience.
                  </span>
                </div>
              </li>
              <li className="nav-item">
                <Link
                  url="https://threshold.network/earn/btc/"
                  className="btn btn-primary btn-small nav-item"
                  rel="noopener noreferrer"
                >
                  Mint <span style={{ textTransform: "lowercase" }}>t</span>BTC
                </Link>
              </li>
            </ul>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

HeaderTemplate.propTypes = {
  navItems: PropTypes.array,
  isAnnouncementVisible: PropTypes.bool,
  dismissAnnouncement: PropTypes.func,
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

const Header = ({ isAnnouncementVisible, dismissAnnouncement }) => (
  <StaticQuery
    query={query}
    render={(data) => {
      const navItems =
        data.allMarkdownRemark.edges[0].node.frontmatter.nav_items
      return (
        <HeaderTemplate
          navItems={navItems}
          isAnnouncementVisible={isAnnouncementVisible}
          dismissAnnouncement={dismissAnnouncement}
        />
      )
    }}
  />
)

Header.propTypes = {
  isAnnouncementVisible: PropTypes.bool,
  dismissAnnouncement: PropTypes.func,
}

export default Header
