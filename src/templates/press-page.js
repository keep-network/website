import React, { useEffect, useState } from "react"
import ClampLines from "react-clamp-lines"
import PropTypes from "prop-types"
import { withPrefix } from "gatsby"

import { App, Image, PageSection } from "../components"
import { ArrowRight, ArrowNorthEast } from "../components/Icons"

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
          <div className="date date-large">{date}</div>
        </div>
        <div className="source source-large">{source}</div>
        <div className="date date-mobile">{date}</div>
        <div className="bottom">
          <div className="above-the-fold">
            <ClampLines
              text={aboveTheFold}
              lines={windowWidth < 767 ? 4 : 2}
              ellipsis="..."
              buttons={false}
            />
          </div>
          <div className="view-arrow">
            View <ArrowNorthEast />
          </div>
        </div>
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
  title,
  subtitle,
  media_kit_section: mediaKitSection,
  press_items_section: pressItemsSection,
}) => {
  const { press_items: allPressEntries } = pressItemsSection
  const [pressEntries, setPressEntries] = useState(
    (allPressEntries || []).slice(0, 10)
  )

  const handleShowAll = () => {
    setPressEntries(allPressEntries)
  }

  return (
    <div className="press-page">
      <PageSection id="title-container">
        <div className="title">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
      </PageSection>
      <PageSection id="media-kit-container">
        <div className="media-kit">
          <div className="media-kit-left">
            <h2>{mediaKitSection.title}</h2>
            <h3>{mediaKitSection.subtitle}</h3>
          </div>
          <div className="media-kit-right">
            <div className="media-kit-description">
              <Image imageData={mediaKitSection.media_kit.icon} />
              <div className="media-kit-text">
                <div className="label">{mediaKitSection.media_kit.label}</div>
                <ul className="contents">
                  {mediaKitSection.media_kit.contents.map((item, i) => (
                    <li key={`media-kit-content-item-${i}`}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <a
              className="btn btn-primary"
              href={withPrefix(
                `/images/${mediaKitSection.media_kit.download_button.file.relativePath}`
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              {mediaKitSection.media_kit.download_button.label}
            </a>
          </div>
        </div>
      </PageSection>
      <PageSection id="press-items-container">
        <div className="press-items">
          <h2>{pressItemsSection.title}</h2>
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
        <PageSection id="see-all">
          <button className="see-all-button" onClick={handleShowAll}>
            See all <ArrowRight color="#000" height={22} width={59} />
          </button>
        </PageSection>
      ) : (
        ""
      )}
    </div>
  )
}

PressPageTemplate.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  media_kit_section: PropTypes.object,
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
        subtitle
        media_kit_section {
          title
          subtitle
          media_kit {
            icon {
              image {
                relativePath
              }
              alt
            }
            label
            contents
            download_button {
              label
              file {
                relativePath
              }
            }
          }
        }
        press_items_section {
          title
          press_items {
            title
            date(formatString: "MMMM D, YYYY")
            source
            excerpt
            url
          }
        }
      }
    }
  }
`
