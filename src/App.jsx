import React, { Component } from 'react';
import { Button, Col, Grid, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import EmailForm from './EmailForm';
import PageSection from './PageSection';
import NavScrollItem from './NavScrollItem';
import Snippet from './Snippet';
import * as Icons from './Icons';
import Profile from './Profile';
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

        const snippetCode = `$ curl https://api.keep.network/v1/btc/main/addrs/1Puw/Q6uWXNeGcEnLCAXmRJozdLZ9M4NWQ7
{
    "address": "Q6uWXNeGcEnLCAXmRJozdLZ9M4NWQ7",
    "balance": 0,
    "unconfirmed_balance": 0,
    "txrefs": []
}`;

        return (
            <div className="App">
                <Navbar fixedTop>
                    <Navbar.Header>
                        <NavbarBrand>
                            <Link activeClass="active" to={sections.HOME} smooth spy duration={500}>Keep</Link>
                        </NavbarBrand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavScrollItem to={sections.ABOUT}>Whitepaper</NavScrollItem>
                            <NavScrollItem to={sections.TEAM}>Team</NavScrollItem>
                            <NavScrollItem to={sections.ADVISORS}>Advisors</NavScrollItem>
                            <NavItem href="https://blog.keep.network">Blog</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main-content">
                    <PageSection id={sections.HOME}>
                        <h1>Prepare for the Presale</h1>
                        <Row>
                            <Col sm={12} md={8} mdPush={2}>
                                <p>The Keep network is a privacy layer for public blockchains, initially built against the Ethereum blockchain. The network uses "keeps", small, off-chain data enclaves for private information.</p>
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
                                <Button bsSize="large">download</Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.LEARN} convex>
                        <Row>
                            <Col sm={12} md={6}>
                                <img alt="GitHub Logo" src={Icons.github} />
                                <h3>View the Repository</h3>
                                <p>Meet the online community</p>
                                <Button bsStyle="primary" bsSize="large">open</Button>
                            </Col>
                            <Col sm={12} md={6} className="snippet">
                                <h3 className="small-title">Get all recent transactions</h3>
                                <Snippet component="pre" lang="json">
                                    {snippetCode}
                                </Snippet>
                                <Button bsStyle="primary" bsSize="large">more code snippets</Button>
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
                                <p>For the first time, contracts will be able to assert their identity off-chain, without requiring the recipient's awareness of blockchain state.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Sliders" src={Icons.sliders} /></div>
                                <h4>Dead Man Switch</h4>
                                <p>A dead man switch is a device that is automatically activated in case its owner becomes incapacitated. Keeps enable a particular kind of dead man switch - publishing a secret, under certain contract conditions.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Wallet" src={Icons.wallet} /></div>
                                <h4>Custodial Wallets</h4>
                                <p>As a special case of a signing service, contracts can use keeps to generate their own cryptocurrency wallets, taking full custody of any received funds.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Shop" src={Icons.shop} /></div>
                                <h4>Marketplaces for Digital Goods</h4>
                                <p>Buying and selling digital goods on public blockchains today requires settling off-chain. Keeps make marketplaces for digital goods, like audio and video files, straightforward.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Open Safe" src={Icons.safeOpened} /></div>
                                <h4>Blockchain Storage Encryption</h4>
                                <p>Keeps can provide a private bridge to blockchain storage, By generating an AES key at keep initialization and providing off-chain data access to the keep, smart contracts can use keeps to secure files stored on decentralized services.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Paper Study" src={Icons.paperStudy} /></div>
                                <h4>Learn More in the Whitepaper</h4>
                                <Button bsStyle="primary" bsSize="large">download</Button>
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
                                    title="CEO & Founder"
                                    image="http://via.placeholder.com/260x260"
                                    twitter="https://twitter.com/mhluongo"
                                    linkedin="https://www.linkedin.com/in/mattluongo" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Corbin Pon"
                                    title="COO & Founder"
                                    image="http://via.placeholder.com/260x260"
                                    twitter="https://twitter.com/CorbinPon"
                                    linkedin="https://www.linkedin.com/in/corbinpon" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Laura Wallendal"
                                    title="Cypherpunk"
                                    image="http://via.placeholder.com/260x260"
                                    twitter="https://twitter.com/LauraWallendal"
                                    linkedin="https://www.linkedin.com/in/laurawallendal" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    title="CEO & Founder"/>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.DESCRIPTION} additionalClassNames={['blurb']}>
                        <Row>
                            <Col sm={12} md={3}>
                                <img alt="swords" src={Icons.swords} />
                            </Col>
                            <Col sm={12} md={9}>
                                <p>Keep is a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ADVISORS} convex>
                        <h2>Advisors</h2>
                        <Row>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                            <Col sm={12} md={2}>
                                <Profile/>
                            </Col>
                        </Row>
                    </PageSection>
                    <footer>
                        <Grid>
                            <span>&#169; 2017 Card for Coin, Inc. All Rights Reserved.</span>
                        </Grid>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
