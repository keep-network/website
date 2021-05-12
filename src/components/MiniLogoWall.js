import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"
import { Link } from "../components"
import Image from "./Image"

const MiniLogoWall = ({ logos }) => {
  return (
    <Row>
      <Col xs={12} className="minilogo">
        <div className="minilogo-item-text">FEATURED IN</div>
        {logos &&
          logos.map((logo, i) => (
            <Link
              url={logo.icon.url}
              className="minilogo-item"
              key={`logo-${i}`}
            >
              <Image imageData={logo.icon} />
            </Link>
          ))}
      </Col>
    </Row>
  )
}

MiniLogoWall.propTypes = {
  logos: PropTypes.array,
}

export default MiniLogoWall
