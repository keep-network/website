import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Grid } from 'react-bootstrap'

import { ArrowRight } from './Icons'

class PageSection extends Component {
    state = {
        isCollapsed: this.props.collapsible ? true : false
    }

    toggleCollapse = () => {
        this.setState(prevState => ({
            isCollapsed: !prevState.isCollapsed
        }))
    }

    render() {
        const { id, additionalClassNames, children, collapsible } = this.props
        const { isCollapsed } = this.state

        const classes = classNames('page-section',
            { collapsed: isCollapsed }, id, additionalClassNames)

        return (
            <section className={classes} id={id}>
                <div className="page-section-content">
                    <Grid>
                        { children }
                        {
                            collapsible ? (
                                <h4 className="see-all"
                                    onClick={this.toggleCollapse}>
                                    See all <ArrowRight />
                                </h4>
                            ) : ''
                        }
                    </Grid>
                </div>
            </section>
        )
    }
}

PageSection.propTypes = {
    id: PropTypes.string,
    additionalClassNames: PropTypes.array,
    collapsible: PropTypes.bool
};

PageSection.defaultProps = {
    id: '',
    additionalClassNames: [],
    collapsible: false
};

export default PageSection;
