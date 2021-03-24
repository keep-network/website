import React from "react"
// import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Header from "../components/v2/Header"
import Footer from "../components/v2/Footer"
import Overlay from "../components/v2/Overlay"
import Ticker from "../components/v2/Ticker"

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

function HomePage(props) {
  return (
    <>
      <Header />
      <Overlay />
      <Ticker items={tickerItems} />
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
