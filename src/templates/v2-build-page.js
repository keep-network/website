import React from "react"
import Carousel from "../components/v2/Carousel"
import Header from "../components/v2/Header"
import Footer from "../components/v2/Footer"

const carousel1 = {
  title: "Build",
  subtitle:
    "Build with Keep and join our passionate community. Browse our library of resources and community built tools below.",
  text: "",
}

function BuildPageTemplate() {
  return (
    <>
      <Header />
      <Carousel
        classNames="carousel-bg-build-1"
        title={carousel1.title}
        subtitle={carousel1.subtitle}
        text={carousel1.text}
      />
      <Footer />
    </>
  )
}

export default BuildPageTemplate
