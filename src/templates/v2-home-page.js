import React from "react"
// import { graphql } from "gatsby"
import Header from "../components/v2/Header"
import Footer from "../components/v2/Footer"
import Overlay from "../components/v2/Overlay"
import Carousel from "../components/v2/Carousel"

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
      <Overlay />
      <Footer />
      <Carousel />
    </>
  )
}

export default HomePage
