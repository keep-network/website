import React from "react"
import { graphql, StaticQuery } from "gatsby"
import HeaderTemplate from "./HeaderTemplate"

export const query = graphql`
  query Header2 {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "header-nav" } } }
    ) {
      edges {
        node {
          frontmatter {
            nav_items {
              label
              url
            }
          }
        }
      }
    }
  }
`

function Header() {
  const renderNavItems = (data) => {
    const navItems = data.allMarkdownRemark.edges[0].node.frontmatter.nav_items
    return <HeaderTemplate navItems={navItems} />
  }

  return <StaticQuery query={query} render={renderNavItems} />
}

export default Header
