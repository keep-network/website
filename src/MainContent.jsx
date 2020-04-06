import React, { Component } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Picture } from 'react-responsive-picture'
import { scroller } from 'react-scroll'
import { withRouter } from "react-router";

import EmailForm from './EmailForm'
import PageSection from './PageSection'
import { Profile } from './Profile'
import { getSrc } from './utils'
import { actionTypes } from './redux'
import * as Icons from './Icons'
import { sections, WHITEPAPER_URL } from './shared'

class MainContent extends Component {
    componentDidMount() {
        const { location } = this.props
        const hash = location.hash && location.hash.slice(1)

        if (hash) {
            setTimeout(() => {
                scroller.scrollTo(hash, {
                    active: false,
                    activeClass: 'active',
                    spy: true,
                    smooth: true,
                    duration: 500
                })
            }, 100)
        }
    }

    render() {
        const { signupMailingList, ajaxRequestStates } = this.props

        return (
            <div className="main-content">
                <PageSection id={sections.HOME}>
                    <Row>
                        <Col xs={7}>
                            <h1>A privacy layer for Ethereum</h1>
                            <p>A keep is an off-chain container for private data. Keeps help contracts harness the full power of the public blockchain &mdash; enabling deep interactivity with private data.</p>
                        </Col>
                        <Col xs={5} className="col-circles">
                            <Picture src={getSrc('/images/texture-circle', 'png', 3)} />
                        </Col>
                    </Row>
                </PageSection>
                <PageSection id={sections.DISCORD}>
                    <Row className="discord-signup">
                        <Col xs={7}>
                            <EmailForm
                                label="Discord Email"
                                placeholder="you@example.com"
                                onSubmit={signupMailingList}
                                requestStates={ajaxRequestStates}
                                request={actionTypes.SIGNUP_MAILING_LIST}>
                                <h3>
                                    Join our community on
                                    <span className="discord-logo">Discord</span>
                                </h3>
                            </EmailForm>
                        </Col>
                        <Col xs={5} className="col-circles">
                            <div>
                                <Picture src={getSrc('/images/texture-circle-2', 'png', 3)} />
                            </div>
                        </Col>
                    </Row>
                </PageSection>
                <PageSection id={sections.GITHUB}>
                    <Row>
                        <Col xs={12} md={12}>
                            <h3>
                                View the
                                <a
                                    className="github-logo"
                                    href="https://github.com/keep-network"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    GitHub
                                </a>
                                Repository
                                <Button
                                    href="https://github.com/keep-network"
                                    bsStyle="primary"
                                    bsSize="large"
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    <Icons.ArrowRight />
                                </Button>
                            </h3>
                        </Col>
                    </Row>
                </PageSection>
                <PageSection id={sections.MAILING_LIST}>
                    <Row >
                        <Col xs={12} md={8} mdPush={2}>
                            <EmailForm
                                label="Email"
                                placeholder="you@example.com"
                                onSubmit={signupMailingList}
                                requestStates={ajaxRequestStates}
                                request={actionTypes.SIGNUP_MAILING_LIST}>
                                    <h3>
                                        Join our mailing list
                                    </h3>
                            </EmailForm>
                        </Col>
                    </Row>
                </PageSection>
                <PageSection id={sections.LEARN}>
                    <div className="col">
                        <h2 className="h1">
                            Find out how to use Keep
                        </h2>
                    </div>
                    <div className="col">
                        <div>
                            <Icons.Book />
                            <h4>Whitepaper</h4>
                            <Button
                                href={WHITEPAPER_URL}
                                bsStyle="primary"
                                download="Keep Whitepaper"
                                rel="noopener noreferrer"
                                target="_blank"
                                bsSize="large">
                                Download
                            </Button>
                        </div>
                        <div>
                            <Icons.Strategy />
                            <h4>Business Primer</h4>
                            <Button
                                href="/KeepBusinessPrimer.pdf"
                                bsStyle="primary"
                                download="Keep Business Primer"
                                rel="noopener noreferrer"
                                target="_blank"
                                bsSize="large">
                                Download
                            </Button>
                        </div>
                    </div>
                </PageSection>
                <PageSection id={sections.DEFINITION} additionalClassNames={['blurb', 'blurb-desktop']}>
                    <div className="blurb-panel">
                        <div className="blurb-icon">
                            <Icons.CastleGate />
                        </div>
                        <div className="blurb-text">
                            <p>Keep: <span>(n.)</span></p>
                            <p>The strongest or central tower of a castle, acting as a final refuge</p>
                        </div>
                    </div>
                </PageSection>
                <PageSection id={sections.USES}>
                    <h2 className="h1">Keep Applications</h2>
                    <div className="use-case">
                        <Icons.Signing />
                        <h4>Decentralized Signing</h4>
                    </div>
                    <div className="use-case">
                        <Icons.Switch />
                        <h4>Dead Man Switch</h4>
                    </div>
                    <div className="use-case">
                        <Icons.Wallet />
                        <h4>Custodial Wallets</h4>
                    </div>
                    <div className="use-case">
                        <Icons.Cart />
                        <h4>Marketplaces for Digital Goods</h4>
                    </div>
                    <div className="use-case">
                        <Icons.BlockchainStorage />
                        <h4>Blockchain Storage Encryption</h4>
                    </div>
                    <div className="use-case">
                        <a href={WHITEPAPER_URL}
                            download="Keep Whitepaper"
                            rel="noopener noreferrer"
                            target="_blank">
                            <Icons.Book color="#48dbb4" />
                            <h4>Learn More in the Whitepaper</h4>
                        </a>
                    </div>
                    <div className="blurb-panel blurb-mobile">
                        <div className="blurb-icon">
                            <Icons.CastleGate />
                        </div>
                        <div className="blurb-text">
                            <p>Keep: <span>(n.)</span></p>
                            <p>The strongest or central tower of a castle, acting as a final refuge</p>
                        </div>
                    </div>
                    <div className="blurb-panel blurb-mobile">
                        <div className="blurb-icon">
                            <Icons.Axe />
                        </div>
                        <div className="blurb-text">
                            <p>Keeps provide a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                        </div>
                    </div>
                </PageSection>
                <PageSection id={sections.TEAM} collapsible>
                    <h2>Our Team</h2>
                    <Profile
                        name="Matt Luongo"
                        title="Project Lead"
                        imagePath="/images/headshots/matt"
                        imageMaxRes={3}
                        twitter="https://twitter.com/mhluongo"
                        linkedin="https://www.linkedin.com/in/mattluongo"
                        github="https://github.com/mhluongo"
                        keybase="http://keybase.io/mhluongo" />
                    <Profile
                        name="Corbin Pon"
                        title="Developer & Ops"
                        imagePath="/images/headshots/corbin"
                        imageMaxRes={3}
                        twitter="https://twitter.com/CorbinPon"
                        linkedin="https://www.linkedin.com/in/corbinpon"
                        github="https://github.com/clp16"
                        keybase="http://keybase.io/corbinpon"/>
                    <Profile
                        name="Antonio Salazar Cardozo"
                        title="Head of Engineering"
                        imagePath="/images/headshots/antonio"
                        imageType="png"
                        imageMaxRes={3}
                        twitter="https://twitter.com/lightfiend"
                        linkedin="https://www.linkedin.com/in/lightfiend"
                        github="https://github.com/Shadowfiend"
                        keybase="http://keybase.io/shadowfiend" />
                    <Profile
                        name="Carolyn Reckhow"
                        title="Head of Business Strategy"
                        imagePath="/images/headshots/carolyn"
                        imageType="jpg"
                        imageMaxRes={2}
                        twitter="https://twitter.com/CReckhow"
                        linkedin="https://www.linkedin.com/in/carolyn-reckhow-73345a1a"
                        github="https://github.com/creckhow"
                        keybase="http://keybase.io/carolynreckhow" />
                    <Profile
                        name="Michael Gluzman"
                        title="Head of Design"
                        imagePath="/images/headshots/michael"
                        imageType="png"
                        imageMaxRes={3}
                        twitter="https://twitter.com/gluzman"
                        linkedin="https://www.linkedin.com/in/michaelgluzman/"
                        github="https://github.com/gluzman"
                        keybase="http://keybase.io/gluzzz" />
                    <Profile
                        name="Piotr Dyraga"
                        title="Tech Lead"
                        imagePath="/images/headshots/piotr"
                        imageMaxRes={3}
                        imageType="jpg"
                        twitter="https://twitter.com/piotrdyraga?lang=en"
                        linkedin="https://www.linkedin.com/in/piotrdyraga/"
                        github="https://github.com/pdyraga" />
                    <Profile
                        name="Promethea Raschke"
                        title="Protocol Designer"
                        imagePath="/images/headshots/promethea"
                        imageType="png"
                        imageMaxRes={3}
                        github="https://github.com/eth-r" />
                    <Profile
                        name="Sloan Thompson"
                        title="Head of DevOps"
                        imagePath="/images/headshots/sloanThompson"
                        imageType="jpg"
                        imageMaxRes={3}
                        twitter="https://twitter.com/SloanThompson"
                        linkedin="https://www.linkedin.com/in/sloansthompson/"
                        github="https://github.com/sthompson22"
                        keybase="http://keybase.io/fekta" />
                    <Profile
                        name="Nik Grinkevich"
                        title="Developer"
                        imagePath="/images/headshots/nik"
                        imageMaxRes={3}
                        twitter="https://twitter.com/ngrinkevich"
                        linkedin="https://www.linkedin.com/in/nikgrinkevich"
                        github="https://github.com/ngrinkevich"
                        keybase="https://keybase.io/nikgrinkevich" />
                    <Profile
                        name="Jakub Nowakowski"
                        title="Developer"
                        imagePath="/images/headshots/jakub"
                        imageMaxRes={3}
                        imageType="jpg"
                        twitter="https://twitter.com/jnowakow8"
                        linkedin="https://www.linkedin.com/in/jnowakowski8/"
                        github="https://github.com/nkuba" />
                    <Profile
                        name="Nicholas Evans"
                        title="Developer"
                        imagePath="/images/headshots/nicholas"
                        imageType="png"
                        imageMaxRes={3}
                        twitter="https://twitter.com/NicholasEvans14"
                        github="https://github.com/NicholasDotSol"
                        keybase="http://keybase.io/evansnicholaskb" />
                    <Profile
                        name="Dmitry Paremski"
                        title="Developer"
                        imagePath="/images/headshots/dmitryParemski"
                        imageType="jpg"
                        imageMaxRes={3}
                        twitter="https://twitter.com/dmitry_paremski"
                        linkedin="https://www.linkedin.com/in/paremski/"
                        github="https://github.com/dimpar"
                        keybase="http://keybase.io/dparemski" />
                    <Profile
                        name="Liam Zebedee"
                        title="Developer"
                        imagePath="/images/headshots/liamZebedee"
                        imageMaxRes={3}
                        twitter="https://twitter.com/liamzebedee"
                        linkedin="https://www.linkedin.com/in/liamedwardsplayne/"
                        github="https://github.com/liamzebedee"
                        keybase="https://keybase.io/liamzebedee" />
                    <Profile
                        name="Erin Ng"
                        title="Developer"
                        imagePath="/images/headshots/erin"
                        imageMaxRes={3}
                        linkedin="https://www.linkedin.com/in/erinng/"
                        github="https://github.com/ironng"
                        keybase="http://keybase.io/ironng" />
                    <Profile
                        name="Laura Wallendal"
                        title="General Manager"
                        imagePath="/images/headshots/laura"
                        imageMaxRes={3}
                        twitter="https://twitter.com/LauraWallendal"
                        linkedin="https://www.linkedin.com/in/laurawallendal"
                        keybase="http://keybase.io/lwallendal" />
                </PageSection>
                <PageSection id={sections.DESCRIPTION} additionalClassNames={['blurb', 'blurb-desktop']}>
                    <div className="blurb-panel">
                        <div className="blurb-icon">
                            <Icons.Axe />
                        </div>
                        <div className="blurb-text">
                            <p>Keeps provide a bridge between the world of public blockchains and private data. It enables a new wave of ground-up innovation for blockchain developers.</p>
                        </div>
                    </div>
                </PageSection>
                <PageSection id={sections.ADVISORS} collapsible>
                    <h2>Our Advisors</h2>
                    <Profile
                        name="Brayton Williams"
                        title="Boost VC"
                        imagePath="/images/headshots/brayton"
                        imageMaxRes={3}
                        twitter="https://twitter.com/BraytonKey"
                        linkedin="https://www.linkedin.com/in/braytonwilliams" />
                    <Profile
                        name="John Packel"
                        title="Hard Core Decentralization Developer"
                        imagePath="/images/headshots/john"
                        imageMaxRes={3}
                        twitter="https://twitter.com/jpackel"
                        linkedin="https://www.linkedin.com/in/johnpackel" />
                    <Profile
                        name="James Prestwich"
                        title="Summa, formerly Storj Labs"
                        imagePath="/images/headshots/jamesPrestwich"
                        imageMaxRes={3}
                        linkedin="https://www.linkedin.com/in/prestwich" />
                    <Profile
                        name="Axel Blikstad"
                        title="International Finance"
                        imagePath="/images/headshots/axel"
                        imageMaxRes={3}
                        linkedin="https://www.linkedin.com/in/axel-blikstad-77534814" />
                    <Profile
                        name="Joseph Urgo"
                        title="district0x"
                        imagePath="/images/headshots/josephUrgo"
                        imageMaxRes={3}
                        twitter="https://twitter.com/jfurgo?lang=en"
                        linkedin="https://www.linkedin.com/in/joseph-urgo-a8b77983/" />
                    <Profile
                        name="Luis Cuende"
                        title="Aragon"
                        imagePath="/images/headshots/luisCuende"
                        imageMaxRes={3}
                        twitter="https://twitter.com/licuende?lang=en"
                        linkedin="https://www.linkedin.com/in/luisivancuende/" />
                </PageSection>
                <PageSection id={sections.PARTNERS} convex>
                    <h2>Our Partners</h2>
                    <Row>
                        <Col xs={12} sm={4} smPush={1}>
                            <a href="https://www.lendroid.com/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/lendroidLogo', 'png', 3)} />
                            </a>
                        </Col>
                        <Col xs={12} sm={4} smPush={3}>
                            <a href="https://district0x.io/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/district0x_logo', 'png', 3)} />
                            </a>
                        </Col>
                    </Row>
                </PageSection>
                <PageSection id={sections.SUPPORTERS} convex>
                    <h2>Our Supporters</h2>
                    <Row>
                        <Col xs={12} sm={4}>
                            <a href="http://polychain.capital/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/polychainLogo', 'png', 3)} />
                            </a>
                        </Col>
                        <Col xs={12} sm={4}>

                            <a href="https://a16z.com/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/andreessenHorowitzLogo', 'png', 3)} />
                            </a>
                        </Col>
                        <Col xs={12} sm={4}>
                            <a href="http://www.dhvc.com/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/DHVCLogo', 'png', 3)} />
                            </a>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} sm={4}>
                            <a href="http://www.draper.vc/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/draperAssociatesLogo', 'png', 3)} />
                            </a>
                        </Col>
                        <Col xs={12} sm={4}>
                            <a href="https://www.distributedcapital.io/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/distributedCapitalPartnersLogo', 'png', 3)} />
                            </a>
                        </Col>
                        <Col xs={12} sm={4}>
                            <a href="https://www.fabric.vc/" rel="noopener noreferrer" target="_blank">
                                <Picture src={getSrc('/images/logos/fabricVenturesLogo', 'png', 3)} />
                            </a>
                        </Col>
                    </Row>
                </PageSection>
            </div>
        )
    }
}

export default withRouter(MainContent)
