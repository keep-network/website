import React, { useState } from "react"
import {
  Alert,
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
import { routes, sections } from "../constants"

const Header = () => {
  const [collapsed, setCollapsed] = useState(true)
  const toggleNavbar = () => setCollapsed(!collapsed)

  return (
    <header>
      <Alert color="info">
        <p>
          Stake ETH, Earn KEEP: Join us for a live stakedrop event on June 8,
          2020!
          <a
            href="https://www.crowdcast.io/e/keep-stakedrop---live"
            rel="noopener noreferrer"
            target="_blank"
          >
            RSVP Here
          </a>
        </p>
      </Alert>
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
              <NavScrollItem
                href={routes.MAIN}
                to={sections.TEAM}
                hashSpy={true}
              >
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
    </header>
  )
}

export default Header
