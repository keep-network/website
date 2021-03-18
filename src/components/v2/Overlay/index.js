import React from "react"
import PropTypes from "prop-types"

function Overlay(props) {
  const { children } = props

  return (
    <section>
      <div className="page-section-content">{children}</div>
    </section>
  )
}

Overlay.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Overlay
