import React, { Component } from 'react'
import { Alert, Button, Col, Grid, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { Picture } from 'react-responsive-picture'
import classNames from 'classnames'

import EmailForm from './EmailForm'
import PageSection from './PageSection'
import NavScrollItem from './NavScrollItem'
// import Snippet from './Snippet'
import * as Icons from './Icons'
import { Profile } from './Profile'
import { getSrc } from './utils'
import { actionTypes } from './redux'

import './app.css'

class App extends Component {
    state = {
        alertMessage: `NOTICE: As of ${ new Date().toLocaleDateString() }, we have not announced any token sale or air drop of any kind.`
    }

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
            ADVISORS: 'advisors',
            JAMES_QUOTE: 'james-quote',
            PARTNERS: 'partners',
            VIGNESH_QUOTE: 'vignesh-quote',
            SUPPORTERS: 'supporters',
            LUIS_QUOTE: 'luis-quote',
            JOE_QUOTE: 'joe-urgo-quote',
            HIRING: 'hiring'
        }

        const WHITEPAPER_URL = 'https://keep.network/whitepaper'

        const { signupSlack, ajaxRequestStates } = this.props
        const { alertMessage } = this.state

        return (
            <div className={classNames('App', {' has-alert': !!alertMessage })}>
                <Navbar fixedTop>
                    <Navbar.Header>
                        <NavbarBrand>
                            <Link activeClass="active" to={sections.HOME} smooth spy duration={500}><Icons.Keep height="61px" width="235px"/></Link>
                        </NavbarBrand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem
                                href={WHITEPAPER_URL}
                                rel="noopener noreferrer"
                                target="_blank">Whitepaper</NavItem>
                            <NavScrollItem to={sections.TEAM}>Team</NavScrollItem>
                            <NavScrollItem to={sections.ADVISORS}>Advisors</NavScrollItem>
                            <NavItem
                                href="https://blog.keep.network"
                                rel="noopener noreferrer"
                                target="_blank">Blog</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="main-content">
                    <PageSection id={sections.HOME}>
                        <Row>
                            <Col sm={12} md={6}>
                                <h1>A privacy layer for Ethereum</h1>
                                <p>A keep is an off-chain container for private data. Keeps help contracts harness the full power of the public blockchain &mdash; enabling deep interactivity with private data.</p>
                            </Col>
                            <Col sm={12} md={6} className="col-circles">
                                <Picture src={getSrc('/images/texture-circle', 'png', 3)} />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection>
                        <Row className="slack-signup">
                            <Col sm={12} md={2} mdPush={3} className="col-icon">
                                <img alt="Slack Logo" src={Icons.slackGreen} />
                            </Col>
                            <Col sm={12} md={4} mdPush={3}>
                                <EmailForm
                                    label="Slack Email"
                                    btnText="join"
                                    onSubmit={signupSlack}
                                    requestStates={ajaxRequestStates}
                                    request={actionTypes.SIGNUP_SLACK} />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ABOUT}>
                        <Row>
                            <Col sm={12} md={6} className="whitepaper">
                                <img alt="Paper Study" src={Icons.paperStudy} />
                                <h3>Read the Whitepaper</h3>
                                <p>Find out how you can use Keep</p>
                                <Button
                                    href={WHITEPAPER_URL}
                                    download="Keep Whitepaper"
                                    rel="noopener noreferrer"
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
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    open
                                </Button>
                            </Col>
                            <Col sm={12} md={6} className="primer">
                                <img alt="Paper Study" src={Icons.paperStudy} />
                                <h3>Read the Business Primer</h3>
                                <p>Find out how you can use Keep</p>
                                <Button
                                    href="/KeepBusinessPrimer.pdf"
                                    bsStyle="primary"
                                    download="Keep Business Primer"
                                    rel="noopener noreferrer"
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
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Sliders" src={Icons.sliders} /></div>
                                <h4>Dead Man Switch</h4>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Wallet" src={Icons.wallet} /></div>
                                <h4>Custodial Wallets</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Shop" src={Icons.shop} /></div>
                                <h4>Marketplaces for Digital Goods</h4>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Open Safe" src={Icons.safeOpened} /></div>
                                <h4>Blockchain Storage Encryption</h4>
                            </Col>
                            <Col sm={12} md={4} className="use-case">
                                <div className="icon"><img alt="Paper Study" src={Icons.paperStudy} /></div>
                                <h4>Learn More in the Whitepaper</h4>
                                <Button
                                    bsStyle="primary"
                                    href={WHITEPAPER_URL}
                                    download="Keep Whitepaper"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    bsSize="large">
                                    download
                                </Button>
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
                                    linkedin="https://www.linkedin.com/in/mattluongo"
                                    github="https://github.com/mhluongo"
                                    keybase="http://keybase.io/mhluongo" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Corbin Pon"
                                    title="Developer & Ops"
                                    imagePath="/images/headshots/corbin"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/CorbinPon"
                                    linkedin="https://www.linkedin.com/in/corbinpon"
                                    github="https://github.com/clp16"
                                    keybase="http://keybase.io/corbinpon"/>
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Antonio Salazar Cardozo"
                                    title="Tech Lead"
                                    imagePath="/images/headshots/antonio"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/lightfiend"
                                    linkedin="https://www.linkedin.com/in/lightfiend"
                                    github="https://github.com/Shadowfiend"
                                    keybase="http://keybase.io/shadowfiend" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Laura Wallendal"
                                    title="Growth"
                                    imagePath="/images/headshots/laura"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/LauraWallendal"
                                    linkedin="https://www.linkedin.com/in/laurawallendal"
                                    keybase="http://keybase.io/lwallendal" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Prashanth Irudayaraj"
                                    title="Ops & Research"
                                    imagePath="/images/headshots/prashanth"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/Zarathusthra"
                                    linkedin="https://www.linkedin.com/in/pirudayaraj"
                                    keybase="http://keybase.io/starsitar" />
                            </Col>

                            <Col sm={12} md={3}>
                                <Profile
                                    name="Nik Grinkevich"
                                    title="Developer"
                                    imagePath="/images/headshots/nik"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/ngrinkevich"
                                    linkedin="https://www.linkedin.com/in/nikgrinkevich"
                                    github="https://github.com/ngrinkevich"
                                    keybase="https://keybase.io/nikgrinkevich" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Raghav Gulati"
                                    title="Developer"
                                    imagePath="/images/headshots/raghavGulati"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/rargulati"
                                    linkedin="https://www.linkedin.com/in/rargulati/"
                                    github="https://github.com/rargulati"
                                    keybase="http://keybase.io/raj" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Philip Schlump"
                                    title="Developer"
                                    imagePath="/images/headshots/philipSchlump"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/pschlump"
                                    linkedin="https://www.linkedin.com/in/philip-schlump-73100429/"
                                    github="https://github.com/pschlump"
                                    keybase="https://keybase.io/pschlump" />
                            </Col>

                        </Row>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Piotr Dyraga"
                                    title="Developer"
                                    imagePath="/images/headshots/piotr"
                                    imageMaxRes={3}
                                    imageType="jpg"
                                    twitter="https://twitter.com/piotrdyraga?lang=en"
                                    linkedin="https://www.linkedin.com/in/piotrdyraga/"
                                    github="https://github.com/pdyraga" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Jakub Nowakowski"
                                    title="Developer"
                                    imagePath="/images/headshots/jakub"
                                    imageMaxRes={3}
                                    imageType="jpg"
                                    twitter="https://twitter.com/jnowakow8"
                                    linkedin="https://www.linkedin.com/in/jnowakowski8/"
                                    github="https://github.com/nkuba" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Erin Ng"
                                    title="Developer"
                                    imagePath="/images/headshots/erin"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/erinng/"
                                    github="https://github.com/ironng"
                                    keybase="http://keybase.io/ironng" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Marcin Pawlowski"
                                    title="Developer"
                                    imagePath="/images/headshots/marcin"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/mpspp"
                                    linkedin="https://www.linkedin.com/in/mpspp/"
                                    github="https://github.com/madxor"
                                    keybase="http://keybase.io/mpp" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Markus Fix"
                                    title="Developer"
                                    imagePath="/images/headshots/markus"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/lispmeister"
                                    linkedin="https://www.linkedin.com/in/lispmeister/"
                                    github="https://github.com/lispmeister"
                                    keybase="http://keybase.io/lispmeister" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Jack Knutson"
                                    title="Community Manager"
                                    imagePath="/images/headshots/jack"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/KnutsonRussell"
                                    linkedin="https://www.linkedin.com/in/jack-knutson-jr"
                                    github="https://github.com/drknudy"
                                    keybase="http://keybase.io/drknudy" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Eliza Petrovska"
                                    title="Community Manager"
                                    imagePath="/images/headshots/elizapetrovska_1"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/elizapetrovska"
                                    linkedin="https://www.linkedin.com/in/elizapetrovska/"
                                    github="https://github.com/elizapetrovska"
                                    keybase="http://keybase.io/elizapetrovska" />
                            </Col>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Hope Cowan"
                                    title="Content Manager"
                                    imagePath="/images/headshots/hope_cowen"
                                    imageType="png"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/hopecowan/"
                                    keybase="http://keybase.io/hecowan" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Aaron O'Hearn"
                                    title="Growth Operations"
                                    imagePath="/images/headshots/aaron"
                                    imageType="png"
                                    imageMaxRes={1}
                                    twitter="https://twitter.com/aaron0"
                                    linkedin="https://www.linkedin.com/in/aaronohearn/"
                                    keybase="https://keybase.io/aohearn" />
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
                                    title="Hard Core Decentralization Developer"
                                    imagePath="/images/headshots/john"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/jpackel"
                                    linkedin="https://www.linkedin.com/in/johnpackel" />
                            </Col>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="James Prestwich"
                                    title="Summa, formerly Storj Labs"
                                    imagePath="/images/headshots/jamesPrestwich"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/prestwich" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="Axel Blikstad"
                                    title="International Finance"
                                    imagePath="/images/headshots/axel"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/axel-blikstad-77534814" />
                            </Col>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="Joseph Urgo"
                                    title="district0x"
                                    imagePath="/images/headshots/josephUrgo"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/jfurgo?lang=en"
                                    linkedin="https://www.linkedin.com/in/joseph-urgo-a8b77983/" />
                            </Col>
                            <Col sm={12} md={4}>
                                <Profile
                                    name="Luis Cuende"
                                    title="Aragon"
                                    imagePath="/images/headshots/luisCuende"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/licuende?lang=en"
                                    linkedin="https://www.linkedin.com/in/luisivancuende/" />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.PARTNERS} convex>
                        <h2>Our Partners</h2>
                        <Row>
                            <Col sm={12} md={4} mdPush={1}>
                                <a href="https://lendroid.com/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/lendroidLogo', 'jpg', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4} mdPush={3}>
                                <a href="https://district0x.io/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/district0x_logo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.SUPPORTERS} convex>
                        <h2>Our Supporters</h2>
                        <Row>
                            <Col sm={12} md={4}>
                                <a href="http://polychain.capital/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/polychainLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4}>

                                <a href="https://a16z.com/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/andreessenHorowitzLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4}>
                                <a href="http://www.dhvc.com/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/DHVCLogo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4} mdPush={2}>
                                <a href="http://www.draper.vc/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/draperAssociatesLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4} mdPush={2}>
                                <a href="https://www.distributedcapital.io/" rel="noopener noreferrer" target="_blank">
                                    <Picture src={getSrc('/images/logos/distributedCapPartnersLogo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.HIRING} convex>
                        <h2>We're Hiring!</h2>
                        <Row>
                            <Col sm={12} md={12}>
                                <p>Please email us at <a href="mailto:work@keep.network">work@keep.network</a> if you're interested in joining the Keep team.</p>
                            </Col>
                        </Row>
                    </PageSection>
                    <footer>
                        <Grid>
                            <span>&#169; 2018 Keep. All Rights Reserved.</span>
                            <div className="social-footer">
                                <a href="https://twitter.com/keep_project" rel="noopener noreferrer" target="_blank">
                                    <Icons.Twitter color="#91ABA5" />
                                </a>
                                <a href="https://www.reddit.com/r/KeepNetwork/" rel="noopener noreferrer" target="_blank">
                                    <Icons.Reddit/>
                                </a>
                                <a href="https://t.me/KeepNetworkOfficial/" rel="noopener noreferrer" target="_blank">
                                    <Icons.Telegram/>
                                </a>
                            </div>
                        </Grid>
                    </footer>
                </div>
                { alertMessage && <Alert bsStyle="info">
                        <p>{ alertMessage }</p>
                    </Alert> }
            </div>
        )
    }
}

export default App
