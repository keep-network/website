import React from "react"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageData, className = "" }) => {
  const { alt = "", childImageSharp, image } = imageData

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={className}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    )
  }

  if (!!childImageSharp) {
    return <Img className={className} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && !!image.relativePath) {
    return (
      <img
        className={className}
        src={withPrefix(`/images/${image.relativePath}`)}
        alt={alt}
      />
    )
  }

  return null
}

Image.propTypes = {
  imageData: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }).isRequired,
  className: PropTypes.string,
}

export default Image
