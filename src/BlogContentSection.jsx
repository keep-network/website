import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'react-bootstrap'
import moment from 'moment'
import smartcrop from 'smartcrop'

import PageSection from './PageSection'


const formatDate = (dateString) => {
    return moment(dateString, 'YYYY-MM-DD HH:mm:ss').format('MM/DD/YYYY')
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
            blogItems: [{
                link: 'https://blog.keep.network/junedapphack-3f031be766e5',
                img: '/images/blog/dapp-hack.png',
                title: 'Hacking away this summer: DappHack 2018',
                author: 'Eliza Petrovska',
                pubDate: '2018-07-11 17:07:31'
            }, {
                link: 'https://blog.keep.network/introducing-our-new-team-members-e27c72aefac8',
                img: '/images/blog/new-team-members.png',
                title: 'Introducing Our New Team Members',
                author: 'Hope Cowan',
                pubDate: '2018-06-18 16:23:47'
            }, {
                link: 'https://blog.keep.network/keep-roundup-april-27th-2018-e369443f1676',
                img: '/images/blog/keep-weekly-roundup.png',
                title: 'Keep Roundup - April 27th, 2018',
                author: 'Jack Knutson',
                pubDate: '2018-04-27 19:01:01'
            }]
        }
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
                        <img src={item.img} alt={item.title} />
                    </a>
                    <h4>
                        <a href={item.link}>
                            <span className="blog-title">
                                { item.title }
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
