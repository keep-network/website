import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql, withPrefix } from "gatsby"

import { App, Link, PageSection, FeatureCard } from "../components"
import { sections } from "../constants"

export const MintPageTemplate = ({ hero = {}, why = {} }) => {
  return (
    <div className="stake-content">
      <PageSection
        id={sections.stake.HOME}
        style={{
          backgroundImage: `url(${withPrefix(
            "/images/features/stake-overview.png"
          )})`,
        }}
      >
        <Row>
          <Col xs={12} md={7}>
            <h1
              className="h1-underline"
              dangerouslySetInnerHTML={{ __html: hero.title }}
            />
            <h3
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
            {hero.cta_buttons.map((btn, i) => (
              <Link
                key={`cta-btn-${i}`}
                url={btn.url}
                className="cta-link btn btn-primary"
              >
                {btn.label}
              </Link>
            ))}
          </Col>
          <Col></Col>
        </Row>
      </PageSection>
      <PageSection id={sections.stake.WHY}>
        <Row>
          <Col xs={12}>
            <h2 dangerouslySetInnerHTML={{ __html: why.title }} />
          </Col>
        </Row>
        <Row className="why-card-section">
          {why.cards.map((card, i) => (
            <Col key={`card-${i}`} xs={12} md={4}>
              <FeatureCard
                icon={`/images/${card.icon.image.relativePath}`}
                title={card.title}
                text={card.body}
              />
            </Col>
          ))}
        </Row>
      </PageSection>
    </div>
  )
}

MintPageTemplate.propTypes = {
  hero: PropTypes.object,
  why: PropTypes.object,
}

const mapStateToProps = (state) => ({})

export const ConnectedMintPage = connect(mapStateToProps, {})(MintPageTemplate)

const MintPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <App className="app-home">
      <ConnectedMintPage {...post.frontmatter} />
    </App>
  )
}

MintPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default MintPage

export const query = graphql`
  query MintPage($id: String!) {
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
      }
    }
  }
`