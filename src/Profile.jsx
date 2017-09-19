import React from 'react';
import PropTypes from 'prop-types';

import { LinkedIn, Twitter } from './Icons';


export const Profile = ({ name, image, title, twitter, linkedin }) => <div className="profile">
    <div className="avatar">
        <img src={image} alt={name}/>
    </div>
    <h4><span>{name}</span>{title && title}</h4>
    <div className="social-links">
        { twitter &&
            <a href={twitter}><Twitter/></a>}
        { linkedin &&
            <a href={linkedin}><LinkedIn/></a>}
    </div>
</div>;

Profile.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string
};

Profile.defaultProps = {
    name: 'Unnamed Contributor',
    image: 'http://via.placeholder.com/260x260'
};

export const ExampleProfile = (props) => <Profile {...props} />;

ExampleProfile.defaultProps = {
    name: 'Matt Luongo',
    image: 'http://via.placeholder.com/260x260',
    twitter: 'https://twitter.com/mhluongo',
    linkedin: 'https://www.linkedin.com/in/mattluongo'
};

export default Profile;
