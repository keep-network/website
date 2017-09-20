import React from 'react';
import PropTypes from 'prop-types';
import { Picture } from 'react-responsive-picture';

import { LinkedIn, Twitter } from './Icons';

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

const Profile = ({ name, imagePath, imageType, imageMaxRes, title, twitter, linkedin }) => <div className="profile">
    <div className="avatar">
        <Picture src={getSrc(imagePath, imageType, imageMaxRes)} />
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
    imagePath: PropTypes.string,
    imageType: PropTypes.string,
    imageMaxRes: PropTypes.number,
    title: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string
};

Profile.defaultProps = {
    name: 'Matt Luongo',
    imageName: 'http://via.placeholder.com/260x260',
    imageType: 'jpg',
    imageMaxRes: 3,
    twitter: 'https://twitter.com/mhluongo',
    linkedin: 'https://www.linkedin.com/in/mattluongo'
};

export default Profile;
