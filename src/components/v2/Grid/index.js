import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
import Card from "../Card"

function Grid(props) {
  const { cards } = props

  return (
    <div className="page-grid">
      <Container fluid="md">
        {cards.map((card, index) => {
          const { icon, description, label } = card
          return (
            <Card
              key={`card-${index}`}
              icon={icon}
              description={description}
              label={label}
            />
          )
        })}
      </Container>
    </div>
  )
}

Grid.propTypes = {
  cards: PropTypes.array,
}

export default Grid
