import React from "react"
import PropTypes from "prop-types"
import Image from "./Image"

const MiniLogoWall = ({ logos }) => {
  return (
    <div className="minilogo">
      {logos &&
        logos.map((logo, i) => (
          <div className="minilogo-item" key={`logo-${i}`}>
            <Image imageData={logo.icon} />
          </div>
        ))}
    </div>
  )
}

MiniLogoWall.propTypes = {
  logos: PropTypes.array,
}

export default MiniLogoWall
