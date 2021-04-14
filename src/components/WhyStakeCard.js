import React from "react";
import { Col } from "reactstrap";
import { Image } from "../components"

const StakeCard = ({icon, title, body}) => {
    return(
        <Col className="whyStakeCard">
            <Image className="whyStakeCardIcon" imageData={icon} />
            <h3 className="text-center mb-sm-4">{title}</h3>
            <p className="text-center">{body}</p>
        </Col>
    )
}

export default StakeCard;