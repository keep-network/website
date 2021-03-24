import React from "react"
// import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/v2/Header"
import Footer from "../components/v2/Footer"
import Overlay from "../components/v2/Overlay"
import Ticker from "../components/v2/Ticker"
import Carousel from "../components/v2/Carousel"

// TODO: #339 - will uncomment in next PR
//
// import Carousel from "../components/v2/Carousel"
// import Grid from "../components/v2/Grid"
// import { Col, Row } from "reactstrap"
// import { PageSection } from "../components"

/*
export const query = graphql`
  query HomePage($id: String) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        hero {
          title
          body
          cta {
            label
            icon {
              image {
                relativePath
              }
              alt
            }
          }
          cta_buttons {
            label
            url
          }
        }
      }
    }
  }
`
*/

/*
function HomePage(props) {
  const { hero } = props

  const cards = [
    {
      icon: "/images/GitHub_Logo.svg",
      description: "How the Kepp Network works",
      label: "ABOUT KEEP",
    },
  ]

  return (
    <div className="main-content">
      <Header />
      <PageSection>
        <Row>
          <Col xs={12}>
            <h1 dangerouslySetInnerHTML={{ __html: hero.title }} />
            <div
              className="body"
              dangerouslySetInnerHTML={{ __html: hero.body }}
            />
          </Col>
        </Row>
      </PageSection>
      <Overlay />
      <Carousel />
      <Grid cards={cards} />
      <Footer />
    </div>
  )
}
*/

const tickerItems = [
  "60.2% APY · KEEP/TBTC POOL",
  "14% APY · KEEP POOL",
  "79.3% APY · TBTC/SADDLE POOL",
  "20.2% APY · KEEP/TBTC POOL",
]

const carousel1 = {
  title: "The Keep solution",
  subtitle: "Privacy-focused infrastructure for the public blockchain.",
  text:
    "The Keep network allows private data to be used on public protocols without sacrificing confidentiality.",
}

const carousel2 = {
  title: "The Keep solution",
  subtitle: "True decentralization.",
  text:
    "Keep is the only protocol that is truly decentralized. “Keeps” are off-chain containers that allow contracts to use private data without exposing the data to the public blockchain.",
}

function HomePage(props) {
  return (
    <>
      <Header />
      <Overlay />
      <Ticker items={tickerItems} />
      <Carousel
        classNames="carousel-bg-1"
        title={carousel1.title}
        subtitle={carousel1.subtitle}
        text={carousel1.text}
      />
      <Carousel
        classNames="carousel-bg-2"
        title={carousel2.title}
        subtitle={carousel2.subtitle}
        text={carousel2.text}
      />
      <Footer />
    </>
  )
}

HomePage.propTypes = {
  hero: PropTypes.object,
  images: PropTypes.object,
  signupMailingList: PropTypes.func,
  ajaxRequestStates: PropTypes.object,
  supporters_section: PropTypes.object,
  team_section: PropTypes.object,
  advisors_section: PropTypes.object,
}

export default HomePage
