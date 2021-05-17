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
          <h4>{title}</h4>
        </div>
        <p className="description">{body}</p>
        <Button className="btn-primary" label={link.name} url={link.url} />
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
      <h1>{title}</h1>
      <EmailForm
        label="Email"
        placeholder="Enter email address"
        onSubmit={signupMailingList}
        requestStates={ajaxRequestStates}
        request={actionTypes.SIGNUP_MAILING_LIST}
      >
        <h4>{header}</h4>
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
