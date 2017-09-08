import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'react-bootstrap';


const PageSection = ({ id, additionalClassNames, children }) => <section
    className={classNames('page-section', id, additionalClassNames)} id={id}>
    <div className="page-section-content">
        <Grid>
            { children }
        </Grid>
    </div>
</section>;

PageSection.propTypes = {
    id: PropTypes.string,
    additionalClassNames: PropTypes.array
};

PageSection.defaultTypes = {
    id: '',
    additionalClassNames: []
};

export default PageSection;
