import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-scroll'

const PrivacyContent = () => (
  <div className="legal-page privacy-content">
    <div className="container">
      <div className="heading">
        <h1>Privacy Policy</h1>
        <h2>Effective and last modified: January 1, 2020</h2>
        <p>At Keep SECZ, we respect your privacy and are committed to protecting it. This notice covers all personal information collected in the use of this website, as well as any other websites, applications, or connected products on which it is posted. If in any case our privacy practices differ from those explained in this policy, we will let you know you at the time we ask for or collect your information.</p>
        <p>Some pages on our websites may contain links to third-party websites. We do not endorse and have no control over the privacy practices or content of such websites. We recommend you carefully read the privacy policy of each site you visit – including ours.</p>
        <p>If you are a resident of California, please refer to this document:</p>
        <Button
            href="/california-privacy-notice"
            bsStyle="primary"
            bsSize="large"
            rel="noopener noreferrer"
            target="_blank">
            California Privacy Policy
        </Button>
      </div>
      <div className="body">
        <h2>1. Table of Contents</h2>
        <p>We cover a lot of ground in this privacy policy. Use the links below to navigate to later sections of the privacy policy of interest to you.</p>
        <ul className="table-of-contents">
          <li><Link smooth duration={500} offset={-150} to="Controller">The Controller</Link></li>
          <li><Link smooth duration={500} offset={-150} to="WhatInfoWeCollect">What information we collect about you</Link></li>
          <li><Link smooth duration={500} offset={-150} to="ChildrensOnlinePrivacy">Children's Online Privacy</Link></li>
          <li><Link smooth duration={500} offset={-150} to="HowWeCollectInfo">How we collect personal information about you</Link></li>
          <li><Link smooth duration={500} offset={-150} to="CookiesAndAutoDataCollection">Cookies and automatic data collection technologies</Link></li>
          <li><Link smooth duration={500} offset={-150} to="HowWeUseYourInfo">How we use your personal information</Link></li>
          <li><Link smooth duration={500} offset={-150} to="DisclosureOfYourInfo">Disclosure of Your Information</Link></li>
          <li><Link smooth duration={500} offset={-150} to="ThirdPartyContent">Third Party Content</Link></li>
          <li><Link smooth duration={500} offset={-150} to="YourRightsAndChoices">Your Rights and Choices</Link></li>
          <li><Link smooth duration={500} offset={-150} to="DataSecurity">Data Security</Link></li>
          <li><Link smooth duration={500} offset={-150} to="YourCaliforniaPrivacyRights">Your California Privacy Rights</Link></li>
          <li><Link smooth duration={500} offset={-150} to="ChangesToOurPrivacyPolicy">Changes to Our Privacy Policy</Link></li>
          <li><Link smooth duration={500} offset={-150} to="ContactUs">Contact Us</Link></li>
        </ul>
        <h2 id="Controller">2. Controller</h2>
        <p>Keep SECZ (collectively referred to as "COMPANY", "we", "us" or "our") in this privacy policy is the controller and responsible for your personal data. We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact the data privacy manager using the details set forth below.</p>
        <h2 id="WhatInfoWeCollect">3. What information we collect</h2>
        <p>Personal information, or personal data, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data), which we can use for any purpose. Some jurisdictions may consider your Ethereum wallet address to be personal data. We may collect, use, store and transfer different kinds of personal information about you which we have grouped together as follows:</p>
        <ul>
          <li><strong>Identity or Contact Data</strong> includes your email address or similar identifiers or contact information.</li>
          <li><strong>Financial information</strong> may include your Ethereum wallet address.</li>
          <li><strong>Usage Data</strong> includes information about how you use our websites and our products and services.</li>
          <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and your communication preferences.</li>
        </ul>
        <p>We may also collect, use and share Aggregated Data such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific Network feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.</p>
        <p>We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.</p>
        <p>We do not retain information about your transaction history, but you acknowledge that the smart contract transactions facilitated by the Network are recorded in perpetuity on the Ethereum blockchain and cannot be reversed or erased. By using the Network and its smart contracts, you acknowledge that the posting of information concerning your Ethereum wallet address is a function of the smart contract functionality to which you agree.</p>
        <h2 id="ChildrensOnlinePrivacy">4. Children's data</h2>
        <p>We do not direct our websites to minors, and we do not knowingly collect personal information from children under 18. If you are under 18, do not use or provide any information on this website. If we learn we have collected or received personal information from a child under 18 without verification of parental consent, we will delete that information. If you believe we might have any information from or about a child under 18 please contact us using our Contact Us page.</p>
        <h2 id="HowWeCollectInfo">5. How we collect your information</h2>
        <p>We use different methods to collect information from and about you including through:</p>
        <ul>
          <li><strong>Direct interactions.</strong> You may give us information about you by interacting with our smart contracts or by communicating with us e-mail, or otherwise. This includes information you provide when you use our Network, subscribe to one of our newsletters or other communications, join a user group, complete a survey, or when you contact us about one of our products, or services.</li>
          <li><strong>Third parties or publicly available sources.</strong> We may receive information about you from third parties including, for example, our affiliated companies, business partners, sub-contractors, analytics providers, and service providers.</li>
          <li>
            <p><strong>Technical Data from the following parties:</strong></p>
            <ul>
            <li>Analytics providers such as Crowdcast.</li>
            </ul>
          </li>
        </ul>
        <h2 id="CookiesAndAutoDataCollection">6. Cookies and automatic data collection technologies</h2>
        <p>Our websites may use automatic data collection technologies to distinguish you from other website users. This helps us deliver a better and more personalized service when you browse our website. It also allows us to improve our websites by enabling us to:</p>
        <ul>
          <li>Estimate our audience size and usage patterns.</li>
          <li>Store your preferences so we may customize our websites according to your individual interests.</li>
          <li>Recognize you when you return to our website.</li>
        </ul>
        <p>The technologies we use for this automatic data collection may include:</p>
        <ul>
          <li><strong>Cookies (or browser cookies).</strong>A cookie is a small file placed on the hard drive of your computer. For information about managing browser settings to refuse cookies, see <em><a href="#YourCaliforniaPrivacyRights">Your Rights and Choices</a></em>.</li>
        </ul>
        <p>We do not respond to or honor "do not track" (a/k/a DNT) signals or similar mechanisms transmitted by web browsers.</p>
        <h2 id="HowWeUseYourInfo">7. How we use your personal information</h2>
        <p>If you provide personal information through the features on our website, we will only use your personal information as the law allows. Examples the activities for which we may collect information, the type of data we collect, and our lawful basis for collecting that data are listed below.</p>
        <table>
          <thead>
            <tr>
              <th><strong>Purpose/Activity</strong></th>
              <th><strong>Type of data</strong></th>
              <th><strong>Lawful basis for processing including basis of legitimate interest</strong></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>To register you for our newsletter</td>
              <td>(a) Contact</td>
              <td>Performance of a contract with you</td>
            </tr>
            <tr>
              <td>To process your smart contract transactions</td>
              <td>(a) Wallet address<br/>(b) Contact</td>
              <td>(a) Performance of a contract with you<br/>(b) Necessary for our legitimate interests (to collect our fees)</td>
            </tr>
            <tr>
              <td>To manage our relationship with you which will include:<br/>(a) Notifying you about changes to our terms or privacy policy<br/>(b) Asking you to leave a review or take a survey</td>
              <td>(a) Contact<br/>(b) Profile<br/>(c) Marketing and Communications</td>
              <td>(a) Performance of a contract with you<br/>(b) Necessary to comply with a legal obligation<br/>(c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)</td>
            </tr>
            <tr>
              <td>To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</td>
              <td>(a) Contact<br/>(b) Technical</td>
              <td>(a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)<br/>(b) Necessary to comply with a legal obligation</td>
            </tr>
            <tr>
              <td>To use data analytics to improve our website, products/services, marketing,customer relationships and experiences</td>
              <td>(a) Technical<br/>(b) Usage</td>
              <td>Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)</td>
            </tr>
            <tr>
              <td>To make suggestions and recommendations to you about goods or services that may be of interest to you</td>
              <td>(a) Contact<br/>(b) Technical<br/>(c) Usage<br/>(d) Profile<br/>(e) Marketing and Communications</td>
              <td>Necessary for our legitimate interests (to develop our products/services and grow our business)</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>To carry out our obligations and enforce our rights.</li>
          <li>In any other way we may describe when you provide the information.</li>
          <li>For any other purpose with your consent.</li>
        </ul>
        <p>We may use information that is not personal information for any purpose. For example, we may aggregate usage data from many people in a way that does not identify any individuals to calculate the percentage of users accessing a feature on the website.</p>
        <h2 id="DisclosureOfYourInfo">8. Disclosure of Your Information</h2>
        <p>We may share non-personal information without restriction. We may share your personal information with:</p>
        <ul>
          <li>Any member of our corporate group, which means our subsidiaries, affiliates, our ultimate holding company and its subsidiaries, and affiliates.</li>
          <li>To contractors, service providers, and other third parties we use to support our business.</li>
          <li>If we offer a co-branded promotion, to our co-sponsor.</li>
          <li>To fulfill the purpose for which you provide it.</li>
          <li>For any other purposes that we disclose when you provide the information.</li>
          <li>With your consent.</li>
        </ul>
        <p>We may also disclose your personal information:</p>
        <ul>
          <li>To comply with any court order, law, or legal process, including responding to any government or regulatory request.</li>
          <li>To enforce Terms of Use and other agreements including for billing and collections purposes.</li>
          <li>To protect the rights, property, or safety of our business, our employees, our customers, or others. This includes exchanging information with other companies and organizations for the purposes of cybersecurity, fraud protection and credit risk reduction.</li>
          <li>To investigate suspected violations of any law, rule or regulation, or the terms or policies for our website.</li>
        </ul>
        <h2 id="ThirdPartyContent">9. Third Party Links</h2>
        <p>Some content or applications on our websites may be served by third parties, content providers and application providers including the following:</p>
        <ol>
          <li><strong>Plugins.</strong> Our website may make available the option for you to use "plugins" that are operated by social media companies. If you choose to use one of these plugins, then it may collect information about you and send it back to the social media company that owns it. This may happen even if you do not click on the plugin, if you are logged into the social media website that owns the plugin when you visit our website. Information collected by a plugin is subject to the privacy policy and terms of the social media company that makes it. If you do not want the social media company who owns a plugin to collect information about you when you visit our websites, sign out of the social media network before visiting. By interacting with a plugin when you are on our websites (for example, clicking the Facebook "Like" button), you are intentionally transferring information to that social media company. Further, if you are logged into a social media website when you visit our websites, then you are directing us to share your data with the social media company that owns the plugin.</li>
          <li><strong>User Content.</strong> Our websites may allow you to upload your own content to public areas of the website. Any information you submit becomes public information, and we do not control how others may use the content you submit. We are not responsible for uses that may violate our privacy policy, the law, or your intellectual property rights.</li>
          <li><strong>Third-party links.</strong> Our websites may contain links to other sites, which we do not control. Those websites have their own privacy policies and terms, and we encourage you to read those terms before interacting with third-party sites.</li>
        </ol>
        <h2 id="YourRightsAndChoices">10. Your Rights and Choices</h2>
        <p>Your rights may vary depending on where you are located. We have created mechanisms to provide you with the following control over your information.</p>
        <ul>
          <li><strong>Marketing</strong>. If you do not want us to use your email address or other contact information to promote or recommend our own products and services, or third parties' products or services, you can opt-out by checking the relevant box located on the form where we collect your contact information or, if presented with the option to opt-in, do not opt-in. You may also opt-out of further marketing communications by replying to any promotional email we have sent you or following the opt-out links on that message.</li>
          <li><strong>Accessing, Updating and Deleting Your Information.</strong> You can contact us as set forth in the <em><a href="#ContactUs">Contact Us</a></em> section below to request access to, correction of, or deletion of personal information that you have provided to us. We may not accommodate a request to change information if we believe the change would violate any law or legal requirement or negatively affect the information's accuracy. We cannot delete personal information, if any, that has been posted to the Ethereum blockchain through your use of a smart contract on our Network.</li>
          <li><strong>Cookies and Automatic Data Collection Technologies</strong>. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. However, if you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</li>
          <li><strong>California Residents</strong>. If you are a California resident, you may have additional personal rights and choices with regard to your personal information. Please see <em><a href="#YourCAPrivacyRights">Your California Privacy Rights</a></em> for more information. California's "Shine the Light" law (Civil Code Section § 1798.83) permits users of our website that are California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes. At this time, we do not engage in this type of disclosure.</li>
          <li>
            <p><strong>EU Residents.</strong> If you are a resident of the European Union, you have the right to:</p>
            <ul>
              <li>request access to your personal data, commonly known as a "data subject access request", which allows you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.</li>
              <li>Request a correction of the personal data that we hold about you. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us. You acknowledge we cannot correct data that has been posted to a public blockchain.</li>
              <li>Request erasure of your personal data. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request. We cannot delete personal data that has been posted to a public blockchain.</li>
              <li>Object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.</li>
              <li>Request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:</li>
              <li>If you want us to establish the data's accuracy.</li>
              <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims.</li>
              <li>You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
              <li>Request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</li>
              <li>Withdraw consent at any time where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent. You acknowledge you cannot withdraw consent from participating in a smart contract that has already been executed.</li>
            </ul>
          </li>
        </ul>
        <h2 id="DataSecurity">11. Data Security</h2>
        <p>The security of your personal information is very important to us. We use physical, electronic, and administrative safeguards designed to protect your personal information from loss, misuse and unauthorized access, use, alteration or disclosure. We will only retain your personal information for as long as reasonably necessary to fulfil the purpose of collecting it.</p>
        <p>The safety and security of your information also depends on you. You are responsible for keeping your wallet address and your personal information confidential. We ask you not to share your wallet's private key with anyone. We urge you to take care when providing information to social media accounts or message boards, which any website visitor can view.</p>
        <h2 id="YourCaliforniaPrivacyRights">12. Your California Privacy Rights</h2>
        <p>If you are a California resident, California law may provide you with additional rights regarding our use of your personal information. To learn more about your California privacy rights, you can view our <a href="/california-privacy-notice">Privacy Notice for California Residents</a>.</p>
        <h2 id="ChangesToOurPrivacyPolicy">13. Changes to Our Privacy Policy</h2>
        <p>We will post any changes we may make to our privacy policy on this page. If the changes materially alter how we use or treat your information we will notify you through a notice on the website home page. The date the privacy policy was last revised is identified at the top of the page.</p>
        <h2 id="ContactUs">14. Contact Us</h2>
        <p>If you have any comments or questions about our privacy policy, please contact our data privacy manager at <a href="mailto:legal@keep.network">legal@keep.network</a>.</p>
      </div>
    </div>
  </div>
)

export default PrivacyContent