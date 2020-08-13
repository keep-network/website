import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Container } from "reactstrap"

import { ArrowRight } from "./Icons"

export const SeeAllButton = ({ collapsed = true, onClick = () => {} }) => (
  <button className={classNames("see-all", { collapsed })} onClick={onClick}>
    <span>{collapsed ? "See all" : "See less"}</span>
    <ArrowRight />
  </button>
)

SeeAllButton.propTypes = {
  collapsed: PropTypes.bool,
  onClick: PropTypes.func,
}

const PageSection = ({
  id,
  additionalClassNames,
  children,
  collapsible,
  style,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(collapsible ? true : false)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  const classes = classNames(
    "page-section",
    { collapsible: collapsible, collapsed: isCollapsed },
    id,
    additionalClassNames
  )

  return (
    <section className={classes} id={id} style={style}>
      <div className="page-section-content">
        <Container fluid="md">
          {children}
          {collapsible ? (
            <SeeAllButton collapsed={isCollapsed} onClick={toggleCollapse} />
          ) : (
            ""
          )}
        </Container>
      </div>
    </section>
  )
}

PageSection.propTypes = {
  id: PropTypes.string,
  additionalClassNames: PropTypes.array,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  collapsible: PropTypes.bool,
  style: PropTypes.object,
}

PageSection.defaultProps = {
  id: "",
  additionalClassNames: [],
  collapsible: false,
}

export default PageSection
