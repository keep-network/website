import React from "react"
import PropTypes from "prop-types"
import Button from "./Button"
import Image from "./Image"

const BlogCard = ({ title, source, excerpt, date, icon, url }) => {
  return (
    <div className="keep-blog-card">
      <div className="keep-blog-image">
        <Image imageData={icon} />
      </div>
      <div className="keep-blog-content">
        <h4 className="keep-blog-title">{title}</h4>
        <h5 className="keep-blog-subtitle">{source}</h5>
        <p className="keep-blog-desscription">{excerpt}</p>
        <p className="keep-blog-date">{date}</p>
        <Button label="Read More" url={url} className="button-primary" />
      </div>
    </div>
  )
}

BlogCard.propTypes = {
  title: PropTypes.string,
  source: PropTypes.string,
  excerpt: PropTypes.string,
  date: PropTypes.string,
  icon: PropTypes.object,
  url: PropTypes.string,
}

const KeepBlog = ({ title, body, cards, isMore = false }) => {
  return (
    <div>
      <h2>{title}</h2>
      {body && <p>{body}</p>}
      {cards &&
        cards.map((blog, i) => <BlogCard key={`blog-card-${i}`} {...blog} />)}
      {isMore && (
        <div className="keep-blog-footer">
          <a href="#">Read more articles</a>
        </div>
      )}
    </div>
  )
}

KeepBlog.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  cards: PropTypes.array,
  isMore: PropTypes.bool,
}

export default KeepBlog
