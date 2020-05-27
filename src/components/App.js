import React from "react"
import { Alert } from "reactstrap"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO.js"

import "../css/app.scss"

const App = ({ children }) => (
  <div className="app has-alert">
    <SEO />
    <Header />
    {children}
    <Footer />
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
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default App
