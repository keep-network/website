import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from 'react-responsive-picture';

import { GithubSocial, Keybase, LinkedIn, Twitter } from './Icons';

const getSrc = (imagePath, imageType, imageMaxRes) => {
    const srcset = [];
    let count = imageMaxRes;

    while (count) {
        let src = '';
        if (count === 1) {
            src = `${imagePath}.${imageType} ${count}x`;
        } else {
            src = `${imagePath}@${count}x.${imageType} ${count}x`;
        }
        srcset.push(src);
        count--;
    }

    return srcset.join(', ');
};

export const Avatar = ({ imagePath, imageType, imageMaxRes }) => <div
    className="avatar">
    <Picture src={getSrc(imagePath, imageType, imageMaxRes)} />
</div>;

Avatar.propTypes = {
    imagePath: PropTypes.string,
    imageType: PropTypes.string,
    imageMaxRes: PropTypes.number
};

Avatar.defaultProps = {
    imagePath: '/images/headshots/placeholder',
    imageType: 'jpg',
    imageMaxRes: 1
};

export const Profile = ({
    name,
    imagePath,
    imageType,
    imageMaxRes,
    title,
    twitter,
    linkedin,
    github,
    keybase
}) => <div className="profile">
    <Avatar
        imagePath={imagePath}
        imageType={imageType}
        imageMaxRes={imageMaxRes} />
    <h4><span>{name}</span>{title && title}</h4>
    <div className="social-links">
        { twitter &&
            <a href={twitter} target="_blank"><Twitter/></a>}
        { linkedin &&
            <a href={linkedin} target="_blank"><LinkedIn/></a>}
        { github &&
            <a href={github} target="_blank"><GithubSocial/></a>}
        { keybase &&
            <a href={keybase} target="_blank"><Keybase/></a>}
    </div>
</div>;

Profile.propTypes = {
    name: PropTypes.string,
    imagePath: PropTypes.string,
    imageType: PropTypes.string,
    imageMaxRes: PropTypes.number,
    title: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string,
    github: PropTypes.string
};

Profile.defaultProps = {
    name: 'Unnamed Contributor',
    imagePath: '/images/headshots/placeholder',
    imageType: 'jpg',
    imageMaxRes: 1
};

export const ExampleProfile = (props) => <Profile {...props} />;

ExampleProfile.defaultProps = {
    name: 'Matt Luongo',
    title: 'Project Lead',
    imagePath: '/images/headshots/matt',
    imageType: 'jpg',
    imageMaxRes: 3,
    twitter: 'https://twitter.com/mhluongo',
    linkedin: 'https://www.linkedin.com/in/mattluongo',
    github: 'https://github.com/mhluongo',
    keybase: 'http://keybase.io/mhluongo'
};

export default Profile;
