import React from "react"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, PageSection, CollapsibleList } from "../components"
import { sections } from "../constants"

export const FaqPageTemplate = ({
  hero = {},
  questions = [],
  plusIcon = {},
}) => {
  return (
    <div className="faq-content">
      <PageSection id={sections.faq.HOME} additionalClassNames="pb-5">
        <Row>
          <Col xs={12}>
            <h1
              className="h1-underline"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.faq.QUESTIONS}>
        <Row className="questions-section">
          <Col xs={12} sm={12}>
            {questions.map((item, index) => (
              <div key={`question-${index}`} className="faq-section">
                <CollapsibleList label={item.question} plusIcon={plusIcon}>
                  <div className="faq-answer">
                    <p dangerouslySetInnerHTML={{ __html: item.answer }} />
                  </div>
                </CollapsibleList>
              </div>
            ))}
          </Col>
        </Row>
      </PageSection>
    </div>
  )
}

FaqPageTemplate.propTypes = {
  hero: PropTypes.object,
  questions: PropTypes.array,
  plusIcon: PropTypes.object,
}

const FaqPage = ({ data }) => {
  const { markdownRemark: post, plusIcon } = data
  return (
    <App className="app-home">
      <FaqPageTemplate {...post.frontmatter} plusIcon={{ image: plusIcon }} />
    </App>
  )
}

FaqPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    plusIcon: PropTypes.object,
  }),
}

export default FaqPage

export const query = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
        }
        questions {
          question
          answer
        }
      }
    }
    plusIcon: file(relativePath: { regex: "/ic-plus.png/" }) {
      relativePath
    }
  }
`
