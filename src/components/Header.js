import React, { useState } from "react"
import {
  Container,
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavbarToggler,
  NavLink,
} from "reactstrap"
import { Link } from "gatsby"

import NavScrollItem from "./NavScrollItem"
import * as Icons from "./Icons"
import { routes, sections, WHITEPAPER_URL } from "../constants"

const Header = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <Navbar fixed="top">
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
            <NavItem>
              <NavLink
                href={WHITEPAPER_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                Whitepaper
              </NavLink>
            </NavItem>
            <NavScrollItem href={routes.MAIN} to={sections.TEAM} hashSpy={true}>
              Team
            </NavScrollItem>
            <NavScrollItem
              href={routes.MAIN}
              to={sections.ADVISORS}
              hashSpy={true}
            >
              Advisors
            </NavScrollItem>
            <NavItem>
              <Link to={routes.PRESS} activeClassName="active">
                Press
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://blog.keep.network"
                rel="noopener noreferrer"
                target="_blank"
              >
                Blog
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
