import React from "react"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, Image, PageSection, Button, FeatureCard } from "../components"
import { sections } from "../constants"

export const InfoPageTemplate = ({
  hero = {},
  feature = {},
  solution = {},
  tbtc_showcase: tbtcShowcase = {},
  secure = {},
}) => {
  return (
    <div className="info-content">
      <PageSection id={sections.info.HOME} additionalClassNames="pb-5">
        <h1 className="h1-underline">{hero.title}</h1>
        <Row>
          <Col xs={12} md={7} className="body">
            <h3 dangerouslySetInnerHTML={{ __html: hero.body }} />
          </Col>
          <Col xs={12} md={5} className="lock">
            <Image imageData={{ image: hero.image, alt: hero.title }} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.info.FEATURE}>
        <Row className="mr-0">
          <Col xs={12} md={5} className="gridImgColumn"></Col>
          <Col
            xs={12}
            md={7}
            className="privacyColumn order-first order-md-last"
          >
            <h2>{feature.title}</h2>
            <h4
              className="body"
              dangerouslySetInnerHTML={{ __html: feature.body }}
            />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.info.FEATURE_CARD}>
        <Row>
          <Col xs={12}>
            <h2 dangerouslySetInnerHTML={{ __html: solution.title }} />
            <h3
              className="body"
              dangerouslySetInnerHTML={{ __html: solution.body }}
            />
          </Col>
        </Row>
        <Row className="info-feature-card-section">
          {solution.cards.map((card, i) => (
            <Col key={`card-${i}`} xs={12} md={4}>
              <FeatureCard
                title={card.title}
                icon={`/images/${card.icon.image.relativePath}`}
                text={card.body}
              />
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.info.TBTC_SHOWCASE}>
        <h2>{tbtcShowcase.title}</h2>
        <Row>
          <Col xs={12} md={6}>
            <h3
              className="body"
              dangerouslySetInnerHTML={{ __html: tbtcShowcase.body }}
            />
            <Button {...tbtcShowcase.button} className="btn-primary" />
            <div className="tbtc-features">
              {tbtcShowcase.features.map((item, i) => (
                <div key={`feature-${i}`}>
                  <Image imageData={item.icon} />
                  <div className="tbtc-features-title">
                    <span>{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col xs={12} md={6}>
            <FeatureCard
              image={`/images/${tbtcShowcase.article.image.relativePath}`}
              title={tbtcShowcase.article.body}
              bodyClass="text-left"
            />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.info.SECURE}>
        <Row>
          <Col xs={12}>
            <h2 dangerouslySetInnerHTML={{ __html: secure.title }} />
            <h3
              className="body"
              dangerouslySetInnerHTML={{ __html: secure.body }}
            />
          </Col>
        </Row>
        <Row className="info-secure-card-section">
          {secure.cards.map((card, i) => (
            <Col key={`card-${i}`} xs={12} md={4}>
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
    </div>
  )
}

InfoPageTemplate.propTypes = {
  hero: PropTypes.object,
  feature: PropTypes.object,
  solution: PropTypes.object,
  tbtc_showcase: PropTypes.object,
  secure: PropTypes.object,
}

const InfoPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <App className="app-home">
      <InfoPageTemplate {...post.frontmatter} />
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
              relativePath
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
      }
    }
  }
`
