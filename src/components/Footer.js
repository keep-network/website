import React from "react"
import { Container, Button } from "reactstrap"
import { graphql, StaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"

import { KeepCircle } from "./Icons"
import Image from "./Image"
import { WHITEPAPER_URL, routes } from "../constants"

export const FooterTemplate = ({ images = {} }) => (
  <footer>
    <Container fluid="md">
      <div className="footer-columns">
        <ul className="footer-column-1">
          <li>
            <KeepCircle />
          </li>
          <li>
            <Button className="email-btn" href="mailto:work@keep.network">
              Email Us
            </Button>
          </li>
        </ul>
        <ul className="footer-column-2">
          <li>Company</li>
          <li>
            <a href={WHITEPAPER_URL} rel="noopener noreferrer" target="_blank">
              Whitepaper
            </a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#advisors">Advisors</a>
          </li>
          <li>
            <a
              href="https://blog.keep.network"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
          </li>
        </ul>
        <ul className="footer-column-3">
          <li>Follow</li>
          <li>
            <a href={routes.PRESS}>Press</a>
          </li>
          <li>
            <a
              href="https://twitter.com/keep_project"
              rel="noopener noreferrer"
              target="_blank"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://t.me/KeepNetworkOfficial/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Telegram
            </a>
          </li>
          <li>
            <a
              href="https://www.reddit.com/r/KeepNetwork/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Reddit
            </a>
          </li>
        </ul>
        <ul className="footer-column4">
          <li>Community</li>
          <li>
            <a
              href="https://discordapp.com/invite/wYezN7v"
              rel="noopener noreferrer"
              target="_blank"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href="https://github.com/keep-network/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>
          A Thesis<sup>*</sup> Build
        </p>
        <p>&#169; 2020 Keep SEZC. All Rights Reserved.</p>
        <ul>
          <li>
            <Link to={routes.PRIVACY}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={routes.TERMS}>Terms of Use</Link>
          </li>
          <li>
            <Link to={routes.PLAYING_FOR_KEEPS_TERMS}>
              Playing for Keeps Terms
            </Link>
          </li>
        </ul>
      </div>
      <Image className="half-circle" imageData={images.halfCircle} />
    </Container>
  </footer>
)

FooterTemplate.propTypes = {
  images: PropTypes.object,
}

export const query = graphql`
  query Footer {
    halfCircle: file(relativePath: { regex: "/texture-circle-3.png/" }) {
      childImageSharp {
        fluid(maxWidth: 205, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Footer = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const { halfCircle } = data
      return <FooterTemplate images={{ halfCircle }} />
    }}
  />
)

export default Footer
