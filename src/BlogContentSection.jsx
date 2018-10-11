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
                link: 'https://blog.keep.network/the-keep-random-beacon-an-early-look-a606ff7a4c70',
                img: 'https://cdn-images-1.medium.com/max/2000/1*08lezyh06cimt5g8_CtFPA.jpeg',
                title: 'The Keep Random Beacon: An Early Look',
                author: 'Antonio Salazar Cardozo',
                pubDate: '2018-10-04T19:27:31.651Z'
            }, {
                link: 'https://blog.keep.network/random-beacon-alpha-api-and-demo-app-9b8f9c6347b6',
                img: 'https://cdn-images-1.medium.com/max/2000/1*zFP8HRRV97Go02Npyye0TQ.jpeg',
                title: 'Random Beacon Alpha API Demo App',
                author: 'Nik Grinkevich',
                pubDate: '2018-09-20T16:36:19.114Z'
            }, {
                link: 'https://blog.keep.network/building-a-beacon-the-road-to-mainnet-6e1904f0c986',
                img: 'https://cdn-images-1.medium.com/max/2000/1*ZOWjx1zqvBPXdHNHtju5vw.jpeg',
                title: 'Building a Beacon: The Road to Mainnet',
                author: 'Antonio Salazar Cardozo',
                pubDate: '2018-09-11T14:20:25.662Z'
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
                    <a href={item.link} className="image-link" target="_blank">
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
