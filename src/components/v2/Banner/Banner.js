import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"
import BannerCard from "./BannerCard"

function Banner(props) {
  const { title, items } = props

  return (
    <div className="banner">
      <Container>
        <h3 className="banner-title">{title}</h3>
        <div className="banner-content">
          {items.map((item, index) => (
            <BannerCard key={`banner-card-${index}`} item={item} />
          ))}
        </div>
      </Container>
    </div>
  )
}

Banner.propTypes = {
  title: PropTypes.string,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default Banner
