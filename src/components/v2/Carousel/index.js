import React from "react"
import PropTypes from "prop-types"
import Content from "./Content"
import { Container } from "reactstrap"

function Carousel(props) {
  const { classNames, title, subtitle, text } = props

  return (
    <section className={classNames}>
      <div className="carousel">
        <Container>
          <Content title={title} subtitle={subtitle} text={text} />
        </Container>
      </div>
    </section>
  )
}

Carousel.propTypes = {
  classNames: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
}

export default Carousel
