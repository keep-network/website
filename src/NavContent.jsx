import React from 'react'
import { Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import { Link } from 'react-scroll'

import NavScrollItem from './NavScrollItem'
import * as Icons from './Icons'
import { routes, sections, WHITEPAPER_URL } from './shared'

const NavContent = () => {
    return (
        <Navbar fixedTop>
            <Navbar.Header>
                <NavbarBrand>
                    <NavScrollItem
                        activeClass="active"
                        href={routes.MAIN}
                        to={sections.HOME}><Icons.Keep height="61px" width="235px"/></NavScrollItem>
                </NavbarBrand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem
                        href={WHITEPAPER_URL}
                        rel="noopener noreferrer"
                        target="_blank">Whitepaper</NavItem>
                    <NavScrollItem
                        href={routes.MAIN}
                        to={sections.TEAM}
                        hashSpy={true}>Team</NavScrollItem>
                    <NavScrollItem
                        href={routes.MAIN}
                        to={sections.ADVISORS}
                        hashSpy={true}>Advisors</NavScrollItem>
                    <NavItem
                        href={routes.PRESS}>Press</NavItem>
                    <NavItem
                        href="https://blog.keep.network"
                        rel="noopener noreferrer"
                        target="_blank">Blog</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavContent
