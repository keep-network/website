import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"

function Overlay(props) {
  const { children } = props

  return (
    <section>
      <div className="page-section-content">
        <Container fluid="md"> {children} </Container>
      </div>
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
