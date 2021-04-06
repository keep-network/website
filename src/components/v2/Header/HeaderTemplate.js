import React, { useState } from "react"
import { Container, Collapse, Nav, Navbar, NavbarToggler } from "reactstrap"
import * as Icons from "../../Icons"
import NavScrollItem from "../Nav/NavScrollItem"
import PropTypes from "prop-types"
import Announcement from "../../Announcement"
import NavItem from "../Nav/NavItem"

const HeaderTemplate = ({ navItems = [] }) => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)
  const dismissAnnouncement = () => {
    setIsAnnouncementVisible(false)
  }

  return (
    <header>
      <Navbar>
        <Container fluid="md" className="header">
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
              <li className="nav-item">
                <a
                  href="https://discordapp.com/invite/wYezN7v"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icons.Discord />
                </a>
              </li>
              <a
                href="#"
                className="btn2 btn2-primary nav-item"
                rel="noopener noreferrer"
              >
                Launch
              </a>
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

export default HeaderTemplate
