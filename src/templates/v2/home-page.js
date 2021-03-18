import React from "react"
import { graphql } from "gatsby"
import Header from "../../components/v2/Header"
import Overlay from "../../components/v2/Overlay"

function HomePageTemplate(props) {
  return (
    <>
      <Header />
      <Overlay />
    </>
  )
}

export const query = graphql`
  query HomePage($id: String1) {
    markdownRemark(id: { eq: $id }) {
      
    }
  }
`

export default HomePageTemplate
