import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"
import Card from "./Card"

function Contact(props) {
  const { title, items } = props

  return (
    <div className="contact">
      <Container>
        <div className="contact-header">
          <h1>{title}</h1>
        </div>
        <div className="contact-content">
          <h4>Get the Keep Newsletter</h4>
          <h5>Sign up for our newsletter and never miss an update.</h5>
          <form className="form-group">
            <input className="contact-email" placeholder="you@example.com" />
          </form>
          <div className="contact-cards">
            {items &&
              items.map((item, index) => (
                <Card key={`contact-card-${index}`} item={item} />
              ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

Contact.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Contact
