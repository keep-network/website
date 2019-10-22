import React, { Component } from 'react'
import ClampLines from 'react-clamp-lines'

import PageSection from './PageSection'
import Arrow from './Arrow'
import Newspaper from './Newspaper'

const allPressEntries = [{
    title: 'These Bitcoin Users Want DAI and DeFi – Here’s How They Plan to Get It',
    date: 'August 16, 2019',
    source: 'Coindesk',
    aboveTheFold: "Leigh Cuen covers Cross-Chain Group’s first-ever Cross-Chain Summit for blockchain interoperability in San Francisco, highlighting the Group’s announcement of tBTC.",
    url: 'https://www.coindesk.com/these-bitcoin-users-want-dai-and-defi-heres-how-they-plan-to-get-it'
},{
    title: 'Messari adds 11 new Disclosures Registry participants, surpassing 50 members',
    date: 'August 20, 2019',
    source: 'Messari',
    aboveTheFold: "Keep has joined the Messari Disclosures Registry as 11 new crypto projects are added. Read Coindesk’s coverage.",
    url: 'https://messari.io/article/announcement-messari-adds-11-new-disclosures-registry-participants-surpassing-50-members'
},{
    title: 'Announcing tBTC with James Prestwich and Matt Luongo of Cross-Chain Group',
    date: 'August 21, 2019',
    source: 'Wyre Talks Podcast',
    aboveTheFold: "Cross-Chain Group founders Matt Luongo and James Prestwich join Wyre hosts Louis Aboud Hogben and Tom Scaria to discuss Bitcoin for DeFi; how tBTC facilitates interoperability and brings Bitcoin to other chains.",
    url: 'https://wyre-talks.simplecast.com/episodes/ep-47-announcing-tbtc-with-james-prestwich-and-matt-luongo-of-cross-chain-group-tHcZr3jW'
},{
    title: 'Episode 041 - Matt Luongo (Keep)',
    date: 'June 17, 2109',
    source: 'Baselayer Podcast',
    aboveTheFold: "David invited Keep Project Lead, Matt Luongo, to join the podcast and discuss privacy, interoperability, and the blockchain space as a whole.",
    url: 'https://podcasts.apple.com/us/podcast/base-layer-episode-041-matt-luongo-keep/id1445373535?i=1000441792480'
},{
    title: 'Privacy and Scaling EIPs accepted for Ethereum Hard Fork',
    date: 'September 4, 2019',
    source: 'Keep Blog',
    aboveTheFold: "With community partners, Keep Network brings privacy-preserving technology to the EVM with EIPs 152 and 1108.",
    url: 'https://blog.keep.network/privacy-and-scaling-focused-eips-accepted-for-ethereum-istanbul-hard-fork-1a75fe0c4e4a'
},{
    title: 'What’s Needed Now in Interoperability Infrastructure',
    date: 'August 30, 2019',
    source: 'Keep Blog',
    aboveTheFold: "A look back at the first Cross-Chain Summit and DeFi BTC.",
    url: 'https://blog.keep.network/whats-needed-now-in-interoperability-infrastructure-e968405bbc5c'
},{
    title: 'Bridging Bitcoin and Ethereum',
    date: 'August 28, 2019',
    source: 'Keep Blog',
    aboveTheFold: "Announcing tBTC, the first DApp built on the Keep Network.",
    url: 'https://blog.keep.network/bridging-bitcoin-and-ethereum-b2f9923630a7'
},{
    title: 'Keep collaborates with Electric Coin Co., Ethereum Foundation, & Iqlusion to bring interoperability to Zcash',
    date: 'August 13, 2019',
    source: 'Keep Blog',
    aboveTheFold: "Together, they are funding the addition of FlyClient proofs in Zcash.",
    url: 'https://blog.keep.network/july-roundup-1a1d71e22575'
},{
    title: 'Summa and Keep Partner on Cross-Chain Working Group',
    date: 'August 1, 2019',
    source: 'Keep Blog',
    aboveTheFold: "Laura Wallendal shares Keep’s partnership with Summa to form the Cross-Chain Group, a working group and industry resource for technologies, projects, and efforts at the forefront of blockchain interoperability.",
    url: 'https://blog.keep.network/blockchain-interoperability-working-group-keep-summa-30eb8071f865'
},{
    title: 'Zcon Workshop: “Toward Cross-Chain Interoperability with Zcash”',
    date: 'June 23, 2019',
    source: 'Keep Blog',
    aboveTheFold: "Matt Luong and James Prestwich hosted a workshop at the conference to discuss future economic interoperability between Ethereum and Zcash.",
    url: 'https://blog.keep.network/keep-network-june-roundup-db063f305ad9'
},{
    title: 'Speaking at CognitionX Conference in London',
    date: 'June 9, 2019',
    source: 'Keep Blog',
    aboveTheFold: "Ecosystem Growth & Innovation Lead Jarrell James joined a panel at CogX discussing adoption challenges, inherently bad actors with centralized companies, secure multi-party computation & real-life, tangible use cases, how data is stored and shared from a centralized corporate perspective and more.",
    url: 'https://blog.keep.network/keep-network-june-roundup-db063f305ad9'
},{
    title: 'Keep developers present network component libp2p to IPFS',
    date: 'May 6, 2019',
    source: 'IPFS Youtube Channel',
    aboveTheFold: "Piotr Dyraga and Raghav Gulati gave a presentation at an IPFS Weekly Call + Contributor Office Hours on one of the important components of Keep — libp2p.",
    url: 'https://www.youtube.com/watch?v=EamY2U2Ohyk'
},{
    title: 'Corbin Pon interviewed by Underscore VC Co-Founder',
    date: 'April 23, 2019',
    source: 'Underscore VC Youtube Channel',
    aboveTheFold: "Discussing the future of blockchain, Corbin Pon and Richard Dulude covered the possibilities that Keep enables for public blockchains, different levels of privacy and security, hopes and plans for a safer financial world with ownership certainty, and the top things hindering blockchain.",
    url: 'https://www.youtube.com/watch?v=PfwJODGY6yQ'
}]

class PressContent extends Component {
    state = {
        pressEntries: allPressEntries.slice(0,10)
    }

    handleShowAll = () => {
        this.setState({
            pressEntries: allPressEntries
        })
    }

    render() {
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
                            <a href="media/KeepMediaKit.zip" target="_blank" rel="noopener noreferrer">
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
                        {this.state.pressEntries.map(entry => (
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
                {
                    (allPressEntries.length > 10) && (this.state.pressEntries.length === 10)
                    ? (
                        <PageSection id="see-all">
                            <button className="see-all-button" onClick={this.handleShowAll}>
                                See all <Arrow height={22} width={59} />
                            </button>
                        </PageSection>
                    ) : ''
                }
            </div>
        )
    }
}

const PressItem = ({ title, date, source, aboveTheFold, url }) => (
    <a href={url} target="_blank" rel="noopener noreferrer">
        <div className="press-item">
            <div className="top">
                <div className="article-title">
                    {title}
                </div>
                <div className="date date-large">
                    {date}
                </div>
            </div>
            <div className="source source-large">
                {source}
            </div>
            <div className="date date-mobile">
                {date}
            </div>
            <div className="bottom">
                <div className="above-the-fold">
                    <ClampLines
                        text={aboveTheFold}
                        lines={ window.innerWidth < 767 ? 4 : 2 }
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
