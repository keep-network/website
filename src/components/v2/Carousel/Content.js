import React from "react"
import PropTypes from "prop-types"

function Content(props) {
  const { title, subtitle, text } = props

  return (
    <div className="section-container">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{text}</p>
    </div>
  )
}

Content.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
}

export default Content
