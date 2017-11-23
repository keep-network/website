import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createSession } from './session';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<App />, document.getElementById('root'));

    createSession();
});
