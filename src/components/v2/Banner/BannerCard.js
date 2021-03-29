import React from "react"
import PropTypes from "prop-types"

function BannerCard(props) {
  const { image } = props

  return (
    <div className="banner-card">
      <img src={image} alt="" />
    </div>
  )
}

BannerCard.propTypes = {
  image: PropTypes.object,
}

export default BannerCard
