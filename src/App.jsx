import React, { Component } from 'react';
import { Button, Col, Grid, Jumbotron, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import LeadGenForm from './LeadGenForm';
import PageSection from './PageSection';
import NavScrollItem from './NavScrollItem';
import corbin from './images/corbin.jpg';
import jane from './images/jane.png';
import matt from './images/matt.jpg';
import mario from './images/mario.png';
import yoshi from './images/yoshi.png';
import './app.css';

class App extends Component {

    render() {
        const sections = {
            HOME: 'home',
            ABOUT: 'about',
            TEAM: 'team',
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
                    <Jumbotron>
                        <PageSection id={sections.HOME}>
                            <h1 className="display-3">Prepare for the Presale</h1>
                            <p className="lead">The Keep network is a privacy layer for public blockchains, initially built against the Ethereum blockchain. The network uses "keeps", small, off-chain data enclaves for private information</p>
                            <LeadGenForm/>
                        </PageSection>
                    </Jumbotron>
                    <PageSection id={sections.ABOUT}>
                        <h2 className="h1">What is Keep?</h2>
                        <p>Sagittis aliquam placerat pulvinar quisque curae volutpat consequat ultricies nostra metus, ante conubia cursus potenti id facilisis ridiculus proin cum, pretium nec ultrices est hac dictumst suspendisse rutrum a. Eleifend litora blandit nisi tempus sodales quis dis, tempor dapibus aenean turpis magnis quisque, at tincidunt ad tellus nibh felis. Himenaeos vulputate platea suscipit sagittis dui commodo dapibus pretium, potenti ad gravida porta augue libero dictum volutpat, massa litora felis justo tincidunt aptent ut.</p>
                        <Button bsStyle="primary" bsSize="large">Read the white paper</Button>
                    </PageSection>
                    <PageSection id={sections.TEAM}>
                        <h2 className="h1">Team</h2>
                        <Row>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={matt} alt="Matt Luongo"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={corbin} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={matt} alt="Matt Luongo"/></div>
                                <h4><span>Matt Luongo</span>CEO &amp; Founder</h4>
                            </Col>
                            <Col sm={12} md={3} className="profile">
                                <div className="avatar"><img src={corbin} alt="Corbin Pon"/></div>
                                <h4><span>Corbin Pon</span>COO &amp; Founder</h4>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ADVISORS}>
                        <h2 className="h1">Advisors</h2>
                        <Row>
                            <Col sm={12} md={4} className="profile">
                                <div className="avatar"><img src={matt} alt="Matt Luongo"/></div>
                                <h3>Matt Luongo</h3>
                                <p>Lacinia nam feugiat parturient venenatis maecenas ultrices mollis nisl est elementum, vel ante praesent fringilla molestie porta accumsan proin ornare velit, sapien habitasse non vivamus laoreet nisi nec rutrum auctor.</p>
                            </Col>
                            <Col sm={12} md={4} className="profile">
                                <div className="avatar"><img src={corbin} alt="Corbin Pon"/></div>
                                <h3>Corbin Pon</h3>
                                <p>Lacinia nam feugiat parturient venenatis maecenas ultrices mollis nisl est elementum, vel ante praesent fringilla molestie porta accumsan proin ornare velit, sapien habitasse non vivamus laoreet nisi nec rutrum auctor.</p>
                            </Col>
                            <Col sm={12} md={4} className="profile">
                                <div className="avatar"><img src={jane} alt="Jane Doe"/></div>
                                <h3>Jane Doe</h3>
                                <p>Lacinia nam feugiat parturient venenatis maecenas ultrices mollis nisl est elementum, vel ante praesent fringilla molestie porta accumsan proin ornare velit, sapien habitasse non vivamus laoreet nisi nec rutrum auctor.</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.QUOTES}>
                        <h2 className="h1">What people are saying</h2>
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
