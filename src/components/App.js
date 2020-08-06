import React from "react"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO.js"

import "../css/app.scss"

const App = ({ children, className }) => (
  <div className={`app ${className}`}>
    <SEO />
    <Header />
    {children}
    <Footer />
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

export default App
