import React from "react"
import PropTypes from "prop-types"
import Content from "./Content"
import { Container } from "reactstrap"

function Carousel(props) {
  const { classNames, title, subtitle, text, right } = props

  return (
    <section className={classNames}>
      <div className="carousel">
        <Container>
          <Content
            title={title}
            subtitle={subtitle}
            text={text}
            className={right ? `section-container-right` : ``}
          />
        </Container>
      </div>
    </section>
  )
}

Carousel.propTypes = {
  classNames: PropTypes.string,
  right: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
}

export default Carousel
