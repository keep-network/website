import React from "react"
import { Col, Row } from "reactstrap"
import { FeatureCard } from "./index"
import { truncate } from "../utils"
import * as moment from "moment"
import PropTypes from "prop-types"

const GovernanceForum = ({ title, body, cards }) => {
  return (
    <>
      <Row>
        <Col xs={12}>
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          <h3 dangerouslySetInnerHTML={{ __html: body }} />
        </Col>
      </Row>
      <Row>
        {cards.map((card, i) => (
          <Col key={`card-${i}`} xs={12} md={6} lg={4}>
            <FeatureCard
              icon={`/images/${card.icon.image.relativePath}`}
              title={truncate(card.title, 40)}
              text={moment(card.date).format("MMMM D, YYYY")}
              button={card.button}
              btnClass="btn-default"
              className={"governance-feature-card"}
            />
          </Col>
        ))}
      </Row>
    </>
  )
}

GovernanceForum.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  cards: PropTypes.array,
}

export default GovernanceForum
