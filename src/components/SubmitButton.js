import React from "react"
import PropTypes from "prop-types"

const SubmitButton = ({ isLoading, onClick, children }) => (
  <a
    className="btn button-sm btn-submit"
    disabled={isLoading}
    onClick={onClick}
  >
    {isLoading ? <div className="spinner" /> : children || "Submit"}
  </a>
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
