import React from "react"
// import { graphql } from "gatsby"
import Header from "../components/v2/Header"
// import Overlay from "../components/v2/Overlay"

export function HomePageTemplate(props) {
  return (
    <>
      {/* <Header /> */}
      {/* <Overlay /> */}
    </>
  )
}

// export const query = graphql`
//   query HomePage($id: String1) {
//     markdownRemark(id: { eq: $id }) {
//     }
//   }
// `
function HomePage(props) {
  return (
    <>
      <Header />
      {/* <Overlay /> */}
    </>
  )
}

export default HomePage
