import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"
import Image from "./Image"

const Card = ({ index, name, title, icon, url }) => {
  return (
    <div className="summary-grid-card">
      <div className="number">{index}</div>
      <div className="summary-grid-card-header">
        <Image imageData={icon} />
        <h4>{title}</h4>
      </div>
      <div className="summary-grid-card-footer">
        <Button url={url} label={name} className="btn-default full-width" />
      </div>
    </div>
  )
}

Card.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.object,
  url: PropTypes.string,
}

const SummaryGrid = ({ title, body, cards }) => {
  return (
    <div>
      <div className="summary-grid-header">
        <h2>{title}</h2>
        <h3>{body}</h3>
      </div>
      <div className="summary-grid-content">
        {cards &&
          cards.map((card, index) => {
            return <Card key={`card-${index}`} {...card} index={index + 1} />
          })}
      </div>
    </div>
  )
}

SummaryGrid.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  cards: PropTypes.array,
}

export default SummaryGrid
