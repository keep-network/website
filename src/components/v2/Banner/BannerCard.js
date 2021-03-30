import React from "react"
import PropTypes from "prop-types"

function BannerCard(props) {
  const { image } = props

  return (
    <div className="banner-card">
      <img className="banner-card-image" src={image} alt="" />
    </div>
  )
}

BannerCard.propTypes = {
  image: PropTypes.string,
}

export default BannerCard
