import React, { useEffect } from "react"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql, withPrefix } from "gatsby"
import Aos from "aos"
import "aos/dist/aos.css"

import {
  App,
  Image,
  ImageLink,
  Link,
  PageSection,
  MiniLogoWall,
  KeepBlog,
  Button,
} from "../components"
import { sections } from "../constants"
import GovernanceForum from "../components/GovernanceForum"

export const HomePageTemplate = ({
  hero = {},
  carousel = [],
  minilogo_grid: minilogoGrid = [],
  governance_forum: governanceForum = {},
  blogs = {},
  exchanges = {},
  logo_wall: logoWall = {},
}) => {
  useEffect(() => {
    Aos.init({ once: true })
  }, [])

  return (
    <div className="main-content">
      <PageSection id={sections.home.HOME}>
        <div className="home-video-bg">
          <video autoPlay muted loop>
            <source src={hero.bg_video} type="video/mp4" />
          </video>
          <div className="home-video-bg-overlay" data-aos="fade-in" />
        </div>
        <Row>
          <Col>
            <h1>{hero.title}</h1>
            {hero.subtitle && <h2>{hero.subtitle}</h2>}
            <h4 className="body">{hero.body}</h4>
          </Col>
        </Row>
        <Row className="cta-section">
          <ul className="cta-links col-sm-12">
            {hero.cta_buttons.map((btn, i) => (
              <li key={`cta-btn-${i}`}>
                <Button
                  label={btn.label}
                  url={btn.url}
                  className={`btn ${i === 0 ? "btn-primary" : "btn-default"}`}
                />
              </li>
            ))}
          </ul>
        </Row>
      </PageSection>
      <PageSection
        id={sections.home.KEEP_SOLUTION}
        additionalClassNames="parallax-1"
      >
        <Row className="row--content">
          <Col
            xs={12}
            md={7}
            className={`${sections.home.KEEP_SOLUTION}-content`}
          >
            <div>
              <label
                data-aos="fade-down"
                data-duration-aos="1000"
                className="callout"
              >
                The Keep Solution
              </label>
              <h3 data-aos="fade-right" data-aos-duration="1000">
                {carousel[0].title}
              </h3>
              <h4 data-aos="fade-left" data-aos-duration="1000">
                {carousel[0].body}
              </h4>
            </div>
          </Col>
          <Col xs={12} md={4} className="offset-md-1">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="verticalRectangle"
            >
              <div
                data-aos="fade-down-right"
                data-aos-duration="1000"
                className="ellipseCircle"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-duration="1000"
              className="greenCircle"
            />
          </Col>
        </Row>
      </PageSection>
      <PageSection
        id={sections.home.KEEP_SOLUTION}
        additionalClassNames="parallax-2"
      >
        <div className="ellipsesImg">
          <div
            className="ellipsesImg--item"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="greenCircle"
            />
          </div>
        </div>
        <Row
          className="row--content"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Col xs={12} md={4} />
          <Col
            xs={12}
            md={7}
            className={`${sections.home.KEEP_SOLUTION}-content offset-md-1`}
          >
            <div>
              <label
                data-aos="fade-down"
                data-duration-aos="1000"
                className="callout"
              >
                The Keep Solution
              </label>
              <h3 data-aos="fade-right" data-aos-duration="1000">
                {carousel[1].title}
              </h3>
              <h4 data-aos="fade-left" data-aos-duration="1000">
                {carousel[1].body}
              </h4>
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection
        id={sections.home.KEEP_SOLUTION}
        additionalClassNames="parallax-3"
      >
        <div className="o-section">
          <div className="o-circle">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="greenCircle"
            />
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="o-circle__left"
            />
            <div className="o-circle__right" />
          </div>
        </div>
        <Row
          className="row--content"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <Col
            xs={12}
            md={4}
            className={`${sections.home.KEEP_SOLUTION}-shape`}
          />
          <Col
            xs={12}
            md={7}
            className={`${sections.home.KEEP_SOLUTION}-content offset-md-1`}
          >
            <div className="paraTextMargin">
              <label
                data-aos="fade-down"
                data-duration-aos="1000"
                className="callout"
              >
                The Keep Solution
              </label>
              <h3 data-aos="fade-right" data-aos-duration="1000">
                {carousel[2].title}
              </h3>
              <h4 data-aos="fade-left" data-aos-duration="1000">
                {carousel[2].body}
              </h4>
            </div>
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.home.MINILOGO_GRID}>
        <MiniLogoWall logos={minilogoGrid} />
      </PageSection>
      <PageSection id={sections.home.GOVERNANCE_FORUM}>
        <GovernanceForum {...governanceForum} />
      </PageSection>
      <PageSection id={sections.home.KEEP_BLOG}>
        <KeepBlog {...blogs} />
      </PageSection>
      <PageSection
        id={sections.home.EXCHANGES}
        style={{
          backgroundImage: `url(${withPrefix(
            "/images/features/exchangesbanner.png"
          )})`,
        }}
      >
        <Row>
          <Col xs={12} sm={12}>
            <div className="text-center">
              <h3>{exchanges.title}:</h3>
              <div className="links">
                {exchanges.links.map((item, i) => (
                  <div key={`exchange-${i}`}>
                    <Link url={item.url}>
                      <Image imageData={item.icon} />
                      <span>{item.name}</span>
                    </Link>
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
    </div>
  )
}

HomePageTemplate.propTypes = {
  hero: PropTypes.object,
  carousel: PropTypes.array,
  minilogo_grid: PropTypes.array,
  blogs: PropTypes.object,
  exchanges: PropTypes.object,
  logo_wall: PropTypes.object,
  governance_forum: PropTypes.object,
}

const HomePage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <App className="app-home">
      <HomePageTemplate {...post.frontmatter} />
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
          subtitle
          body
          bg_video
          cta_buttons {
            label
            url
          }
        }
        carousel {
          title
          body
        }
        minilogo_grid {
          icon {
            image {
              relativePath
            }
            alt
            url
          }
        }
        governance_forum {
          title
          body
          cards {
            title
            date
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
      }
    }
  }
`
