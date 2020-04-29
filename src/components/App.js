import React from 'react'
import { Alert, Button, Container } from 'reactstrap'
import { Picture } from 'react-responsive-picture'

import NavContent from './NavContent';
import * as Icons from './Icons'
import SEO from './SEO.js'
import { WHITEPAPER_URL, routes } from '../constants'
import { getSrc } from '../utils'

import '../css/app.scss'


const App = ({ children }) => (
    <div className="app has-alert">
        <SEO />
        <NavContent />
        {children}
        <footer>
            <Container fluid="md">
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
                        <li><a href={routes.PRESS}>Press</a></li>
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
                        <li><a href={routes.PRIVACY}>Privacy Policy</a></li>
                        <li><a href={routes.TERMS}>Terms of Use</a></li>
                        <li><a href={routes.PLAYING_FOR_KEEPS_TERMS}>Playing for Keeps Terms</a></li>
                    </ul>
                </div>
                <Picture className="half-circle" src={getSrc('/img/texture-circle-3', 'png', 3)} />
            </Container>
        </footer>
        <Alert color="info">
            <p>
                Stake ETH, Earn KEEP: Join us for a live stakedrop event on June 8, 2020!
                <a href="https://www.crowdcast.io/e/keep-stakedrop---live" rel="noopener noreferrer" target="_blank">
                    RSVP Here
                </a>
            </p>
        </Alert>
    </div>
)

export default App
