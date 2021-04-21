import React from "react"
import PropTypes from "prop-types"
import { Row, Col } from "reactstrap"

import Button from "./Button"
import Image from "./Image"

const BlogCard = ({ title, source, excerpt, date, icon, url }) => {
  return (
    <div className="keep-blog-card">
      <div className="keep-blog-card-image">
        <Image imageData={icon} />
      </div>
      <div className="keep-blog-card-content">
        <div>
          <h4 className="keep-blog-card-title">{title}</h4>
          <label className="keep-blog-card-subtitle">{source}</label>
          <p className="keep-blog-card-description">{excerpt}</p>
          <p className="caption keep-blog-card-date">{date}</p>
        </div>
        <div>
          <Button label="Read More" url={url} className="btn-primary" />
        </div>
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
    <Row>
      <Col xs={12}>
        <h2>{title}</h2>
        {body && <h3>{body}</h3>}
        <div className="keep-blog-content">
          {cards &&
            cards.map((blog, i) => (
              <BlogCard key={`blog-card-${i}`} {...blog} />
            ))}
        </div>
        {isMore && (
          <div className="keep-blog-footer">
            <a href="#">Read more articles</a>
          </div>
        )}
      </Col>
    </Row>
  )
}

KeepBlog.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  cards: PropTypes.array,
  isMore: PropTypes.bool,
}

export default KeepBlog
