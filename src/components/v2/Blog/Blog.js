import React from "react"
import PropTypes from "prop-types"
import { Container } from "reactstrap"
import BlogCard from "./BlogCard"

function Blog(props) {
  const { title, items } = props

  return (
    <div className="blog">
      <Container>
        <h2>{title}</h2>
        {items &&
          items.map((item, index) => (
            <BlogCard key={`blog-card-${index}`} item={item} />
          ))}
        <div className="blog-footer">
          <a href="#">Read more articles</a>
        </div>
      </Container>
    </div>
  )
}

Blog.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
}

export default Blog
