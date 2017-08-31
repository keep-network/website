import React, { Component } from 'react';
import { Button, Carousel, CarouselItem, Col, Grid, Jumbotron, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { Link } from 'react-scroll';
import LeadGenForm from './LeadGenForm';
import PageSection from './PageSection';
import NavScrollItem from './NavScrollItem';
import corbin from './images/corbin.jpg';
import jane from './images/jane.png';
import matt from './images/matt.jpg';
import mario from './images/mario.png';
import yoshi from './images/yoshi.png';
import './App.css';

class App extends Component {

    render() {
        const sections = {
            HOME: 'home',
            ABOUT: 'about',
            LEARN: 'learn',
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
                            <NavScrollItem to={sections.ABOUT}>About</NavScrollItem>
                            <NavScrollItem to={sections.LEARN}>Learn</NavScrollItem>
                            <NavScrollItem to={sections.TEAM}>Team</NavScrollItem>
                            <NavScrollItem to={sections.ADVISORS}>Advisors</NavScrollItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main-content">
                    <Jumbotron>
                        <PageSection id={sections.HOME}>
                            <h1 className="display-3">Introducing Keep</h1>
                            <p className="lead">Facilisis netus euismod convallis iaculis diam tincidunt quisque porta, porttitor magnis dictumst risus, luctus molestie ridiculus et cum tempus hac.</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adipiscing elit arcu dui..</p>
                            <LeadGenForm/>
                        </PageSection>
                    </Jumbotron>
                    <PageSection id={sections.ABOUT}>
                        <h2 className="h1">What is Keep?</h2>
                        <p>Sagittis aliquam placerat pulvinar quisque curae volutpat consequat ultricies nostra metus, ante conubia cursus potenti id facilisis ridiculus proin cum, pretium nec ultrices est hac dictumst suspendisse rutrum a. Eleifend litora blandit nisi tempus sodales quis dis, tempor dapibus aenean turpis magnis quisque, at tincidunt ad tellus nibh felis. Himenaeos vulputate platea suscipit sagittis dui commodo dapibus pretium, potenti ad gravida porta augue libero dictum volutpat, massa litora felis justo tincidunt aptent ut.</p>
                        <Button bsStyle="primary" bsSize="large">Read the white paper</Button>
                    </PageSection>
                    <PageSection id={sections.LEARN}>
                        <h2 className="h1">How can I use Keep?</h2>
                        <Carousel interval={null}>
                            <CarouselItem>
                                <div className="carousel-item-inner-wrap">
                                    <div>
                                        <h3 class="h2">Habitant eleifend libero placerat suspendisse</h3>
                                        <p>Est dictumst penatibus bibendum neque vitae consequat platea ante ornare sollicitudin ridiculus, nascetur facilisi at dis magnis leo tortor lacinia hendrerit magna, vulputate etiam tristique montes sagittis sociosqu purus in convallis aliquet. Magnis gravida taciti tempus vel ullamcorper ad curabitur penatibus iaculis accumsan nam ante nunc, justo massa senectus nibh rutrum pellentesque pulvinar urna sed quam fringilla lobortis. Per vel lectus quam suspendisse faucibus laoreet suscipit vehicula ridiculus volutpat, inceptos mattis purus mauris tempor pharetra curae rutrum sapien dapibus mus, in egestas aenean nec sollicitudin imperdiet felis facilisis conubia.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="carousel-item-inner-wrap">
                                    <div>
                                        <h3 class="h2">Quisque enim lectus orci ridiculus</h3>
                                        <p>Curae porttitor vulputate est per duis eros nisl ornare metus facilisi, luctus vestibulum aliquam habitant donec tellus aliquet ac malesuada ligula, ullamcorper eleifend sodales sapien vivamus mollis neque eget eu. Habitant lacinia sociosqu suscipit gravida odio ut feugiat consequat senectus, ridiculus metus integer sapien fringilla nunc natoque proin porta, nec maecenas per at quam libero imperdiet facilisi.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                            <CarouselItem>
                                <div className="carousel-item-inner-wrap">
                                    <div>
                                        <h3 class="h2">Purus nascetur feugiat</h3>
                                        <p>Lectus pharetra netus nullam quisque curae laoreet, mollis platea phasellus litora. Porttitor eleifend eu sociosqu integer est dictum aptent mus, pretium egestas cursus quam lectus tristique parturient condimentum vehicula, ac nascetur et netus convallis lobortis nibh. Semper at iaculis facilisis suscipit ligula, maecenas interdum taciti nullam. Dictumst donec mauris aptent viverra ligula turpis dignissim himenaeos cum sodales curabitur, rutrum purus dictum blandit interdum hendrerit aliquet iaculis scelerisque.</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        </Carousel>
                    </PageSection>
                    <PageSection id={sections.TEAM}>
                        <h2 className="h1">Team</h2>
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
                            <ul className="footer-links">
                                <li><a href="#">Github</a></li>
                                <li><a href="#">Slack</a></li>
                            </ul>
                            <span>&#169; 2017 Keep</span>
                        </Grid>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
