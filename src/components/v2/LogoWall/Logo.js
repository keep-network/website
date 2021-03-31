import React from "react"
import PropTypes from "prop-types"

function Logo(props) {
  const { item } = props
  return (
    <div className="logo">
      <img src={item} alt="" />
    </div>
  )
}

Logo.propTypes = {
  item: PropTypes.string,
}

export default Logo
