import React, { Component } from 'react'
import { Button, Col, Grid, Nav, Navbar, NavbarBrand, NavItem, Row } from 'react-bootstrap'
import { Link } from 'react-scroll'
import { Picture } from 'react-responsive-picture'

import EmailForm from './EmailForm'
import PageSection from './PageSection'
import NavScrollItem from './NavScrollItem'
// import Snippet from './Snippet'
import * as Icons from './Icons'
import { Avatar, Profile } from './Profile'
import TimelinePoint from './TimelinePoint'
import { getSrc } from './utils'
import { actionTypes } from './redux'

import './app.css'

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
            ADVISORS: 'advisors',
            JAMES_QUOTE: 'james-quote',
            PARTNERS: 'partners',
            VIGNESH_QUOTE: 'vignesh-quote',
            SUPPORTERS: 'supporters'
        }

//         const snippetCode = `$ curl https://api.keep.network/v1/btc/main/addrs/1Puw/Q6uWXNeGcEnLCAXmRJozdLZ9M4NWQ7
// {
//     "address": "Q6uWXNeGcEnLCAXmRJozdLZ9M4NWQ7",
//     "balance": 0,
//     "unconfirmed_balance": 0,
//     "txrefs": []
// }`

        const WHITEPAPER_URL = 'https://keep.network/whitepaper'

        const { signupSlack, signupMailingList, ajaxRequestStates } = this.props

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
                            <NavItem
                                href={WHITEPAPER_URL}
                                target="_blank">Whitepaper</NavItem>
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
                                <p>A keep is an off-chain container for private data. Keeps help contracts harness the full power of the public blockchain &mdash; enabling deep interactivity with private data.</p>
                            </Col>
                        </Row>
                        <Row className="slack-signup">
                            <Col sm={12} md={2} mdPush={3} className="col-icon">
                                <img alt="Slack Logo" src={Icons.slackGreen} />
                            </Col>
                            <Col sm={12} md={4} mdPush={3}>
                                <EmailForm
                                    label="Slack Email"
                                    btnText="join"
                                    onSubmit={signupSlack}
                                    successMessage="Thanks, you've been added to the waitlist!"
                                    resetOnSuccess={false}
                                    onSuccess={() => {
                                        window.sessionStorage &&
                                            window.sessionStorage.setItem('isSlackWaitlisted', true)
                                    }}
                                    showSuccessMessage={
                                        window.sessionStorage &&
                                            window.sessionStorage.getItem('isSlackWaitlisted') === 'true'}
                                    requestStates={ajaxRequestStates}
                                    request={actionTypes.SIGNUP_SLACK} />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.ABOUT}>
                        <Row>
                            <Col sm={12} md={6} className="mailing-list">
                                <img alt="Email" src={Icons.email} />
                                <h3>Join the Mailing List</h3>
                                <p>Stay informed</p>
                                <EmailForm
                                    label="Email"
                                    btnText="join"
                                    onSubmit={signupMailingList}
                                    requestStates={ajaxRequestStates}
                                    request={actionTypes.SIGNUP_MAILING_LIST} />
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
                                <p>Find out how you can use Keep</p>
                                <Button
                                    href="/KeepBusinessPrimer.pdf"
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
                            <Col sm={12} md={4}>
                                <TimelinePoint label="Public Announcement" date="9/26/17"/>
                            </Col>
                            <Col sm={12} md={4}>
                                <TimelinePoint label="Public Sale" date="February"/>
                            </Col>
                            <Col sm={12} md={4}>
                                <TimelinePoint label="Network Launch" date="March"/>
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
                        </Row>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Lex Sheehan"
                                    title="Developer"
                                    imagePath="/images/headshots/lexSheehan"
                                    imageType="jpg"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/lex_sheehan?lang=en"
                                    linkedin="https://www.linkedin.com/in/lexsheehan/"
                                    github="https://github.com/l3x"
                                    keybase="https://keybase.io/l3x" />
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
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Eliza Petrovska"
                                    title="Community Manager"
                                    imagePath="/images/headshots/elizapetrovska_1"
                                    imageType="png"
                                    imageMaxRes={3}
                                    twitter="https://twitter.com/elizapetrovska"
                                    github="https://github.com/elizapetrovska"
                                    keybase="http://keybase.io/elizapetrovska" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={3}>
                                <Profile
                                    name="Hope Cowan"
                                    title="Support"
                                    imagePath="/images/headshots/hope_cowen"
                                    imageType="png"
                                    imageMaxRes={3}
                                    linkedin="https://www.linkedin.com/in/hopecowan/"
                                    keybase="http://keybase.io/hecowan" />
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
                                    name="James Prestwich"
                                    title="Integral, formerly Storj Labs"
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
                    <PageSection id={sections.JAMES_QUOTE} additionalClassNames={['quote']}>
                        <Row className="left">
                            <Col sm={12} md={9} mdPush={3} className="quote-text">
                                <p>
                                    &#8220;Keep is taking something novel and theoretical like sMPC and pairing it with real world incentive models to solve pressing challenges for the decentralized ecosystem&#8221;
                                    <span>-Storj Founder, James Prestwich</span>
                                </p>
                            </Col>
                            <Col sm={12} md={3} mdPull={9}>
                                <Avatar
                                    imagePath="/images/headshots/jamesPrestwich"
                                    imageMaxRes={3} />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.PARTNERS} convex>
                        <h2>Our Partners</h2>
                        <Row>
                            <Col sm={12} md={4} mdPush={1}>
                                <a href="https://lendroid.com/" target="_blank">
                                    <Picture src={getSrc('/images/logos/lendroidLogo', 'jpg', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4} mdPush={3}>
                                <a href="https://district0x.io/" target="_blank">
                                    <Picture src={getSrc('/images/logos/district0x_logo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.VIGNESH_QUOTE} additionalClassNames={['quote']}>
                        <Row className="right">
                            <Col sm={12} md={9} className="quote-text">
                                <p>
                                    &#8220;Keep fits a key requirement of our protocol like a glove. The smart contract acts &#8216;human&#8217;, one with notary powers, who signs the offer off-chain. Gas cost is thus saved, transaction turnaround time is reduced, and overall efficiency is increased. Also for Lendroid, integrating with Keep is a nice experience of its compatibility with other protocols in the ecosystem.&#8221;
                                    <span>-Lendroid Founder, Vignesh Sundaresan</span>
                                </p>
                            </Col>
                            <Col sm={12} md={3}>
                                <Avatar
                                    imagePath="/images/headshots/vigneshSundaresan"
                                    imageMaxRes={3} />
                            </Col>
                        </Row>
                    </PageSection>
                    <PageSection id={sections.SUPPORTERS} convex>
                        <h2>Our Supporters</h2>
                        <Row>
                            <Col sm={12} md={4}>
                                <a href="http://polychain.capital/" target="_blank">
                                    <Picture src={getSrc('/images/logos/polychainLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4}>
                                <a href="http://www.dhvc.com/" target="_blank">
                                    <Picture src={getSrc('/images/logos/DHVCLogo', 'png', 3)} />
                                </a>
                            </Col>
                            <Col sm={12} md={4}>
                                <a href="https://www.distributedcapital.io/" target="_blank">
                                    <Picture src={getSrc('/images/logos/distributedCapPartnersLogo', 'png', 3)} />
                                </a>
                            </Col>
                        </Row>
                    </PageSection>
                    <footer>
                        <Grid>
                            <span>&#169; 2018 Keep. All Rights Reserved.</span>
                            <div className="social-footer">
                                <a href="https://twitter.com/keep_project" target="_blank">
                                    <Icons.Twitter color="#91ABA5" />
                                </a>
                                <a href="https://www.reddit.com/r/KeepNetwork/" target="_blank">
                                    <Icons.Reddit/>
                                </a>
                            </div>
                        </Grid>
                    </footer>
                </div>
            </div>
        )
    }
}

export default App
