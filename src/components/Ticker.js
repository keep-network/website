import React from "react"
import PropTypes from "prop-types"
import Ticker from "react-ticker"

const Tick = ({ items }) => {
  const renderItems = () => {
    return (
      <div className="ticker-container">
        {items &&
          items.map((item, i) => (
            <span key={`ticker-${i}`} className="ticker-content">
              {item.label}
            </span>
          ))}
      </div>
    )
  }

  return (
    <Ticker>
      {({ index }) => {
        return renderItems()
      }}
    </Ticker>
  )
}

Tick.propTypes = {
  items: PropTypes.array,
}

export default Tick
