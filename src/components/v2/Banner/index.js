import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"

function Banner(props) {
  const { title, children } = props

  return (
    <div className="banner">
      <Container>
        <h3 className="title">{title}</h3>
        <div className="banner-content">{children}</div>
      </Container>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Banner
