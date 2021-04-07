import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"

const BlogCard = ({ image, title, subtitle, description, date, label }) => {
  return (
    <div className="keep-blog-card">
      <div className="keep-blog-image">
        <img src={image} alt="" />
      </div>
      <div className="keep-blog-content">
        <h4 className="keep-blog-title">{title}</h4>
        <h5 className="keep-blog-subtitle">{subtitle}</h5>
        <p className="keep-blog-desscription">{description}</p>
        <p className="keep-blog-date">{date}</p>
        <Button label={label} className="button-primary" />
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  item: PropTypes.object,
  image: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  label: PropTypes.string,
}

const KeepBlog = ({ blogs }) => {
  return (
    <div>
      <h2>Latest from the Keep Blog</h2>
      {blogs &&
        blogs.map((blog, i) => <BlogCard key={`blog-card-${i}`} {...blog} />)}
      <div className="keep-blog-footer">
        <a href="#">Read more articles</a>
      </div>
    </div>
  )
}

KeepBlog.propTypes = {
  blogs: PropTypes.array,
}

export default KeepBlog
