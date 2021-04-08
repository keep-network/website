import React from "react"
import { connect } from "react-redux"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import {
  App,
  Image,
  ImageLink,
  Link,
  PageSection,
  Ticker,
  FeatureCarousel,
  SummaryGrid,
  MiniLogoWall,
  KeepBlog,
  Contact,
} from "../components"
import { sections } from "../constants"
import { actions } from "../redux"

const blogItems = [
  {
    image: "/images/home/keep-blog.png",
    title: "Headline",
    subtitle: "news outlet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit cursus sed feugiat iaculis dictumst.",
    date: "September, 16 2020",
    label: "READ MORE",
  },
  {
    image: "/images/home/keep-blog.png",
    title: "Headline",
    subtitle: "news outlet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit cursus sed feugiat iaculis dictumst.",
    date: "September, 16 2020",
    label: "READ MORE",
  },
]

export const HomePageTemplate = ({
  hero = {},
  carousel = [],
  summary_grid: summaryGrid = {},
  minilogo_grid: minilogoGrid = [],
  exchanges = {},
  images = {},
  signupMailingList = () => {},
  ajaxRequestStates = {},
  logo_wall: logoWall = {},
  contact = {},
}) => {
  return (
    <div className="main-content">
      <PageSection id={sections.home.HOME}>
        <div className="home-video-bg">
          <video autoPlay muted loop>
            <source
              src="/images/home/keep-castle-clouds.mp4"
              type="video/mp4"
            />
          </video>
          <div className="home-video-bg-overlay" />
        </div>
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
          <ul className="cta-links col-sm-12">
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
      <Row>
        <Col>
          <Ticker items={hero.tickers} />
        </Col>
      </Row>
      <Row className="feature-carousel">
        <Col>
          <FeatureCarousel items={carousel} />
        </Col>
      </Row>
      <PageSection id={sections.home.SUMMARY_GRID}>
        <Row>
          <Col xs={12} sm={12}>
            <SummaryGrid {...summaryGrid} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.home.MINILOGO_GRID}>
        <Row>
          <Col xs={12} sm={12}>
            <MiniLogoWall logos={minilogoGrid} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.home.KEEP_BLOG}>
        <Row>
          <Col xs={12} sm={12}>
            <KeepBlog blogs={blogItems} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.home.EXCHANGES}>
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
      <PageSection id={sections.home.LOGO_WALL} convex>
        <section className="d-lg-flex">
          <div className="w-lg-50 image order-2">
            {logoWall.supporters.map((supporter, i) => (
              <ImageLink
                key={`supporter-${i}`}
                url={supporter.url}
                label={supporter.name}
                image={supporter.logo}
              />
            ))}
          </div>
          <div className="w-lg-50 order-1">
            <h2>{logoWall.title}</h2>
          </div>
        </section>
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

HomePageTemplate.propTypes = {
  hero: PropTypes.object,
  carousel: PropTypes.array,
  summary_grid: PropTypes.object,
  minilogo_grid: PropTypes.array,
  exchanges: PropTypes.object,
  images: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
  logo_wall: PropTypes.object,
  contact: PropTypes.object,
}

const mapStateToProps = (state) => ({
  ajaxRequestStates: state.ajaxRequestStates,
})

export const ConnectedHomePage = connect(mapStateToProps, {
  signupMailingList: actions.signupMailingList,
})(HomePageTemplate)

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  const images = {
    textureCircle2: data.textureCircle2,
  }
  return (
    <App className="app-home">
      <ConnectedHomePage {...post.frontmatter} images={images} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
    textureCircle1: PropTypes.object,
    textureCircle2: PropTypes.object,
  }),
}

export default HomePage

export const query = graphql`
  query HomePage($id: String!) {
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
          tickers {
            label
          }
        }
        carousel {
          title
          body
          image {
            childImageSharp {
              fluid(maxWidth: 274, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          class
        }
        summary_grid {
          title
          body
          cards {
            name
            title
            icon {
              image {
                relativePath
              }
              alt
            }
            url
          }
        }
        minilogo_grid {
          icon {
            image {
              relativePath
            }
            alt
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
        logo_wall {
          title
          supporters {
            name
            url
            logo {
              image {
                childImageSharp {
                  fluid(maxWidth: 300, quality: 100) {
                    ...GatsbyImageSharpFluid
                  }
                }
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
    textureCircle2: file(relativePath: { regex: "/texture-circle-2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 604, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
