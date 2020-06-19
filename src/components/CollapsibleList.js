import React, { useState } from "react"
import { Button, Collapse } from "reactstrap"
import PropTypes from "prop-types"
import classNames from "classnames"

import { ArrowDown } from "./Icons"

const CollapsibleList = ({ label, children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div
      className={classNames("collapsible-list", className, { open: isOpen })}
    >
      <div className="collapsible-list-label">
        <Button onClick={toggleOpen}>
          <span>{label}</span> <ArrowDown />
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
}

export default CollapsibleList
