import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
import classNames from 'classnames'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainContent from './MainContent'
import NavContent from './NavContent';
import PressContent from './PressContent'
import { routes } from './shared'

import './app.css'

class App extends Component {
    state = {
        alertMessage: `NOTICE: As of ${ new Date().toLocaleDateString() }, we have not announced any token sale or air drop of any kind.`
    }

    render() {
        const { alertMessage } = this.state

        return (
            <Router>
                <div className={classNames('App', {' has-alert': !!alertMessage })}>
                    <NavContent />
                    <Route path={routes.MAIN} exact component={() => <MainContent {...this.props} />} />
                    <Route path={routes.PRESS} component={PressContent} />
                    { alertMessage && <Alert bsStyle="info">
                            <p>{ alertMessage }</p>
                        </Alert> }
                </div>
            </Router>
        )
    }
}

export default App
