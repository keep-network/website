import React from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap"
import { withPrefix } from "gatsby"

import Button from "./Button"

const FeatureCard = ({
  className,
  bodyClass,
  btnClass,
  image,
  icon,
  title,
  subtitle,
  text,
  button,
}) => {
  return (
    <Card className={className}>
      <CardImg
        top
        src={withPrefix(image || icon)}
        alt={title}
        className={icon ? "card-icon" : "card-image"}
      />
      <CardBody className={bodyClass}>
        <CardTitle tag="h5">{title}</CardTitle>
        {subtitle && <CardSubtitle tag="h5">{subtitle}</CardSubtitle>}
        {text && <CardText>{text}</CardText>}
        {button && (
          <Button {...button} className={btnClass} onClick={(e) => {}} />
        )}
      </CardBody>
    </Card>
  )
}

FeatureCard.propTypes = {
  className: PropTypes.string,
  bodyClass: PropTypes.string,
  btnClass: PropTypes.string,
  image: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.object,
}

export default FeatureCard
