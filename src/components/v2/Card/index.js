import React from "react"
import PropTypes from "prop-types"
// TODO: #339 - will uncomment in next PR
// import Icon from "../Icon"
import Button from "../Button"

function Card(props) {
  const { description, label } = props

  return (
    <div className="card">
      <div className="card card-row">
        {/* [TODO: #339 - will uncomment in next PR] <Icon src={icon} /> */}
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
