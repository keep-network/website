import React from "react"
import PropTypes from "prop-types"
// TODO: #339 - will uncomment in next PR
// import Icon from "../Icon"
import Button from "../Button"

function Card(props) {
  const { image, title, label } = props

  return (
    <div className="grid-card">
      <div className="grid-card-header">
        <img src={image} alt="" />
        <h4>{title}</h4>
      </div>
      <div className="grid-card-footer">
        <Button label={label} className="btn2-secondary btn2-full-width" />
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  label: PropTypes.string,
}

export default Card
