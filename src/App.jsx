import React, { Component } from 'react'
import { Alert, Grid, Col, Row } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Picture } from 'react-responsive-picture'

import MainContent from './MainContent'
import NavContent from './NavContent';
import PressContent from './PressContent'
import PageSection from './PageSection'
import { routes } from './shared'
import * as Icons from './Icons'
import { sections, WHITEPAPER_URL } from './shared'
import { getSrc } from './utils'

import './app.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App has-alert">
                    <NavContent />
                    <Route path={routes.MAIN} exact component={() => <MainContent {...this.props} />} />
                    <Route path={routes.PRESS} component={PressContent} />
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
                        <Grid>
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
                        </Grid>
                    </footer>
                    <Alert bsStyle="info">
                        <p>
                            <span>ANNOUNCING:</span> First stakedrop for tBTC on June 8, 2020. <a href="#">Add to Calendar</a>
                        </p>
                    </Alert>
                </div>
            </Router>
        )
    }
}

export default App
