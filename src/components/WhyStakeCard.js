import React from "react"
import { Col } from "reactstrap"
import PropTypes from "prop-types"

import { Image } from "../components"

const StakeCard = ({ icon, title, body }) => {
  return (
    <Col xs={12} md={6} className="whyStakeCard">
      <Image className="whyStakeCardIcon" imageData={icon} />
      <h3 className="text-center mb-sm-4">{title}</h3>
      <p className="text-center">{body}</p>
    </Col>
  )
}

StakeCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string,
}

export default StakeCard
