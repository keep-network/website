import React, { useEffect, useState } from "react"
import ClampLines from "react-clamp-lines"
import { Col, Row } from "reactstrap"
import PropTypes from "prop-types"
import { graphql } from "gatsby"

import { App, MiniLogoWall, KeepBlog, Link } from "../components"
import PageSection, { SeeAllButton } from "../components/PageSection"
import { sections } from "../constants"

const PressItem = ({ title, date, source, aboveTheFold, url }) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="press-item">
        <div className="top">
          <div className="article-title">{title}</div>
        </div>
        <div className="source source-large">{source}</div>
        <div className="bottom">
          <div className="above-the-fold">
            <ClampLines
              text={aboveTheFold}
              lines={windowWidth < 767 ? 4 : 2}
              ellipsis="..."
              buttons={false}
            />
          </div>
          <div className="view-button d-flex justify-content-center align-items-center">
            Read Post
          </div>
        </div>
        <div className="date date-large">{date}</div>
        <div className="date date-mobile">{date}</div>
        <div className="view-button-mobile d-none">Read Post</div>
      </div>
    </a>
  )
}

PressItem.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  source: PropTypes.string,
  aboveTheFold: PropTypes.string,
  url: PropTypes.string,
}

export const PressPageTemplate = ({
  hero,
  minilogo_grid: minilogoGrid,
  news: news,
  press_items_section: pressItemsSection,
}) => {
  const { press_items: pressItems } = pressItemsSection
  const [allPressEntries, setAllPressEntries] = useState([])
  const [pressEntries, setPressEntries] = useState([])

  useEffect(() => {
    const dateOptions = { year: "numeric", month: "long", day: "numeric" }
    const sortedAndFormatted = pressItems
      .slice()
      // Sort by latest item date
      .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
      .map((item) => ({
        ...item,
        date: new Date(item.date).toLocaleDateString("en-US", dateOptions),
      }))
    setAllPressEntries(sortedAndFormatted)
    setPressEntries(sortedAndFormatted.slice(0, 10))
  }, [pressItems])

  const handleShowAll = () => {
    setPressEntries(allPressEntries)
  }

  return (
    <div className="press-content">
      <PageSection id={sections.press.HOME}>
        <div className="title">
          <h1 className="hero-title">{hero.title}</h1>
          <h2
            className="hero-body"
            dangerouslySetInnerHTML={{ __html: hero.body }}
          />
        </div>
        {hero.cta_buttons.map((btn, i) => (
          <Link key={`cta-btn-${i}`} url={btn.url} className="cta-link cta-btn">
            {btn.label}
          </Link>
        ))}
      </PageSection>
      <PageSection id={sections.press.MINILOGO_GRID}>
        <Row>
          <Col xs={12} sm={12}>
            <MiniLogoWall logos={minilogoGrid} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.press.NEWS}>
        <Row>
          <Col sm={12}>
            <KeepBlog {...news} />
          </Col>
        </Row>
      </PageSection>
      <PageSection id={sections.press.LATEST_POST}>
        <div className="press-items">
          <Row>
            <Col md={8}>
              <h2 className="press-items-title">{pressItemsSection.title}</h2>
            </Col>
            <Col className="d-flex justify-content-end mt-3" md={4}>
              <Link className="year-filter">2018</Link>
              <Link className="year-filter">2019</Link>
              <Link className="year-filter">2020</Link>
            </Col>
          </Row>
          {pressEntries.map((entry) => (
            <PressItem
              title={entry.title}
              date={entry.date}
              source={entry.source}
              aboveTheFold={entry.excerpt}
              url={entry.url}
              key={entry.url}
            />
          ))}
        </div>
      </PageSection>
      {allPressEntries.length > 10 && pressEntries.length === 10 ? (
        <PageSection id="pagination">
          <SeeAllButton onClick={handleShowAll} />
        </PageSection>
      ) : (
        ""
      )}
    </div>
  )
}

PressPageTemplate.propTypes = {
  hero: PropTypes.object,
  minilogo_grid: PropTypes.array,
  news: PropTypes.object,
  press_items_section: PropTypes.object,
}

const PressPage = ({ data }) => {
  const { markdownRemark: post } = data
  return (
    <App>
      <PressPageTemplate {...post.frontmatter} />
    </App>
  )
}

PressPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default PressPage

export const query = graphql`
  query PressPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        hero {
          title
          body
          cta_buttons {
            label
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
        news {
          title
          body
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
        press_items_section {
          title
          press_items {
            title
            date
            source
            excerpt
            url
          }
        }
      }
    }
  }
`
