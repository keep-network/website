import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const TimelinePoint = ({ label, date, highlight }) => (
    <div className={classNames('timeline-point', {'highlight': highlight})}>
        <div className="timeline-content">
            <h4 className="timeline-label">{label}</h4>
            <div className="dot"></div>
            <div className="date">{date()}</div>
        </div>
    </div>
);

TimelinePoint.propTypes = {
    label: PropTypes.string,
    date: PropTypes.func,
    highlight: PropTypes.bool
};

TimelinePoint.defaultProps = {
    label: 'Point in Time',
    date: () => 'TBD',
    highlight: false
};

export default TimelinePoint;
