import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

function Card(props) {
  const { image, title, description, label } = props

  return (
    <div className="contact-card">
      <div className="contact-icon">
        <img src={image} alt="" />
      </div>
      <div className="contact-content">
        <h4 className="contact-title">{title}</h4>
        <p className="contact-description">{description}</p>
        <Button type="primary" label={label} />
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
}

export default Card
