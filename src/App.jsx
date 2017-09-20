import React, { Component } from 'react';
import { Button, Col, Grid, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import EmailForm from './EmailForm';
import PageSection from './PageSection';
import NavScrollItem from './NavScrollItem';
// import Snippet from './Snippet';
import * as Icons from './Icons';
import { Profile } from './Profile';
import TimelinePoint from './TimelinePoint';
import './app.css';

class App extends Component {

    render() {
        const sections = {
            HOME: 'home',
            ABOUT: 'about',
            LEARN: 'learn',
            TIMELINE: 'timeline',
            USES: 'uses',
            DESCRIPTION: 'description',
            TEAM: 'team',
            DEFINITION: 'definition',
            ADVISORS: 'advisors'
        };

//         const snippetCode = `$ curl https://api.keep.network/v1/btc/main/addrs/1Puw/Q6uWXNeGcEnLCAXmRJozdLZ9M4NWQ7
// {
//     "address": "Q6uWXNeGcEnLCAXmRJozdLZ9M4NWQ7",
//     "balance": 0,
//     "unconfirmed_balance": 0,
//     "txrefs": []
// }`;

        const WHITEPAPER_URL = 'https://59-100537042-gh.circle-artifacts.com/0/home/ubuntu/whitepaper/keep.pdf';

        return (
            <div className="App">
                <Navbar fixedTop>
                    <Navbar.Header>
                        <NavbarBrand>
                            <Link activeClass="active" to={sections.HOME} smooth spy duration={500}><Icons.Keep height="61px" width="235px"/></Link>
                        </NavbarBrand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavScrollItem to={sections.ABOUT}>Whitepaper</NavScrollItem>
                            <NavScrollItem to={sections.TEAM}>Team</NavScrollItem>
                            <NavScrollItem to={sections.ADVISORS}>Advisors</NavScrollItem>
                            <NavItem
                                href="https://blog.keep.network"
                                target="_blank">Blog</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main-content">
                    <PageSection id={sections.HOME}>
                        <h1>Keep: A privacy layer for Ethereum</h1>
                        <Row>
                            <Col sm={12} md={8} mdPush={2}>
                                <p>A keep is an off-chain container for private data.  Keeps let contracts harness the full power of the public blockchain - enabling deeper interactivity with private data than any other solution today.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} mdPush={4}>
                                <EmailForm
                                    label="Email"
                                    btnText="sign up"
                                    url="/mailing-list/signup" />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ABOUT}>
                        <Row>
                            <Col sm={12} md={6} className="slack-community">
                                <img alt="Slack Logo" src={Icons.slack} />
                                <h3>Join the Conversation</h3>
                                <p>Meet the online community</p>
                                <EmailForm
                                    label="Slack Email"
                                    btnText="join"
                                    url="/slack/invite" />
                            </Col>
                            <Col sm={12} md={6} className="whitepaper">
                                <img alt="Paper Study" src={Icons.paperStudy} />
                                <h3>Read the Whitepaper</h3>
                                <p>Find out how you can use Keep</p>
                                <Button
                                    href={WHITEPAPER_URL}
                                    download="Keep Whitepaper"
                                    target="_blank"
                                    bsSize="large">
                                    download
                                </Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.LEARN} convex>
                        <Row>
                            <Col sm={12} md={6} className="github">
                                <img alt="GitHub Logo" src={Icons.github} />
                                <h3>View the Repository</h3>
                                <p>Meet the online community</p>
                                <Button
                                    href="https://github.com/keep-network"
                                    bsStyle="primary"
                                    bsSize="large"
                                    target="_blank">
                                    open
                                </Button>
                            </Col>
                            <Col sm={12} md={6} className="primer">
                                <img alt="Paper Study" src={Icons.paperStudy} />
                                <h3>Read the Business Primer</h3>
                                <p>Coming soon</p>
                                <Button
                                    disabled
                                    bsStyle="primary"
                                    download="Keep Business Primer"
                                    target="_blank"
                                    bsSize="large">
                                    download
                                </Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.DEFINITION} additionalClassNames={['blurb']}>
                        <Row>
                            <Col sm={12} md={3}>
                                <img alt="Castle Keep" src={Icons.castle} />
                            </Col>
                            <Col sm={12} md={9}>
                                <p>Keep: <span>noun</span></p>
                                <p>The strongest or central tower of a castle, acting as a final refuge</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.USES} convex>
                        <h2>How Keep Can Be Used</h2>
                        <Row>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Agreement" src={Icons.agreement} /></div>
                                <h4>Decentralized Signing</h4>
                                <p>Acting as a digital notary, contracts will be able to assert their identity off-chain without requiring a third party confirmation of blockchain state. Integrating with tools like PGP, SSH, and TLS keep is a bridge to public private key infrastructure.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Sliders" src={Icons.sliders} /></div>
                                <h4>Dead Man Switch</h4>
                                <p>Knowing when to expose private information is just as important as keeping it hidden. With keeps you can have trusts and estate plans automatically activated to expose instructions and transfer funds.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Wallet" src={Icons.wallet} /></div>
                                <h4>Custodial Wallets</h4>
                                <p>Ethereum smart contracts can use keeps to generate their own cryptocurrency wallets to send Bitcoin, Litecoin, and Dash. Boom, cross-chain exchange.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Shop" src={Icons.shop} /></div>
                                <h4>Marketplaces for Digital Goods</h4>
                                <p>With keeps, you can easily sell digital goods like ebooks, videos, MP3’s and more without the need of a server and custom download processor.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Open Safe" src={Icons.safeOpened} /></div>
                                <h4>Blockchain Storage Encryption</h4>
                                <p>Keeps provide a bridge to private blockchain storage making it possible for smart contracts and DAO’s to store files privately. You no longer need to trust a third party with your most sensitive, private data.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Paper Study" src={Icons.paperStudy} /></div>
                                <h4>Learn More in the Whitepaper</h4>
                                <Button
                                    bsStyle="primary"
                                    href={WHITEPAPER_URL}
                                    download="Keep Whitepaper"
                                    target="_blank"
                                    bsSize="large">
                                    download
                                </Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.TIMELINE}>
                        <Row>
                            <Col sm={12} md={3}>
                                <TimelinePoint label="Public Announcement" date="09/18/17"/>
                            </Col>
                            <Col sm={12} md={3}>
                                <TimelinePoint label="Pre-Sale Opens" date="09/25/17"/>
                            </Col>
                            <Col sm={12} md={3}>
                                <TimelinePoint label="Public Sale" date="November"/>
                            </Col>
                            <Col sm={12} md={3}>
                                <TimelinePoint label="Network Launch" date="December" highlight/>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.TEAM} convex>
                        <h2>Team</h2>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Matt Luongo"
                                    title="Project Lead"
                                    imagePath="/images/headshots/matt"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/mhluongo"
                                    linkedin="https://www.linkedin.com/in/mattluongo" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Corbin Pon"
                                    title="Developer & Ops"
                                    imagePath="/images/headshots/corbin"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/CorbinPon"
                                    linkedin="https://www.linkedin.com/in/corbinpon" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Laura Wallendal"
                                    title="Growth"
                                    imagePath="/images/headshots/laura"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/LauraWallendal"
                                    linkedin="https://www.linkedin.com/in/laurawallendal" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Erin Ng"
                                    title="Developer"
                                    imagePath="/images/headshots/erin"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/erinng/" />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.DESCRIPTION} additionalClassNames={['blurb']}>
                        <Row>
                            <Col sm={12} md={3}>
                                <img alt="swords" src={Icons.swords} />
                            </Col>
                            <Col sm={12} md={9}>
                                <p>Keeps provide a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ADVISORS} convex>
                        <h2>Advisors</h2>
                        <Row>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="Brayton Williams"
                                    title="Boost VC"
                                    imagePath="/images/headshots/brayton"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/BraytonKey"
                                    linkedin="https://www.linkedin.com/in/braytonwilliams" />
                            </Col>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="John Packel"
                                    title="ConsenSys"
                                    imagePath="/images/headshots/john"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/jpackel"
                                    linkedin="https://www.linkedin.com/in/johnpackel" />
                            </Col>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="Axel Blikstad"
                                    title="International Finance"
                                    imagePath="/images/headshots/axel"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/axel-blikstad-77534814" />
                            </Col>
                        </Row>
                    </PageSection>
                    <footer>
                        <Grid>
                            <span>&#169; 2017 Keep. All Rights Reserved.</span>
                        </Grid>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
