import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

const Image = ({ imageData }) => {
  const { alt = "", childImageSharp, image } = imageData

  if (!!image && !!image.childImageSharp) {
    return <Img fluid={image.childImageSharp.fluid} alt={alt} />
  }

  if (!!childImageSharp) {
    return <Img fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === "string") {
    return <img src={image} alt={alt} />
  }

  return null
}

Image.propTypes = {
  imageData: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }).isRequired,
}

export default Image
