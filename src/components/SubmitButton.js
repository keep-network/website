import React from "react"
import { Button } from "reactstrap"
import PropTypes from "prop-types"

const SubmitButton = ({ isLoading, onClick, children }) => (
  <Button
    color="primary"
    size="lg"
    className="btn-submit"
    disabled={isLoading}
    onClick={onClick}
  >
    {isLoading ? <div className="spinner" /> : children || "Submit"}
  </Button>
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
