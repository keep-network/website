import React from 'react';
import PropTypes from 'prop-types';

import agreement from './images/agreement.svg';
import bank from './images/bank.svg';
import castle from './images/castleIcon.svg';
import fingerprint from './images/fingerprint.svg';
import github from './images/GitHub_Logo.svg';
import keyCircle from './images/key-circle.svg';
import moneyShare from './images/money-share.svg';
import networkLock from './images/network-lock.svg';
import paperStudy from './images/paper-study.svg';
import priceTag from './images/price-tag.svg';
import remoteLock from './images/remote-lock.svg';
import safeOpened from './images/safe-opened.svg';
import shop from './images/shop.svg';
import skull from './images/skull.svg';
import slack from './images/slack_monochrome_white.svg';
import sliders from './images/sliders.svg';
import swords from './images/swordsIcon.svg';
import timeline from './images/timeline.svg';
import wallet from './images/wallet.svg';


const LinkedIn = ({ color, height, width }) => (
    <svg height={height} width={width} version="1.1" viewBox="0 0 27 26">
        <defs/>
        <g id="round-3" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g id="Final" fill={color} transform="translate(-288.000000, -3868.000000)">
                <g id="Group-14" transform="translate(-128.000000, 3247.000000)">
                    <path id="Linkedin" d="M416.341563,647 L422.127062,647 L422.127062,629.456973 L416.341563,629.456973 L416.341563,647 Z M419.235065,627.061917 C421.252842,627.061917 422.507746,625.715835 422.507746,624.031716 C422.473139,622.311217 421.252842,621 419.272682,621 C417.292521,621 416,622.311217 416,624.031716 C416,625.715835 417.254904,627.061917 419.195943,627.061917 L419.235065,627.061917 L419.235065,627.061917 Z M425.332033,647 C425.332033,647 425.408772,631.103195 425.332033,629.458489 L431.120542,629.458489 L431.120542,632.000583 L431.08142,632.000583 C431.842789,630.804571 433.213553,629.046175 436.335767,629.046175 C440.14261,629.046175 443,631.551889 443,636.942281 L443,647 L437.211491,647 L437.211491,637.615322 C437.211491,635.256646 436.373384,633.648321 434.278868,633.648321 C432.680896,633.648321 431.728433,634.73216 431.311636,635.781133 C431.155149,636.15555 431.120542,636.680037 431.120542,637.204524 L431.120542,647 L425.332033,647 L425.332033,647 Z"/>
                </g>
            </g>
        </g>
    </svg>
);

LinkedIn.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
};

LinkedIn.defaultProps = {
    color: '#505E5B',
    height: '26px',
    width:'27px'
};

const Twitter = ({ color, height, width }) => (
    <svg height={height} width={width} version="1.1" viewBox="0 0 30 24">
        <defs/>
        <g id="round-3" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g id="Final" fill={color} transform="translate(-246.000000, -3870.000000)">
                <g id="Group-14" transform="translate(-128.000000, 3247.000000)">
                    <path id="Twitter" d="M400.929734,628.977428 C400.940616,629.237582 400.946834,629.499267 400.946834,629.762482 C400.946834,637.769113 394.756555,647 383.436211,647 C379.960203,647 376.725153,645.997641 374,644.279092 C374.481915,644.334184 374.971603,644.36326 375.469064,644.36326 C378.352783,644.36326 381.006426,643.394567 383.112861,641.769368 C380.4188,641.720398 378.146025,639.968182 377.364079,637.56099 C377.738729,637.632915 378.124262,637.671173 378.520676,637.671173 C379.081874,637.671173 379.625972,637.596187 380.142087,637.458458 C377.32677,636.901422 375.206343,634.452911 375.206343,631.517758 L375.206343,631.441242 C376.03648,631.894217 376.984765,632.166614 377.993678,632.19875 C376.34273,631.112223 375.256089,629.257476 375.256089,627.156348 C375.256089,626.045336 375.559229,625.004718 376.089336,624.109482 C379.125402,627.774597 383.660068,630.18791 388.774588,630.440413 C388.670432,629.996621 388.616022,629.534464 388.616022,629.058535 C388.616022,625.713256 391.370712,623 394.770546,623 C396.541196,623 398.140844,623.736084 399.26324,624.91443 C400.665458,624.642033 401.982174,624.138558 403.171417,623.443793 C402.71282,624.857808 401.736553,626.045336 400.464919,626.795192 C401.710125,626.649812 402.896259,626.323854 404,625.841803 C403.174526,627.056877 402.131413,628.12351 400.929734,628.977428"/>
                </g>
            </g>
        </g>
    </svg>
);

Twitter.propTypes = {
    color: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string
};

Twitter.defaultProps = {
    color: '#505E5B',
    height: '24px',
    width:'30px'
};

export {
    agreement,
    bank,
    castle,
    fingerprint,
    github,
    keyCircle,
    LinkedIn,
    moneyShare,
    networkLock,
    paperStudy,
    priceTag,
    remoteLock,
    safeOpened,
    shop,
    skull,
    slack,
    sliders,
    swords,
    timeline,
    Twitter,
    wallet
};
