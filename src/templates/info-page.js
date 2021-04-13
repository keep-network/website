import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, Image, Link, PageSection, Contact } from "../components"
import { sections } from "../constants"
import { actions } from "../redux"

export const InfoPageTemplate = ({
  hero = {},
  feature = {},
  solution = {},
  tbtc_showcase: tbtcShowcase = {},
  secure = {},
  contact = {},

  images = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
}) => {
  return (
    <div className="main-content">
      <PageSection id={sections.info.HOME}>
        <Row>
          <Col xs={12} md={6}>
            <h1 dangerouslySetInnerHTML={{ __html: hero.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </Col>
          <Col xs={12} md={6}>
            <Image imageData={{ image: hero.image, alt: hero.title }} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.info.FEATURE}>
        <Row className="featured-application">
          <Col xs={12} sm={6}>
            <Image imageData={images.textureFeature} />
          </Col>
          <Col xs={12} sm={6}>
            <h2>{feature.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: feature.body }} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.info.FEATURE_CARD}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: solution.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: solution.body }}
            />
          </Col>
        </Row>
        <Row className="info-feature-card-section">
          {solution.cards.map((card, i) => (
            <Col key={`card-${i}`}>
              <Image imageData={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.info.SECURE}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: secure.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: secure.body }}
            />
          </Col>
        </Row>
        <Row className="info-secure-card-section">
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
      <PageSection id={sections.info.TBTC_SHOWCASE}>
        <h1>{tbtcShowcase.title}</h1>
        <Row>
          <Col xs={12} md={6}>
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: tbtcShowcase.body }}
            />
            <Link url={tbtcShowcase.button.url} className="button-primary">
              {tbtcShowcase.button.label}
            </Link>
            <div>
              {tbtcShowcase.features.map((item, i) => (
                <div key={`feature-${i}`}>
                  <Image imageData={item.icon} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="article">
              <Image imageData={tbtcShowcase.article.image} />
              <p>{tbtcShowcase.article.body}</p>
            </div>
          </Col>
        </Row>
        <Row className="info-secure-card-section">
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
      <PageSection id={sections.info.CONTACT}>
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

InfoPageTemplate.propTypes = {
  hero: PropTypes.object,
  feature: PropTypes.object,
  solution: PropTypes.object,
  tbtc_showcase: PropTypes.object,
  secure: PropTypes.object,
  contact: PropTypes.object,
  images: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedInfoPage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(InfoPageTemplate)

const InfoPage = ({ data }) => {
  const { markdownRemark: post } = data
  const images = {
    textureFeature: data.textureFeature,
  }
  return (
    <App className="app-home">
      <ConnectedInfoPage {...post.frontmatter} images={images} />
    </App>
  )
}

InfoPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    textureFeature: PropTypes.object,
  }),
}

export default InfoPage

export const query = graphql`
  query InfoPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
          image {
            childImageSharp {
              fluid(maxWidth: 274, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        feature {
          title
          body
        }
        solution {
          title
          body
          cards {
            title
            body
            icon {
              image {
                relativePath
              }
              alt
            }
          }
        }
        tbtc_showcase {
          title
          body
          button {
            label
            url
          }
          features {
            name
            icon {
              image {
                relativePath
              }
              alt
            }
          }
          article {
            image {
              childImageSharp {
                fluid(maxWidth: 536, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            body
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
    textureFeature: file(
      relativePath: { regex: "/features/info-feature.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 380, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
