import React from "react"
import PropTypes from "prop-types"
import Content from "./Content"

function Carousel(props) {
  const { title, subtitle, description } = props

  return (
    <>
      <Content title={title} subtitle={subtitle} description={description} />
    </>
  )
}

Carousel.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
}

export default Carousel
