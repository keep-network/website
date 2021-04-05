import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
import Card from "./Card"

function Grid(props) {
  const { title, subtitle, items } = props

  return (
    <div className="grid">
      <Container fluid="md">
        <div className="grid-header">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className="grid-content">
          {items &&
            items.map((card, index) => {
              const { image, title, label } = card
              return (
                <Card
                  key={`card-${index}`}
                  image={image}
                  title={title}
                  label={label}
                />
              )
            })}
        </div>
      </Container>
    </div>
  )
}

Grid.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  items: PropTypes.array,
}

export default Grid
