import React, { useState } from "react"
import { connect } from "react-redux"
import { Col, Row, Collapse } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, PageSection, Image, Contact } from "../components"
import { sections } from "../constants"
import { actions } from "../redux"

export const FaqPageTemplate = ({
  hero = {},
  questions = [],
  contact = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
  plusIcon = {},
}) => {
  const [expandedId, setExpandedId] = useState(-1)

  return (
    <div className="faq-content">
      <PageSection id={sections.faq.HOME}>
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
                <div
                  className="faq-question"
                  onClick={() => {
                    if (expandedId !== -1) setExpandedId(-1)
                    else setExpandedId(index)
                  }}
                >
                  <p>{item.question}</p>
                  <Image imageData={plusIcon} />
                </div>
                <Collapse isOpen={expandedId === index} className="faq-answer">
                  {item.answer}
                </Collapse>
              </div>
            ))}
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.home.CONTACT}>
        <Row>
          <Col xs={12} sm={12}>
            <Contact
              {...contact}
              signupMailingList={signupMailingList}
              requestStates={ajaxRequestStates}
            />
          </Col>
        </Row>
      </PageSection>
    </div>
  )
}

FaqPageTemplate.propTypes = {
  hero: PropTypes.object,
  questions: PropTypes.array,
  contact: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
  plusIcon: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedFaqPage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(FaqPageTemplate)

const FaqPage = ({ data }) => {
  const { markdownRemark: post, plusIcon } = data
  console.log("icon:", plusIcon)
  return (
    <App className="app-home">
      <ConnectedFaqPage {...post.frontmatter} plusIcon={{ image: plusIcon }} />
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
        contact {
          title
          header
          description
          cards {
            title
            body
            icon {
              image {
                relativePath
              }
              alt
            }
            link {
              name
              url
            }
          }
        }
      }
    }
    plusIcon: file(relativePath: { regex: "/ic-plus.png/" }) {
      relativePath
    }
  }
`
