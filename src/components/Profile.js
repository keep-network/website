import React from "react"
import PropTypes from "prop-types"
import { Picture } from "react-responsive-picture"

import { GithubSocial, Keybase, LinkedIn, Twitter } from "./Icons"
import { getSrc } from "../utils"

export const Avatar = ({ imagePath, imageType, imageMaxRes }) => (
  <div className="avatar">
    <Picture src={getSrc(imagePath, imageType, imageMaxRes)} />
  </div>
)

Avatar.propTypes = {
  imagePath: PropTypes.string,
  imageType: PropTypes.string,
  imageMaxRes: PropTypes.number,
}

Avatar.defaultProps = {
  imagePath: "/img/headshots/placeholder",
  imageType: "jpg",
  imageMaxRes: 1,
}

export const Profile = ({
  name,
  imagePath,
  imageType,
  imageMaxRes,
  title,
  twitter,
  linkedin,
  github,
  keybase,
}) => (
  <div className="profile">
    <Avatar
      imagePath={imagePath}
      imageType={imageType}
      imageMaxRes={imageMaxRes}
    />
    <h4>
      <span>{name}</span>
      {title && title}
    </h4>
    <div className="social-links">
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <GithubSocial />
        </a>
      )}
      {keybase && (
        <a href={keybase} target="_blank" rel="noopener noreferrer">
          <Keybase />
        </a>
      )}
    </div>
  </div>
)

Profile.propTypes = {
  name: PropTypes.string,
  imagePath: PropTypes.string,
  imageType: PropTypes.string,
  imageMaxRes: PropTypes.number,
  title: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  keybase: PropTypes.string,
}

Profile.defaultProps = {
  name: "Unnamed Contributor",
  imagePath: "/img/headshots/placeholder",
  imageType: "jpg",
  imageMaxRes: 1,
}

export const ExampleProfile = (props) => <Profile {...props} />

ExampleProfile.defaultProps = {
  name: "Matt Luongo",
  title: "Project Lead",
  imagePath: "/img/headshots/matt",
  imageType: "jpg",
  imageMaxRes: 3,
  twitter: "https://twitter.com/mhluongo",
  linkedin: "https://www.linkedin.com/in/mattluongo",
  github: "https://github.com/mhluongo",
  keybase: "http://keybase.io/mhluongo",
}

export default Profile
