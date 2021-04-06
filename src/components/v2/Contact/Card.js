import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

function Card(props) {
  const { item } = props
  const { image, title, description, label } = item

  return (
    <div className="contact-card">
      <div className="contact-icon">
        <img src={image} alt="" />
      </div>
      <div className="contact-card-content">
        <h4 className="contact-title">{title}</h4>
        <h5 className="contact-description">{description}</h5>
        <Button className="btn2 btn2-primary" label={label} />
      </div>
    </div>
  )
}

/**
 * image: PropTypes.string,
 * title: PropTypes.string,
 * description: PropTypes.string,
 * label: PropTypes.string,
 */
Card.propTypes = {
  item: PropTypes.object,
}

export default Card
