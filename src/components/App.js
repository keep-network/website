import React from 'react'
import { Alert } from 'reactstrap'

import Footer from './Footer'
import NavContent from './NavContent';
import SEO from './SEO.js'

import '../css/app.scss'


const App = ({ children }) => (
    <div className="app has-alert">
        <SEO />
        <NavContent />
        {children}
        <Footer />
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
