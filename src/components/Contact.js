import React from "react"
import PropTypes from "prop-types"

import Button from "./Button"
import EmailForm from "./EmailForm"
import Image from "./Image"
import { actionTypes } from "../redux"

const Card = ({ icon, title, body, link }) => {
  return (
    <div className="contact-card">
      <div className="contact-icon-sm">
        <Image imageData={icon} />
      </div>
      <div className="contact-card-content">
        <div className="contact-card-title">
          <div className="contact-icon-xs">
            <Image imageData={icon} />
          </div>
          <h3>{title}</h3>
        </div>
        <p className="description">{body}</p>
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
    <>
      <h2>{title}</h2>
      <EmailForm
        label="Email"
        placeholder="captain@marvel.io"
        onSubmit={signupMailingList}
        requestStates={ajaxRequestStates}
        request={actionTypes.SIGNUP_MAILING_LIST}
      >
        <h3>{header}</h3>
        <p className="description">{description}</p>
      </EmailForm>
      <div className="contact-cards">
        {cards &&
          cards.map((card, index) => (
            <Card key={`contact-card-${index}`} {...card} />
          ))}
      </div>
    </>
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
