import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Grid } from 'react-bootstrap';


const PageSection = ({ id, children }) => <section
    className={classNames('page-section', id)} id={id}>
    <div className="page-section-content">
        <Grid>
            { children }
        </Grid>
    </div>
</section>;

PageSection.propTypes = {
    id: PropTypes.string
};

export default PageSection;
