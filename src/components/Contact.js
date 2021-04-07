import React from "react"
import PropTypes from "prop-types"

import Button from "./Button"
import EmailForm from "./EmailForm"
import Image from "./Image"
import { actionTypes } from "../redux"

const Card = ({ icon, title, body, link }) => {
  return (
    <div className="contact-card">
      <div className="contact-icon">
        <Image imageData={icon} />
      </div>
      <div className="contact-card-content">
        <h4 className="contact-title">{title}</h4>
        <h5 className="contact-description">{body}</h5>
        <Button
          className="button button-primary"
          label={link.name}
          url={link.url}
        />
      </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  link: PropTypes.object,
  icon: PropTypes.object,
}

const Contact = ({
  title,
  header,
  description,
  cards,
  signupMailingList,
  ajaxRequestStates,
}) => {
  return (
    <div>
      <EmailForm
        label="Email"
        placeholder="you@example.com"
        onSubmit={signupMailingList}
        requestStates={ajaxRequestStates}
        request={actionTypes.SIGNUP_MAILING_LIST}
      >
        <h3>{title}</h3>
        <h4>{header}</h4>
        <p>{description}</p>
      </EmailForm>
      <div className="contact-cards">
        {cards &&
          cards.map((card, index) => (
            <Card key={`contact-card-${index}`} {...card} />
          ))}
      </div>
    </div>
  )
}

Contact.propTypes = {
  title: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.string,
  cards: PropTypes.array,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
}

export default Contact
