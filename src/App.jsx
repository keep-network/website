import React, { Component } from 'react';
import { Button, Col, Grid, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import LeadGenForm from './LeadGenForm';
import SlackInviteForm from './SlackInviteForm';
import PageSection from './PageSection';
import NavScrollItem from './NavScrollItem';
import mario from './images/mario.png';
import yoshi from './images/yoshi.png';
import './app.css';

class App extends Component {

    render() {
        const sections = {
            HOME: 'home',
            ABOUT: 'about',
            LEARN: 'learn',
            DICTIONARY: 'dictionary',
            USES: 'uses',
            DESCRIPTION: 'description',
            TEAM: 'team',
            BLURB: 'blurb',
            ADVISORS: 'advisors',
            QUOTES: 'quotes'
        };

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
                                <LeadGenForm/>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ABOUT}>
                        <Row>
                            <Col sm={12} md={6}>
                                <h3>Join the Conversation</h3>
                                <p>Meet the online community</p>
                                <SlackInviteForm />
                            </Col>
                            <Col sm={12} md={6}>
                                <h3>Read the Whitepaper</h3>
                                <p>Find out how you can use Keep</p>
                                <Button bsSize="large">download</Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.LEARN}>
                        <Row>
                            <Col sm={12} md={6}>
                                <h3>View the Repository</h3>
                                <p>Meet the online community</p>
                                <Button bsStyle="primary" bsSize="large">open</Button>
                            </Col>
                            <Col sm={12} md={6}>
                                <Button bsStyle="primary" bsSize="large">more code snippets</Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.DICTIONARY} additionalClassNames={['blurb']}>
                        <Row>
                            <Col sm={12} md={3}>
                                <img alt="Castle Keep" src="http://via.placeholder.com/160x150" />
                            </Col>
                            <Col sm={12} md={9}>
                                <p>Keep: noun</p>
                                <p>The strongest or central tower of a castle, acting as a final refuge</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.USES}>
                        <h2>How Keep Can Be Used</h2>
                        <Row>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="use case icon" src="http://via.placeholder.com/100x100" /></div>
                                <h4>Decentralized Signing</h4>
                                <p>For the first time, contracts will be able to assert their identity off-chain, without requiring the recipient's awareness of blockchain state.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="use case icon" src="http://via.placeholder.com/100x100" /></div>
                                <h4>Dead Man Switch</h4>
                                <p>A dead man switch is a device that is automatically activated in case its owner becomes incapacitated. Keeps enable a particular kind of dead man switch - publishing a secret, under certain contract conditions.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="use case icon" src="http://via.placeholder.com/100x100" /></div>
                                <h4>Custodial Wallets</h4>
                                <p>As a special case of a signing service, contracts can use keeps to generate their own cryptocurrency wallets, taking full custody of any received funds.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="use case icon" src="http://via.placeholder.com/100x100" /></div>
                                <h4>Marketplaces for Digital Goods</h4>
                                <p>Buying and selling digital goods on public blockchains today requires settling off-chain. Keeps make marketplaces for digital goods, like audio and video files, straightforward.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="use case icon" src="http://via.placeholder.com/100x100" /></div>
                                <h4>Blockchain Storage Encryption</h4>
                                <p>Keeps can provide a private bridge to blockchain storage, By generating an AES key at keep initialization and providing off-chain data access to the keep, smart contracts can use keeps to secure files stored on decentralized services.</p>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="use case icon" src="http://via.placeholder.com/100x100" /></div>
                                <h4>Learn More in the Whitepaper</h4>
                                <Button bsStyle="primary" bsSize="large">download</Button>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.DESCRIPTION} additionalClassNames={['blurb']}>
                        <Row>
                            <Col sm={12} md={9}>
                                <p>Keep is a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                            </Col>
                            <Col sm={12} md={3}>
                                <img alt="swords" src="http://via.placeholder.com/160x150" />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.TEAM}>
                        <h2>Team</h2>
                        <Row>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/260x260'} alt="Matt Luongo"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/260x260'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/260x260'} alt="Matt Luongo"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/260x260'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.BLURB} additionalClassNames={['blurb']}>
                        <Row>
                            <Col sm={12} md={3}>
                                <img alt="Castle Keep" src="http://via.placeholder.com/160x150" />
                            </Col>
                            <Col sm={12} md={9}>
                                <p>Keep: noun</p>
                                <p>The strongest or central tower of a castle, acting as a final refuge</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ADVISORS}>
                        <h2>Advisors</h2>
                        <Row>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={2} className="profile">
                                <div className="avatar"><img src={'http://via.placeholder.com/160x160'} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.QUOTES}>
                        <h2>What people are saying</h2>
                        <Row className="quote right">
                            <Col sm={12} md={8} className="quote-text">
                                <h3>"Viverra convallis nostra enim dignissim nisl, maecenas feugiat eros himenaeos porttitor, id velit consequat et. Vehicula nisi viverra diam quisque curae ante bibendum, ac at turpis eu integer facilisis, mi ligula feugiat inceptos mus sociosqu."</h3>
                            </Col>
                            <Col sm={12} md={4} >
                                <div className="avatar"><img src={yoshi} alt="Yoshi"/></div>
                                <h3>Yoshi</h3>
                            </Col>
                        </Row>
                        <Row className="quote left">
                            <Col sm={12} md={8} mdPush={4} className="quote-text">
                                <h3>"Sed feugiat ridiculus etiam vitae morbi semper suscipit aenean dictum, interdum mollis lacinia quis auctor parturient porta cum, ornare pretium risus natoque conubia metus rutrum tincidunt."</h3>
                            </Col>
                            <Col sm={12} md={4} mdPull={8}>
                                <div className="avatar"><img src={mario} alt="Mario"/></div>
                                <h3>Mario</h3>
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
