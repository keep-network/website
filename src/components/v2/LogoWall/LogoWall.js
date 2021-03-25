import React from "react"
import PropTypes from "prop-types"
import Logo from "./Logo"

function LogoWall(props) {
  const { items } = props

  return (
    <div className="logowall">
      {items &&
        items.map((item, index) => <Logo key={`logo-${index}`} item={item} />)}
    </div>
  )
}

LogoWall.propTypes = {
  items: PropTypes.array,
}

export default LogoWall
