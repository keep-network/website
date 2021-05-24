import React, { useState } from "react"
import PropTypes from "prop-types"

import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO.js"

import "../css/app.scss"

const App = ({ children, className }) => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)

  return (
    <div
      className={`app ${className} ${
        isAnnouncementVisible ? "announcement" : ""
      }`}
    >
      <SEO />
      <Header
        isAnnouncementVisible={isAnnouncementVisible}
        dismissAnnouncement={() => setIsAnnouncementVisible(false)}
      />
      {children}
      <Footer />
    </div>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
}

export default App
