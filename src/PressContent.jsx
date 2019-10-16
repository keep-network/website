import React from 'react'
import ClampLines from 'react-clamp-lines'

import PageSection from './PageSection'
import Arrow from './Arrow'
import Newspaper from './Newspaper'

const pressEntries = [{
    title: 'Ep 47, Announcing tBTC with James Prestwich and Matt Luongo of Cross-Chain Group',
    date: 'August 9, 2019',
    source: 'Wyre Talks Podcast',
    aboveTheFold: "DeFi is better with Bitcoin.  But there's no way to bring BTC onto Ethereum that is censorship-resistant AND adheres to the #1 principle of Bitcoin: No printing money money money money money money money money money money money money money money money money money money money money money money money",
    url: 'http://medium.com'
},{
    title: 'Ep 48, Announcing tBTC with James Prestwich and Matt Luongo of Cross-Chain Group',
    date: 'August 9, 2019',
    source: 'Wyre Talks Podcast',
    aboveTheFold: "DeFi is better with Bitcoin.  But there's no way to bring BTC onto Ethereum that is censorship-resistant AND adheres to the #1 principle of Bitcoin: No printing money money money money money money money money money money money money money money money money money money money money money money money",
    url: 'http://medium.com/'
}]

const PressContent = () => {
    return (
        <div className="press-content">
            <PageSection id="title-container">
                <div className="title">
                    <h1>Press Coverage</h1>
                    <h3>For press inquiries, please contact us at social@keep.network</h3>
                </div>
            </PageSection>
            <PageSection id="media-kit-container">
                <div className="media-kit">
                    <div className="media-kit-left">
                        <h2>Do you want to write about us?</h2>
                        <h3>Find everything you might need in our media kit</h3>
                    </div>
                    <div className="media-kit-right">
                        <a>
                            <div className="media-kit-link">
                                <Newspaper />
                                <div className="media-kit-link-text">
                                    Media Kit
                                </div>
                                <div className="media-kit-link-button">
                                    download
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </PageSection>
            <PageSection id="press-items-container">
                <div className="press-items">
                    <h2>In the News</h2>
                    {pressEntries.map(entry => (
                        <PressItem
                            title={entry.title}
                            date={entry.date}
                            source={entry.source}
                            aboveTheFold={entry.aboveTheFold}
                            url={entry.url}
                            key={entry.url}
                            />
                    ))}
                </div>
            </PageSection>
        </div>
    )
}

const PressItem = ({ title, date, source, aboveTheFold, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="press-item">
            <div className="top">
                <div className="article-title">
                    {title}
                </div>
                <div className="date">
                    {date}
                </div>
            </div>
            <div className="source">
                {source}
            </div>
            <div className="bottom">
                <div className="above-the-fold">
                    <ClampLines
                        text={aboveTheFold}
                        lines={2}
                        ellipsis="..."
                        buttons={false}
                        />
                </div>
                <div className="arrow">
                    <Arrow height={22} width={59} />
                </div>
            </div>
        </div>
    </a>
)

export default PressContent
