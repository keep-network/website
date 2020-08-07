import React from "react"
import PropTypes from "prop-types"

const SubmitButton = ({ isLoading, onClick, children }) => (
  <button className="btn-submit" disabled={isLoading} onClick={onClick}>
    {isLoading ? <div className="spinner" /> : children || "Submit"}
  </button>
)

SubmitButton.propTypes = {
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
}

export default SubmitButton
