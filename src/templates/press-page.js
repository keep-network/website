import React, { useEffect, useMemo, useState } from "react"
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
    <div className="press-item">
      <div className="press-item-content">
        <div className="top">
          <h4 className="article-title">{title}</h4>
          <label className="source source-large">{source}</label>
          <div className="above-the-fold">
            <ClampLines
              text={aboveTheFold}
              lines={windowWidth < 767 ? 4 : 2}
              ellipsis="..."
              buttons={false}
            />
          </div>
          <div className="date">{date}</div>
        </div>
        <div className="view-post">
          <Link
            url={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-default"
          >
            Read Post
          </Link>
        </div>
      </div>
    </div>
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
  const [year, setYear] = useState(null)
  const [entrySize, setEntrySize] = useState(0)
  const [isShowAll, setShowAll] = useState(false)

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
  }, [pressItems])

  const pressEntries = useMemo(() => {
    const entires = year
      ? allPressEntries.filter((entry) => entry.date.includes(year))
      : [...allPressEntries]
    setEntrySize(entires.length)
    if (isShowAll) {
      return entires
    } else {
      return entires.slice(0, 10)
    }
  }, [allPressEntries, year, isShowAll])

  return (
    <div className="press-content">
      <PageSection id={sections.press.HOME} additionalClassNames="pb-5">
        <div>
          <h1 className="h1-underline">{hero.title}</h1>
          <h3
            className="body"
            dangerouslySetInnerHTML={{ __html: hero.body }}
          />
        </div>
        {hero.cta_buttons.map((btn, i) => (
          <Link
            key={`cta-btn-${i}`}
            url={btn.url}
            className="cta-link btn btn-primary"
          >
            {btn.label}
          </Link>
        ))}
      </PageSection>
      <PageSection id={sections.press.MINILOGO_GRID}>
        <MiniLogoWall logos={minilogoGrid} />
      </PageSection>
      <PageSection id={sections.press.NEWS}>
        <KeepBlog {...news} />
      </PageSection>
      <PageSection id={sections.press.LATEST_POST}>
        <Row className="title-section">
          <Col xs={12} md={8}>
            <h3>{pressItemsSection.title}</h3>
          </Col>
          <Col className="year-filter" xs={12} md={4}>
            <button
              onClick={() => setYear(2019)}
              className={
                year === 2019
                  ? "year-filter-item is-active"
                  : "year-filter-item"
              }
            >
              2019
            </button>
            <button
              onClick={() => setYear(2020)}
              className={
                year === 2020
                  ? "year-filter-item is-active"
                  : "year-filter-item"
              }
            >
              2020
            </button>
            <button
              onClick={() => setYear(2021)}
              className={
                year === 2021
                  ? "year-filter-item is-active"
                  : "year-filter-item"
              }
            >
              2021
            </button>
            <button
              onClick={() => setYear(null)}
              className={
                year === null
                  ? "year-filter-item is-active"
                  : "year-filter-item"
              }
            >
              ALL
            </button>
          </Col>
        </Row>
        <Row className="press-items">
          <Col>
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
          </Col>
        </Row>
        {entrySize === 0 ? (
          "No posts available"
        ) : entrySize > 10 ? (
          <div className="pagination">
            <SeeAllButton
              collapsed={!isShowAll}
              onClick={() => setShowAll(!isShowAll)}
            />
          </div>
        ) : (
          <></>
        )}
      </PageSection>
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
            url
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
