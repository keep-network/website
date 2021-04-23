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

export const HomePageTemplate = ({
  hero = {},
  carousel = [],
  summary_grid: summaryGrid = {},
  minilogo_grid: minilogoGrid = [],
  blogs = {},
  exchanges = {},
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
            <source src={hero.bg_video} type="video/mp4" />
          </video>
          <div className="home-video-bg-overlay" />
        </div>
        <Row>
          <Col xs={12} lg={10} md={10}>
            <h1>{hero.title}</h1>
            <h4 className="body">{hero.body}</h4>
          </Col>
        </Row>
        <Row className="cta-section">
          <ul className="cta-links col-sm-12">
            {hero.cta_buttons.map((btn, i) => (
              <li key={`cta-btn-${i}`}>
                <Link url={btn.url} className="cta-link btn btn-default">
                  {btn.label}
                </Link>
              </li>
            ))}
          </ul>
        </Row>
        <Ticker items={hero.tickers} />
      </PageSection>
      <Row className="parallax-img-1">
        <div className="verticalRectangle" />
        <div className="greyCircleGrid" />
        <div className="greenCircle" />
        <div className="ellipseCircle" />
        <Col md={6}>
          <div>
            <div className="callout">The Keep Solution</div>
            <h3>{carousel[0].title}</h3>
            <h4>{carousel[0].body}</h4>
          </div>
        </Col>
      </Row>
      <Row className="parallax-img-2">
        <Col md={5}>
            <div className="ellipsesImg" />
        </Col>
        <Col md={5}>
          <div className="parallax-div-2">
            <div className="callout">The Keep Solution</div>
            <h3>{carousel[1].title}</h3>
            <h4>{carousel[1].body}</h4>
          </div>
        </Col>
      </Row>
      <Row className="parallax-img-3">
        <Col md={5} className="m-0 p-0">
          <div className="parallax-div-3-left">

          </div>
        </Col>
        <Col md={5} className="m-0 p-0">
          <div className="parallax-div-3 ml-5">
            <div className="callout">The Keep Solution</div>
            <h3>{carousel[2].title}</h3>
            <h4>{carousel[2].body}</h4>
          </div>
        </Col>
      </Row>
      <PageSection id={sections.home.SUMMARY_GRID}>
        <SummaryGrid {...summaryGrid} />
      </PageSection>
      <PageSection id={sections.home.MINILOGO_GRID}>
        <MiniLogoWall logos={minilogoGrid} />
      </PageSection>
      <PageSection id={sections.home.KEEP_BLOG}>
        <KeepBlog {...blogs} isMore={true} />
      </PageSection>
      <PageSection id={sections.home.EXCHANGES}>
        <Row>
          <Col xs={12} sm={12}>
            <div className="text-center">
              <h3>{exchanges.title}:</h3>
              <div className="links">
                {exchanges.links.map((item, i) => (
                  <div key={`exchange-${i}`}>
                    <a href={item.url} target="new">
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
        <section className="d-md-flex">
          <div className="w-md-50">
            <h1>{logoWall.title}</h1>
          </div>
          <div className="w-md-50 image">
            {logoWall.supporters.map((supporter, i) => (
              <ImageLink
                key={`supporter-${i}`}
                url={supporter.url}
                label={supporter.name}
                image={supporter.logo}
              />
            ))}
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
  blogs: PropTypes.object,
  exchanges: PropTypes.object,
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
  return (
    <App className="app-home">
      <ConnectedHomePage {...post.frontmatter} />
    </App>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
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
          bg_video
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
        blogs {
          title
          cards {
            icon {
              image {
                relativePath
              }
              alt
            }
            title
            source
            excerpt
            date
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
  }
`
