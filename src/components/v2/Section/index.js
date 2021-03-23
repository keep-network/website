import React from "react"
import PropTypes from "prop-types"

function Section(props) {
  const { children } = props

  return <section className="container">{children}</section>
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Section
