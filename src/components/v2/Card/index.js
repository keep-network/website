import React from "react"
import PropTypes from "prop-types"
import Icon from "../Icon"
import Button from "../Button"

function Card(props) {
  const { icon, description, label } = props

  return (
    <div className="card">
      <div className="card card-row">
        {/* <Icon src={icon} /> */}
        <h4>{description}</h4>
      </div>
      <div className="card card-row">
        <Button label={label} type="secondary" />
      </div>
    </div>
  )
}

Card.propTypes = {
  icon: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
}

export default Card
