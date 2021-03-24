import React from "react"
// import PropTypes from "prop-types"
// import Section from "../Section"
import Button from "../Button"

function Overlay(props) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <h1>
          Stake on Ethereum’s first private computer and earn up to 200% APY.
        </h1>
        <h4>
          Staking with Keep is the best way to back a truly decentralized network and the future of DeFi.
        </h4>
        <div className="button-group">
          <Button label="ABOUT KEEP" type="primary" />
          <Button label="BUTTON" type="secondary" />
        </div>
      </div>
    </div>
  )
}

Overlay.propTypes = {}

export default Overlay
