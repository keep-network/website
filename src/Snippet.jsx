import 'prismjs';
import 'prismjs/themes/prism.css';

// Syntax used by the `lang prop` must be imported
import 'prismjs/components/prism-json.min.js'

import React from 'react';
import PropTypes from 'prop-types';
import { PrismCode } from 'react-prism';

const Snippet = ({ component, lang, children }) => (
    <PrismCode component={component} className={'language-' + lang}>
        {children}
    </PrismCode>
);

Snippet.propTypes = {
    component: PropTypes.string,
    lang: PropTypes.string
};

Snippet.defaultProps = {
    component: 'code',
    lang: 'json'
};

export default Snippet;
