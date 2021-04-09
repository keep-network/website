import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, Image, Link, PageSection } from "../components"
import { sections } from "../constants"

export const StakePageTemplate = ({
  hero = {},
  images = {},
  why = {},
  recommended = {},
  banner = {},
  tech_guide: techGuide = {},
  exchanges = {},
}) => {
  console.log("tech:", images)
  return (
    <div className="main-content">
      <PageSection id={sections.stake.HOME}>
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
            <li>
              <Image imageData={images.overview} />
            </li>
          </ul>
        </Row>
      </PageSection>
      <PageSection id={sections.stake.why}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: why.title }} />
          </Col>
        </Row>
        <Row className="why-card-section">
          {why.cards.map((card, i) => (
            <Col key={`card-${i}`}>
              <Image imageData={card.icon} />
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </Col>
          ))}
        </Row>
      </PageSection>
      <PageSection id={sections.stake.recommended}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: recommended.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: recommended.body }}
            />
          </Col>
        </Row>
        <Row className="recommended-card-section">
          {recommended.cards.map((card, i) => (
            <Col xs={12} md={4} key={`card-${i}`}>
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
      <PageSection id={sections.stake.BANNER_BUSINESS_TEAM}>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: banner.body }} />
            <div>
              <Link url={banner.button.url} className="button-primary">
                {banner.button.label}
              </Link>
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.stake.TECH_GUIDE}>
        <Row>
          <Col xs={12} md={6}>
            <Image imageData={images.techUserGuide} />
          </Col>
          <Col xs={12} md={6}>
            <div>{techGuide.intro}</div>
            <h3>{techGuide.title}</h3>
            <p>{techGuide.body}</p>
            <div>
              <Link url={techGuide.button.url} className="button">
                {techGuide.button.label}
              </Link>
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.stake.EXCHANGES}>
        <Row className="exchanges">
          <Col xs={12} sm={12}>
            <div className="text-center">
              <h2>{exchanges.title}:</h2>
              <div className="links">
                {exchanges.links.map((item, i) => (
                  <div key={`exchange-${i}`}>
                    <a href={item.url} target="new" className="btn">
                      <Image imageData={item.icon} />
                      <span>{item.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </PageSection>
    </div>
  )
}

StakePageTemplate.propTypes = {
  hero: PropTypes.object,
  images: PropTypes.object,
  why: PropTypes.object,
  recommended: PropTypes.object,
  banner: PropTypes.object,
  tech_guide: PropTypes.object,
  exchanges: PropTypes.object,
}

const mapStateToProps = (state) => ({})

export const ConnectedStakePage = connect(
  mapStateToProps,
  {}
)(StakePageTemplate)

const StakePage = ({ data }) => {
  const { markdownRemark: post } = data
  const images = {
    overview: data.textureOverview,
    techUserGuide: data.textureTechUserGuide,
  }
  return (
    <App className="app-home">
      <ConnectedStakePage {...post.frontmatter} images={images} />
    </App>
  )
}

StakePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    textureOverview: PropTypes.object,
    textureTechUserGuide: PropTypes.object,
  }),
}

export default StakePage

export const query = graphql`
  query StakePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
          cta_buttons {
            label
            url
          }
        }
        why {
          title
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
        recommended {
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
        banner {
          body
          button {
            label
            url
          }
        }
        tech_guide {
          intro
          title
          body
          button {
            label
            url
          }
        }
        exchanges {
          title
          links {
            name
            icon {
              image {
                relativePath
              }
              alt
            }
            url
          }
        }
      }
    }
    textureOverview: file(
      relativePath: { regex: "/features/stake-overview.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 604, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    textureTechUserGuide: file(
      relativePath: { regex: "/features/tech-user-guide.png/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 604, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
