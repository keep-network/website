import React from "react"
import PropTypes from "prop-types"
import Button from "../Button"

function BlogCard(props) {
  const { src, title, subtitle, description, date } = props

  return (
    <div className="blog-card">
      <div className="blog-image">
        <img src={src} alt="" />
      </div>
      <div className="blog-content">
        <h4 className="blog-title">{title}</h4>
        <h5 className="blog-subtitle">{subtitle}</h5>
        <p className="blog-desscription">{description}</p>
        <p className="blog-date">{date}</p>
        <Button label="READ MORE" type="primary" />
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
}

export default BlogCard
