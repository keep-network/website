import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
import Logo from "./Logo"
function LogoWall(props) {
  const { items } = props

  return (
    <div className="logowall">
      <Container>
        {items &&
          items.map((item, index) => (
            <Logo key={`logo-${index}`} item={item} />
          ))}
      </Container>
    </div>
  )
}

LogoWall.propTypes = {
  items: PropTypes.array,
}

export default LogoWall
