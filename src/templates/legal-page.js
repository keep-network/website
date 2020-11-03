import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import { App } from "../components"

export const LegalPageTemplate = ({ className, title, date, intro, body }) => (
  <div className={`legal-page ${className}`}>
    <div className="container">
      <div className="heading">
        <h1>{title}</h1>
        <p className="date">{date}</p>
        {intro ? (
          <div className="intro" dangerouslySetInnerHTML={{ __html: intro }} />
        ) : (
          ""
        )}
      </div>
      <div className="body" dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  </div>
)

LegalPageTemplate.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
  intro: PropTypes.string,
  body: PropTypes.string,
}

const LegalPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <App title={post.frontmatter.title}>
      <LegalPageTemplate
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        intro={post.frontmatter.intro}
        body={post.html}
      />
    </App>
  )
}

LegalPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default LegalPage

export const pageQuery = graphql`
  query LegalPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        date
        intro
      }
    }
  }
`
