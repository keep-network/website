import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import request from 'superagent';

import PageSection from './PageSection';


const getImgSrc = (str) => {
    const start = str.indexOf('src="') + 5;
    const end = str.substring(start).indexOf('"') + start;
    return str.substring(start, end);
}

class BlogContentSection extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogItems: []
        };
    }

    componentDidMount() {
        request
            .get('https://api.rss2json.com/v1/api.json')
            .query({ rss_url: 'https://blog.keep.network/feed' })
            .then((res) => {
                let items = res.body.items;

                if (items.length) {
                    this.setState({
                        blogItems: items.length > 3 ? items.slice(0, 3) : items
                    });
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    render() {
        const { blogItems} = this.state;

        return <PageSection id="our-content" convex>
            <h2>Our Latest Content</h2>
            <Row>
            { blogItems.length &&
                blogItems.map((item, i) => <Col sm={12} md={4}
                    key={`blog-item-${i}`} className="blog-item">
                    <a href={item.link} className="image-link">
                        <img alt={item.title}
                            src={getImgSrc(item.description)}/>
                    </a>
                    <h4>
                        <a href={item.link}>
                            <span className="blog-title">{item.title}</span>
                            <span className="blog-author">by {item.author}</span>
                            <span className="blog-date">{item.pubDate}</span>
                        </a>
                    </h4>
                </Col>)}
            </Row>
        </PageSection>;
    }
}

export default BlogContentSection;
