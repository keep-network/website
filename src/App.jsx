import React, { Component } from 'react'
import { Alert, Button, Grid } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Picture } from 'react-responsive-picture'

import MainContent from './MainContent'
import NavContent from './NavContent';
import PressContent from './PressContent'
import PrivacyContent from './PrivacyContent'
import CaliforniaPrivacyContent from './CaliforniaPrivacyContent'
import TermsContent from './TermsContent'
import { routes } from './shared'
import * as Icons from './Icons'
import { WHITEPAPER_URL } from './shared'
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
                    <Route path={routes.PRIVACY} component={PrivacyContent} />
                    <Route path={routes.CALIFORNIA_PRIVACY} component={CaliforniaPrivacyContent} />
                    <Route path={routes.TERMS} component={TermsContent} />
                    <footer>
                        <Grid>
                            <div className="footer-columns">
                                <ul className="footer-column-1">
                                    <li><Icons.KeepCircle /></li>
                                    <li><Button
                                        className="email-btn"
                                        href="mailto:work@keep.network">
                                        Email Us
                                    </Button></li>
                                </ul>
                                <ul className="footer-column-2">
                                    <li>Company</li>
                                    <li><a href={WHITEPAPER_URL} rel="noopener noreferrer" target="_blank">Whitepaper</a></li>
                                    <li><a href="#team">Team</a></li>
                                    <li><a href="#advisors">Advisors</a></li>
                                    <li><a href="https://blog.keep.network" rel="noopener noreferrer" target="_blank">Blog</a></li>
                                </ul>
                                <ul className="footer-column-3">
                                    <li>Follow</li>
                                    <li><Link to={routes.PRESS}>Press</Link></li>
                                    <li><a href="https://twitter.com/keep_project" rel="noopener noreferrer" target="_blank">Twitter</a></li>
                                    <li><a href="https://t.me/KeepNetworkOfficial/" rel="noopener noreferrer" target="_blank">Telegram</a></li>
                                    <li><a href="https://www.reddit.com/r/KeepNetwork/" rel="noopener noreferrer" target="_blank">Reddit</a></li>
                                </ul>
                                <ul className="footer-column4">
                                    <li>Community</li>
                                    <li><a href="https://discordapp.com/invite/wYezN7v" rel="noopener noreferrer" target="_blank">Discord</a></li>
                                    <li><a href="https://github.com/keep-network/" rel="noopener noreferrer" target="_blank">Github</a></li>
                                </ul>
                            </div>
                            <div className="footer-bottom">
                                <p>A Thesis<sup>*</sup> Build</p>
                                <p>&#169; 2020 Keep SEZC. All Rights Reserved.</p>
                                <ul>
                                    <li><Link to={routes.PRIVACY}>Privacy Policy</Link></li>
                                    <li><Link to={routes.TERMS}>Terms of Use</Link></li>
                                </ul>
                            </div>
                            <Picture className="half-circle" src={getSrc('/images/texture-circle-3', 'png', 3)} />
                        </Grid>
                    </footer>
                    <Alert bsStyle="info">
                        <p>
                            Stake ETH, Earn KEEP: Join us for a live stakedrop event on June 8, 2020!
                            <a href="https://www.crowdcast.io/e/keep-stakedrop---live" rel="noopener noreferrer" target="_blank">
                                RSVP Here
                            </a>
                        </p>
                    </Alert>
                </div>
            </Router>
        )
    }
}

export default App
