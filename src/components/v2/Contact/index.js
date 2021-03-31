import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"

function Contact(props) {
  const { title } = props

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
        </div>
      </Container>
    </div>
  )
}

Contact.propTypes = {
  title: PropTypes.string,
}

export default Contact
