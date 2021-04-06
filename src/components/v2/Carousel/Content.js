import React from "react"
import PropTypes from "prop-types"

function Content(props) {
  const { title, subtitle, text, className } = props

  return (
    <div className={`section-container ${className}`}>
      <h1 className="section-title">{title}</h1>
      <h3 className="section-subtitle">{subtitle}</h3>
      <h4 className="section-text">{text}</h4>
    </div>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
}

export default Content
