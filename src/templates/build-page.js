import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import {
  App,
  Link,
  PageSection,
  Image,
  Contact,
  FeatureCard,
} from "../components"
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
    <div className="build-content">
      <PageSection id={sections.build.HOME} additionalClassNames="pb-5">
        <h1
          className="h1-underline"
          dangerouslySetInnerHTML={{ __html: hero.title }}
        />
        <Row>
          <Col xs={12} md={7}>
            <h3 dangerouslySetInnerHTML={{ __html: hero.body }} />
            <ul className="cta-links">
              {hero.cta_buttons.map((btn, i) => (
                <li key={`cta-btn-${i}`}>
                  <Link url={btn.url} className="btn btn-primary cta-link">
                    {btn.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={12} md={5} className="banner-image">
            <Image imageData={{ image: hero.image, alt: "build" }} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.build.LIBRARY}>
        <Row>
          <Col xs={12} className="grid-header">
            <h2 dangerouslySetInnerHTML={{ __html: library.title }} />
            <h3 dangerouslySetInnerHTML={{ __html: library.body }} />
          </Col>
        </Row>
        <Row>
          {library.cards.map((card, i) => (
            <Col key={`card-${i}`} xs={12} md={6} lg={4}>
              <FeatureCard
                icon={`/images/${card.icon.image.relativePath}`}
                title={card.title}
                text={card.body}
                button={card.button}
                btnClass="btn-default"
              />
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.build.COMMUNITY}>
        <Row>
          <Col xs={12} md={6}>
            <Col xs={12}>
              <h2 dangerouslySetInnerHTML={{ __html: community.title }} />
              <h3 dangerouslySetInnerHTML={{ __html: community.body }} />
            </Col>
            {community.cards
              .filter((_, index) => index % 2 !== 0)
              .map((card, i) => (
                <Col key={`community-card-odd-${i}`} xs={12}>
                  <FeatureCard
                    image={`/images/${card.icon.image.relativePath}`}
                    title={card.title}
                    button={card.button}
                    bodyClass="text-left"
                    btnClass="btn-primary"
                  />
                </Col>
              ))}
          </Col>
          <Col xs={12} md={6}>
            {community.cards
              .filter((_, index) => index % 2 === 0)
              .map((card, i) => (
                <Col key={`community-card-even-${i}`} xs={12}>
                  <FeatureCard
                    image={`/images/${card.icon.image.relativePath}`}
                    title={card.title}
                    button={card.button}
                    bodyClass="text-left"
                    btnClass="btn-primary"
                  />
                </Col>
              ))}
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.build.SECURE}>
        <Row>
          <Col xs={12}>
            <h2 dangerouslySetInnerHTML={{ __html: secure.title }} />
            <h3 dangerouslySetInnerHTML={{ __html: secure.body }} />
          </Col>
        </Row>
        <Row>
          {secure.cards.map((card, i) => (
            <Col key={`card-${i}`} xs={12} md={6} lg={4}>
              <FeatureCard
                icon={`/images/${card.icon.image.relativePath}`}
                title={card.title}
                text={card.body}
                button={card.button}
                btnClass="btn-default"
              />
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
