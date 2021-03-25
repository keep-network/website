import React from "react"
import PropTypes from "prop-types"

function Logo(props) {
  const { item } = props
  return <img className="logo" src={require(item)} alt="" />
}

Logo.propTypes = {
  item: PropTypes.object,
}

export default Logo
