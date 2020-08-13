import React from "react"
import PropTypes from "prop-types"
import { Link as ScrollLink } from "react-scroll"
import { Link, withPrefix } from "gatsby"
import { useLocation } from "@reach/router"

const propTypes = {
  active: PropTypes.bool,
  activeClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  hashSpy: PropTypes.bool,
  href: PropTypes.string,
  role: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
  eventKey: PropTypes.any,
  style: PropTypes.object,
  spy: PropTypes.bool,
  smooth: PropTypes.bool,
  duration: PropTypes.number,
  element: PropTypes.string,
}

const defaultProps = {
  active: false,
  activeClass: "active",
  spy: true,
  smooth: true,
  duration: 500,
  element: "li",
}

// A Scroll Aware NavItem compatible
const NavScrollItem = ({
  active,
  className,
  style,
  activeClass,
  href,
  hashSpy,
  onClick,
  to,
  spy,
  smooth,
  duration,
  children,
  element: Element,
}) => {
  const location = useLocation()
  const root = withPrefix("/")

  const handleClick = (e) => {
    if (typeof onClick === "function") {
      onClick()
    }

    if (href) {
      e.stopPropagation()

      window.history.pushState({}, "", withPrefix(`/${href}#${to || ""}`))
    }
  }

  return (
    <Element role="presentation" className={className} style={style}>
      {location.pathname === root ? (
        <ScrollLink
          className="scroll-link"
          activeClass={activeClass}
          href={href}
          to={to}
          spy={spy}
          hashSpy={hashSpy}
          smooth={smooth}
          duration={duration}
          onClick={handleClick}
        >
          {children}
        </ScrollLink>
      ) : (
        <Link activeClassName={activeClass} to={`/#${to}`}>
          {children}
        </Link>
      )}
    </Element>
  )
}

NavScrollItem.propTypes = propTypes
NavScrollItem.defaultProps = defaultProps

export default NavScrollItem
