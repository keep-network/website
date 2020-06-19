import React from "react"
import PropTypes from "prop-types"
import Image from "./Image"
import { GithubSocial, Keybase, LinkedIn, Twitter } from "./Icons"

const getIcon = (url) => {
  if (url.includes("twitter")) {
    return <Twitter />
  } else if (url.includes("linkedin")) {
    return <LinkedIn />
  } else if (url.includes("github")) {
    return <GithubSocial />
  } else if (url.includes("keybase")) {
    return <Keybase />
  } else {
    return null
  }
}

const SocialLink = ({ url }) => {
  const icon = getIcon(url)

  if (!!icon) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    )
  }

  return null
}

SocialLink.propTypes = {
  url: PropTypes.string,
}

const Profile = ({ name, image, title, socials = [] }) => (
  <div className="profile">
    <Image imageData={{ image, alt: name }} />
    <h4>
      <span>{name}</span>
      {title && title}
    </h4>
    <div className="social-links">
      {socials.map((link, i) => (
        <SocialLink key={`social-link-${i}}`} url={link.url} />
      ))}
    </div>
  </div>
)

Profile.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.object,
  socials: PropTypes.array,
}

export default Profile
