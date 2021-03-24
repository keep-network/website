import React from "react"
import PropTypes from "prop-types"
import Content from "./Content"

function Carousel(props) {
  const { classNames, title, subtitle, description } = props

  return (
    <section className={classNames}>
      <Content title={title} subtitle={subtitle} description={description} />
    </section>
  )
}

Carousel.propTypes = {
  classNames: PropTypes.array,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
}

export default Carousel
