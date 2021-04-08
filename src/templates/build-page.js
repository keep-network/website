import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, Link, PageSection, Image, Contact } from "../components"
import { sections } from "../constants"
import { actions } from "../redux"

export const BuildPageTemplate = ({
  hero = {},
  library = {},
  community = {},
  secure = {},
  contact = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
}) => {
  return (
    <div className="main-content">
      <PageSection id={sections.build.HOME}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: hero.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </Col>
        </Row>
        <Row className="cta-section">
          <ul className="cta-links col-12 col-sm-12 col-md-6 col-lg-4">
            {hero.cta_buttons.map((btn, i) => (
              <li key={`cta-btn-${i}`}>
                <Link url={btn.url} className="cta-link">
                  {btn.label}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
      </PageSection>
      <PageSection id={sections.build.LIBRARY}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: library.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: library.body }}
            />
          </Col>
        </Row>
        <Row className="build-library-card-section">
          {library.cards.map((card, i) => (
            <Col key={`card-${i}`}>
              <Image imageData={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link url={card.button.url} className="button">
                {card.button.label}
              </Link>
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.build.COMMUNITY}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: community.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: community.body }}
            />
          </Col>
        </Row>
        <Row className="build-community-card-section">
          {community.cards.map((card, i) => (
            <Col key={`card-${i}`}>
              <Image imageData={card.icon} />
              <h3>{card.title}</h3>
              <Link url={card.button.url} className="button">
                {card.button.label}
              </Link>
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.build.SECURE}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: secure.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: secure.body }}
            />
          </Col>
        </Row>
        <Row className="build-secure-card-section">
          {secure.cards.map((card, i) => (
            <Col key={`card-${i}`}>
              <Image imageData={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              <Link url={card.button.url} className="button">
                {card.button.label}
              </Link>
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.build.CONTACT}>
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

BuildPageTemplate.propTypes = {
  hero: PropTypes.object,
  library: PropTypes.object,
  community: PropTypes.object,
  secure: PropTypes.object,
  contact: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedBuildPage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(BuildPageTemplate)

const BuildPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <App className="app-home">
      <ConnectedBuildPage {...post.frontmatter} />
    </App>
  )
}

BuildPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BuildPage

export const query = graphql`
  query BuildPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
          image {
            relativePath
          }
          cta_buttons {
            label
            url
          }
        }
        library {
          title
          body
          cards {
            title
            body
            button {
              label
              url
            }
            icon {
              image {
                relativePath
              }
              alt
            }
          }
        }
        community {
          title
          body
          cards {
            title
            icon {
              image {
                relativePath
              }
              alt
            }
            button {
              label
              url
            }
          }
        }
        secure {
          title
          body
          cards {
            title
            body
            button {
              label
              url
            }
            icon {
              image {
                relativePath
              }
              alt
            }
          }
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
  }
`
