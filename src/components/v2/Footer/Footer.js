import React from "react"
import { graphql, StaticQuery } from "gatsby"
import FooterTemplate from "./FooterTemplate"

export const query = graphql`
  query Footer2 {
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
            nav_categories {
              title
              items {
                label
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
          navCategories={frontmatter.nav_categories}
          copyright={frontmatter.copyright_text}
          legalLinks={frontmatter.legal_links}
        />
      )
    }}
  />
)

export default Footer
