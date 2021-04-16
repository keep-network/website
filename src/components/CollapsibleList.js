import React, { useState } from "react"
import { Collapse } from "reactstrap"
import { Image } from "../components"
import PropTypes from "prop-types"
import classNames from "classnames"

const CollapsibleList = ({
  label,
  children,
  className = "",
  closeIcon,
  plusIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  const renderIcon = () => {
    if (!plusIcon || !closeIcon) return []
    return isOpen ? (
      <Image imageData={closeIcon} className="icon" />
    ) : (
      <Image imageData={plusIcon} className="icon" />
    )
  }

  return (
    <div
      className={classNames("collapsible-list", className, { open: isOpen })}
    >
      <div className="collapsible-list-label" onClick={toggleOpen}>
        <p>
          {label}
          {renderIcon()}
        </p>
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
  closeIcon: PropTypes.object,
}

export default CollapsibleList
