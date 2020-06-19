import React, { useState } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Container } from "reactstrap"

import { ArrowRight } from "./Icons"

const PageSection = ({ id, additionalClassNames, children, collapsible }) => {
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
    <section className={classes} id={id}>
      <div className="page-section-content">
        <Container fluid="md">
          {children}
          {collapsible ? (
            <button className="see-all" onClick={toggleCollapse}>
              <span>{isCollapsed ? "See all" : "See less"}</span>
              <ArrowRight />
            </button>
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
}

PageSection.defaultProps = {
  id: "",
  additionalClassNames: [],
  collapsible: false,
}

export default PageSection
