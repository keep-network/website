import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Alert } from "reactstrap"
import PropTypes from "prop-types"

const AnnouncementTemplate = ({ body }) => (
  <Alert color="info" className="announcement">
    <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
  </Alert>
)

AnnouncementTemplate.propTypes = {
  body: PropTypes.string,
}

// Query for announcement
export const query = graphql`
  query Announcement {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "announcement" } } }
    ) {
      edges {
        node {
          html
        }
      }
    }
  }
`

const Announcement = () => (
  <StaticQuery
    query={query}
    render={(data) => {
      const body = data.allMarkdownRemark.edges[0].node.html
      if (!body) {
        return null
      }
      return <AnnouncementTemplate body={body} />
    }}
  />
)

export default Announcement
