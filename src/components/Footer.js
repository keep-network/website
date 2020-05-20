import React from "react"
import { Container, Button } from "reactstrap"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"

import CollapsibleList from "./CollapsibleList"
import Image from "./Image"
import Link from "./Link"

export const FooterTemplate = ({
  images = {},
  emailLink = {},
  dropdowns = [],
  copyright = "",
  legalLinks = [],
}) => (
  <footer>
    <Container fluid="md">
      <div className="footer-columns">
        <ul className="footer-column-1">
          <li className="keep-logo">Keep</li>
          <li>
            <Button className="email-btn" href={`mailto:${emailLink.email}`}>
              {emailLink.label}
            </Button>
          </li>
        </ul>
        {dropdowns.map((dropdown, i) => (
          <CollapsibleList
            key={`nav-dropdown-${i}`}
            label={dropdown.title}
            className={`footer-column-${i + 2}`}
          >
            <ul>
              {dropdown.dropdown_items.map((item, j) => (
                <li key={`nav-dropdown-item-${j}`}>
                  <Link url={item.url} isExternal={item.is_external_link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </CollapsibleList>
        ))}
      </div>
      <div className="footer-bottom">
        <div
          className="copyright"
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
        <ul>
          {legalLinks.map((link, i) => (
            <li key={`legal-link-${i}`}>
              <Link url={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Image className="half-circle" imageData={images.halfCircle} />
    </Container>
  </footer>
)

FooterTemplate.propTypes = {
  images: PropTypes.object,
  emailLink: PropTypes.object,
  dropdowns: PropTypes.array,
  copyright: PropTypes.string,
  legalLinks: PropTypes.array,
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
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "footer-nav" } } }
    ) {
      edges {
        node {
          frontmatter {
            email_link {
              label
              email
            }
            nav_dropdowns {
              title
              dropdown_items {
                label
                is_external_link
                url
              }
            }
            copyright_text
            legal_links {
              label
              url
            }
          }
        }
      }
    }
  }
`

const Footer = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const { halfCircle, allMarkdownRemark } = data
      const { frontmatter } = allMarkdownRemark.edges[0].node
      return (
        <FooterTemplate
          images={{ halfCircle }}
          emailLink={frontmatter.email_link}
          dropdowns={frontmatter.nav_dropdowns}
          copyright={frontmatter.copyright_text}
          legalLinks={frontmatter.legal_links}
        />
      )
    }}
  />
)

export default Footer
