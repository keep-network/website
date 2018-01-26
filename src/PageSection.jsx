import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'react-bootstrap';


const PageSection = ({ id, additionalClassNames, children, convex }) => <section
    className={classNames('page-section', { convex: convex }, id, additionalClassNames)} id={id}>
    <div className="page-section-content">
        <Grid>
            { children }
        </Grid>
    </div>
    {convex && <div className="bg-ellipse"></div>}
</section>;

PageSection.propTypes = {
    id: PropTypes.string,
    additionalClassNames: PropTypes.array,
    convex: PropTypes.bool
};

PageSection.defaultProps = {
    id: '',
    additionalClassNames: [],
    convex: false
};

export default PageSection;
