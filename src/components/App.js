import React, { Component } from 'react'
import { Alert, Container, Col, Row } from 'reactstrap'
import classNames from 'classnames'
import { Picture } from 'react-responsive-picture'

import NavContent from './NavContent';
import PageSection from './PageSection'
import * as Icons from './Icons'
import SEO from './SEO.js'
import { sections, WHITEPAPER_URL } from '../constants'
import { getSrc } from '../utils'

import '../css/app.scss'


class App extends Component {
    state = {
        alertMessage: `NOTICE: As of ${ new Date().toLocaleDateString() }, we have not announced any token sale or air drop of any kind.`
    }

    render() {
        const { alertMessage } = this.state

        return (
            <div className={classNames('App', {' has-alert': !!alertMessage })}>
                <SEO />
                <NavContent />
                { this.props.children }
                <PageSection id={sections.HIRING} convex>
                    <Row>
                        <Col sm={12} md={8}>
                            <h2>Interested in working with us?</h2>
                            <h3>

                                email
                                <a className="email-text" href="mailto:work@keep.network">
                                    work@keep.network
                                </a>
                                <a className="btn btn-primary" href="mailto:work@keep.network">
                                    <Icons.ArrowRight/>
                                </a>
                            </h3>
                        </Col>
                    </Row>
                </PageSection>
                <footer>
                    <Container fluid="md">
                        <div className="footer-columns">
                            <div className="footer-column-1">
                                <Icons.KeepCircle />
                            </div>
                            <ul className="footer-column-2">
                                <li><a href={WHITEPAPER_URL} rel="noopener noreferrer" target="_blank">Whitepaper</a></li>
                                <li><a href="#team">Team</a></li>
                                <li><a href="#advisors">Advisors</a></li>
                                <li><a href="https://blog.keep.network" rel="noopener noreferrer" target="_blank">Blog</a></li>
                            </ul>
                            <ul className="footer-column-3">
                                <li><a href="https://twitter.com/keep_project" rel="noopener noreferrer" target="_blank">Twitter</a></li>
                                <li><a href="https://t.me/KeepNetworkOfficial/" rel="noopener noreferrer" target="_blank">Telegram</a></li>
                                <li><a href="https://www.reddit.com/r/KeepNetwork/" rel="noopener noreferrer" target="_blank">Reddit</a></li>
                            </ul>
                        </div>
                        <span>&#169; 2020 Keep SEZC. All Rights Reserved.</span>
                        <Picture className="half-circle" src={getSrc('/images/texture-circle-3', 'png', 3)} />
                    </Container>
                </footer>
                { alertMessage && <Alert color="info">
                        <p>{ alertMessage }</p>
                    </Alert> }
            </div>
        )
    }
}

export default App
