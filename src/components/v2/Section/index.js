import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
function Section(props) {
  const { classNames, children } = props

  return (
    <section className={classNames}>
      <Container fluid="md" className="container">
        {children}
      </Container>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classNames: PropTypes.array,
}

export default Section
