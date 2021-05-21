import React, { useState } from "react"
import { Button, Collapse } from "reactstrap"
import { Image } from "../components"
import PropTypes from "prop-types"
import classNames from "classnames"

const CollapsibleList = ({ label, children, className = "", plusIcon }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div
      className={classNames("collapsible-list", className, { open: isOpen })}
    >
      <div className="collapsible-list-label">
        <Button onClick={toggleOpen}>
          <span>{label}</span>
          {plusIcon && <Image imageData={plusIcon} className="icon" />}
        </Button>
      </div>
      <Collapse isOpen={isOpen}>{children}</Collapse>
    </div>
  )
}

CollapsibleList.propTypes = {
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  plusIcon: PropTypes.object,
}

export default CollapsibleList
