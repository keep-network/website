import React from "react"
import { Col } from "reactstrap"
import { Image, Link } from "../components"

const RecommendedCard = ({ icon, button, title, body }) => {
  return (
    <Col xs={12} md={4} className="recommendedCard">
      <Image className="recommendedCardIcon" imageData={icon} />
      <h3 className="text-center">{title}</h3>
      <p className="text-center recCardBody">{body}</p>
      <Link url={button.url} className="recCardButton">
        {button.label}
      </Link>
    </Col>
  )
}

RecommendedCard.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string,
  button: PropTypes.object,
}

export default RecommendedCard
