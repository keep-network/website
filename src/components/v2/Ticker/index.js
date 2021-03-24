import React from "react"
import PropTypes from "prop-types"
import Ticker from "react-ticker"

function Tick(props) {
  const { items } = props

  const renderItems = () => {
    return (
      <div className="ticker-container">
        {items &&
          items.map((item) => (
            <span key={item} className="ticker-content">
              {item}
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
