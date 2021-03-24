import React from "react"
// import { graphql } from "gatsby"
import Header from "../components/v2/Header"
import Footer from "../components/v2/Footer"
import Overlay from "../components/v2/Overlay"
import Carousel from "../components/v2/Carousel"
import Grid from "../components/v2/Grid"

// export const query = graphql`
//   query HomePage($id: String1) {
//     markdownRemark(id: { eq: $id }) {
//     }
//   }
// `
function HomePage(props) {
  const cards = [
    {
      icon: "/images/GitHub_Logo.svg",
      description: "How the Kepp Network works",
      label: "ABOUT KEEP",
    },
  ]

  return (
    <>
      <Header />
      <Overlay />
      <Carousel />
      <Grid cards={cards} />
      <Footer />
    </>
  )
}

export default HomePage
