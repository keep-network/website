import React, { Component } from 'react'
import { Alert, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap'
import { Link } from 'react-scroll'
import classNames from 'classnames'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainContent from './MainContent'
import NavScrollItem from './NavScrollItem'
// import Snippet from './Snippet'
import * as Icons from './Icons'
import { sections, WHITEPAPER_URL } from './shared'

import './app.css'

class App extends Component {
    state = {
        alertMessage: `NOTICE: As of ${ new Date().toLocaleDateString() }, we have not announced any token sale or air drop of any kind.`
    }

    render() {
        const { alertMessage } = this.state

        return (
            <Router>
                <div className={classNames('App', {' has-alert': !!alertMessage })}>
                    <Navbar fixedTop>
                        <Navbar.Header>
                            <NavbarBrand>
                                <Link activeClass="active" to={sections.HOME} smooth spy duration={500}><Icons.Keep height="61px" width="235px"/></Link>
                            </NavbarBrand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>
                                <NavItem
                                    href={WHITEPAPER_URL}
                                    rel="noopener noreferrer"
                                    target="_blank">Whitepaper</NavItem>
                                <NavScrollItem to={sections.TEAM}>Team</NavScrollItem>
                                <NavScrollItem to={sections.ADVISORS}>Advisors</NavScrollItem>
                                <NavItem
                                    href="https://blog.keep.network"
                                    rel="noopener noreferrer"
                                    target="_blank">Blog</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Route path="/" exact component={() => <MainContent {...this.props} />} />
                    { alertMessage && <Alert bsStyle="info">
                            <p>{ alertMessage }</p>
                        </Alert> }
                </div>
            </Router>
        )
    }
}

export default App
