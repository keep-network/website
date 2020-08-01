import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import Announcement from "./Announcement"
import Footer from "./Footer"
import Header from "./Header"
import SEO from "./SEO.js"

import "../css/app.scss"

const App = ({ children }) => {
  const [isAnnouncementVisible, setIsAnnouncementVisible] = useState(true)
  const dismissAnnouncement = () => {
    setIsAnnouncementVisible(false)
  }
  return (
    <div className={classNames("app", { "has-alert": isAnnouncementVisible })}>
      <SEO />
      <Header />
      {isAnnouncementVisible ? (
        <Announcement onClick={dismissAnnouncement} />
      ) : (
        ""
      )}
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
}

export default App
