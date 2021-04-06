import React from "react"
import { Container } from "reactstrap"
import PropTypes from "prop-types"
import CollapsibleList from "../../CollapsibleList"
import Link from "../../Link"

export const FooterTemplate = ({
  images = {},
  navCategories = [],
  copyright = "",
  legalLinks = [],
}) => (
  <footer>
    <Container fluid="md">
      <div className="footer-columns">
        <ul className="footer-column-1">
          <li className="keep-logo">Keep</li>
        </ul>
        <div className="footer-categories">
          {navCategories.map((category, i) => (
            <CollapsibleList
              key={`nav-category-${i}`}
              label={category.title}
              className={`footer-column-${i + 2}`}
            >
              <ul>
                {category.items.map((item, j) => (
                  <li key={`nav-category-item-${j}`}>
                    <Link url={item.url}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </CollapsibleList>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div
          className="copyright"
          dangerouslySetInnerHTML={{ __html: copyright }}
        />
        <ul>
          {legalLinks.map((link, i) => (
            <li key={`legal-link-${i}`}>
              <Link url={link.url}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </footer>
)

FooterTemplate.propTypes = {
  images: PropTypes.object,
  navCategories: PropTypes.array,
  copyright: PropTypes.string,
  legalLinks: PropTypes.array,
}

export default FooterTemplate
