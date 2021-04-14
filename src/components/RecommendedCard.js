import React from "react";
import { Col } from "reactstrap";
import { Image, Link } from "../components"

const RecommendedCard = ({icon, button, title, body}) => {
    return(
        <Col className="recommendedCard">
            <Image className="recommendedCardIcon" imageData={icon} />
            <h3 className="text-center">{title}</h3>
            <p className="text-center recCardBody">{body}</p>
            <Link url={button.url} className="recCardButton">
            {button.label}
            </Link>
        </Col>
    )
}

export default RecommendedCard;