import React from "react"
import PropTypes from "prop-types"

function Section(props) {
  const { classNames, children } = props

  return (
    <section className={classNames}>
      <div className="container">{children}</div>
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  classNames: PropTypes.array,
}

export default Section
