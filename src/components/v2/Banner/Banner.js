import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"
import BannerCard from "./BannerCard"

function Banner(props) {
  const { title, images } = props

  return (
    <div className="banner">
      <Container>
        <div className="banner-container">
          <div className="banner-header">
            <h3 className="banner-title">{title}</h3>
          </div>
          <div className="banner-content">
            {images.map((image, index) => (
              <BannerCard key={`banner-card-${index}`} image={image} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  images: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Banner
