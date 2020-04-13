import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-scroll';


const propTypes = {
    active: PropTypes.bool,
    activeClass: PropTypes.string,
    role: PropTypes.string,
    to: PropTypes.string,
    onClick: PropTypes.func,
    onSelect: PropTypes.func,
    eventKey: PropTypes.any,
    spy: PropTypes.bool,
    smooth: PropTypes.bool,
    duration: PropTypes.number
};

const defaultProps = {
    active: false,
    activeClass: 'active',
    spy: true,
    smooth: true,
    duration: 500
};

// A Scroll Aware NavItem compatible with React Bootstrap's Nav
class NavScrollItem extends React.Component {
    handleClick = (e) => {
        const { eventKey, onSelect, onClick, href, history, to } = this.props

        if (typeof onClick === 'function') {
            onClick()
        }

        if (href) {
            e.stopPropagation()

            history.push(`${href}#${to || ''}`)
        }

        if (onSelect) {
            e.preventDefault();

            onSelect(eventKey, e);
        }
    }

    render() {
        const {
            active,
            onClick,
            className,
            style,
            activeClass,
            hashSpy,
            to,
            spy,
            smooth,
            duration,
            children,
            ...props
        } = this.props;

        delete props.onSelect;
        delete props.eventKey;

        // These are injected down by `<Nav>` for building `<SubNav>`s.
        delete props.activeKey;
        delete props.activeHref;

        if (!props.role) {
            if (props.to === '#') {
                props.role = 'button';
            }
        } else if (props.role === 'tab') {
            props['aria-selected'] = active;
        }

        return (
            <li
                role="presentation"
                className={classNames(className, { active })}
                style={style}>
                <Link
                    activeClass={activeClass}
                    to={to}
                    spy={spy}
                    hashSpy={hashSpy}
                    smooth={smooth}
                    duration={duration}
                    onClick={this.handleClick}>
                    {children}
                </Link>
            </li>
        );
    }
}

NavScrollItem.propTypes = propTypes;
NavScrollItem.defaultProps = defaultProps;

export default NavScrollItem;
