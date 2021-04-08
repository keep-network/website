import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap"

import Image from "./Image"

const FeatureCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(false)}
        onExited={() => setAnimating(false)}
        key={`carousel-${i}`}
        className={item.class}
      >
        <Image imageData={item.image} />
        <div className="carousel-content">
          <div className="callout">The Keep Solution</div>
          <CarouselCaption captionText={item.body} captionHeader={item.title} />
        </div>
      </CarouselItem>
    )
  })

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  )
}

FeatureCarousel.propTypes = {
  items: PropTypes.array,
}

FeatureCarousel.defaultProps = {
  items: [],
}

export default FeatureCarousel
