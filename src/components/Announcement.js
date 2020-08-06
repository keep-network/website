import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Alert } from "reactstrap"
import PropTypes from "prop-types"

import { Close } from "./Icons"

const AnnouncementTemplate = ({ body, onClick }) => (
  <Alert color="info" className="announcement">
    <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
    <button className="close-btn" onClick={onClick}>
      <Close size={16} />
    </button>
  </Alert>
)

AnnouncementTemplate.propTypes = {
  body: PropTypes.string,
  onClick: PropTypes.func,
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

const Announcement = ({ onClick }) => (
  <StaticQuery
    query={query}
    render={(data) => {
      const body = data.allMarkdownRemark.edges[0].node.html
      if (!body) {
        return null
      }
      return <AnnouncementTemplate body={body} onClick={onClick} />
    }}
  />
)

Announcement.propTypes = {
  onClick: PropTypes.func,
}

export default Announcement
