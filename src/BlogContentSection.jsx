import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import request from 'superagent'
import moment from 'moment'
import smartcrop from 'smartcrop'

import PageSection from './PageSection'


const getImgSrc = (str) => {
    const start = str.indexOf('src="') + 5
    const end = str.substring(start).indexOf('"') + start
    return str.substring(start, end)
}

const formatDate = (dateString) => {
    return moment(dateString, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY')
}

const htmlDecode = (input) => {
    const doc = new DOMParser().parseFromString(input, 'text/html')
    return doc.documentElement.textContent
}

const CANVAS_WIDTH = 600

const CANVAS_HEIGHT = 400

const loadImage = (src) => {
    return new Promise((resolve) => {
        let img = new Image()
        img.onload = () => {
            resolve(img)
        }
        img.crossOrigin = 'Anonymous'
        img.src = src
    })
}

class ImageCrop extends Component {

    componentDidMount() {
        const { src } = this.props
        const ctx = this.refs.canvas.getContext('2d')
        let img = null

        loadImage(src)
            .then((loadedImg) => {
                img = loadedImg
                smartcrop.crop(img, {
                    width: CANVAS_WIDTH,
                    height: CANVAS_HEIGHT,
                    minScale: 1,
                    ruleOfThirds: true
                }).then((result) => {
                    const crop = result.topCrop
                    ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height,
                        0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
                })
            })
    }

    render() {
        return <canvas ref="canvas"
            width={CANVAS_WIDTH} height={CANVAS_HEIGHT}></canvas>
    }
}

ImageCrop.propTypes = {
    src: PropTypes.string
}

class BlogContentSection extends Component {
    constructor(props) {
        super(props)

        this.state = {
            blogItems: []
        }
    }

    componentDidMount() {
        request
            .get('https://api.rss2json.com/v1/api.json')
            .query({ rss_url: 'https://blog.keep.network/feed' })
            .then((res) => {
                let items = res.body.items

                if (items.length) {
                    this.setState({
                        blogItems: items.length > 3 ? items.slice(0, 3) : items
                    })
                }
            })
            .catch((err) => {
                console.error(err)
            })
    }

    render() {
        const { blogItems} = this.state

        return <PageSection id="our-content" convex>
            <h2>Our Latest Content</h2>
            <Row>
            { blogItems.length &&
                blogItems.map((item, i) => <Col sm={12} md={4}
                    key={`blog-item-${i}`} className="blog-item">
                    <a href={item.link} className="image-link">
                        <ImageCrop
                            src={getImgSrc(item.description)}/>
                    </a>
                    <h4>
                        <a href={item.link}>
                            <span className="blog-title">
                                { htmlDecode(item.title) }
                            </span>
                            <span className="blog-author">
                                by { item.author }
                            </span>
                            <span className="blog-date">
                                { formatDate(item.pubDate) }
                            </span>
                        </a>
                    </h4>
                </Col>)}
            </Row>
        </PageSection>
    }
}

export default BlogContentSection
