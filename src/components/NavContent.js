import React, { useState } from 'react'
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavbarToggler } from 'reactstrap'

import NavScrollItem from './NavScrollItem'
import * as Icons from './Icons'
import { routes, sections, WHITEPAPER_URL } from '../constants'

const NavContent = () => {
    const [collapsed, setCollapsed] = useState(true)
    const toggleNavbar = () => setCollapsed(!collapsed)

    return (
        <Navbar fixed="top">
            <NavbarBrand>
                <NavScrollItem
                    activeClass="active"
                    href={routes.MAIN}
                    to={sections.HOME}><Icons.Keep height="61px" width="235px"/></NavScrollItem>
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} />
            <Collapse isOpen={!collapsed} navbar>
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
            </Collapse>
        </Navbar>
    )
}

export default NavContent
