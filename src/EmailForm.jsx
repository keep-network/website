import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, ControlLabel, Form, FormGroup,
    FormControl } from 'react-bootstrap'
import isEmail from 'validator/lib/isEmail'
import pascalCase from 'pascal-case'
import classNames from 'classnames'
import merge from 'lodash/merge'

import { ArrowRight } from './Icons'


const ERRORS = {
    INVALID_EMAIL: `Oops! That doesn't look like an email address!`,
    SERVER: `Sorry, your request cannot be completed at this time.`
}

const RESET_DELAY = 3000 // 3 seconds


class EmailForm extends Component {
    constructor(props) {
        super(props)

        this.state = this.getInitialState()
    }

    getInitialState() {
        return {
            email: '',
            hasError: false,
            requestSent: false,
            requestSuccess: false,
            errorMsg: ERRORS.INVALID_EMAIL,
        }
    }

    componentWillReceiveProps(nextProps) {
        const { requestStates, request } = nextProps

        if (requestStates.currentRequest === request) {
            if (requestStates[request].error) {
                this.setState({
                    hasError: true,
                    requestSent: false,
                    errorMsg: ERRORS.SERVER
                })
            } else {
                this.onRequestSuccess()
            }
        }
    }

    onChange(e) {
        this.setState(
            merge({}, this.getInitialState(), { email: e.target.value })
        )
    }

    onRequestSuccess() {
        const { resetOnSuccess, onSuccess } = this.props

        this.setState({
            hasError: false,
            requestSent: true,
            requestSuccess: true
        })

        onSuccess()

        if (resetOnSuccess) {
            window.setTimeout(() => {
                this.setState(this.getInitialState())
            }, RESET_DELAY)
        }
    }

    onClick(e) {
        this.submit()
    }

    onKeyUp(e) {
        if (e.keyCode === 13) {
            this.submit()
        }
    }

    submit() {
        const { email } = this.state
        const { onSubmit } = this.props

        if (!isEmail(email)) {
            this.setState({
                hasError: true,
                requestSent: false,
                errorMsg: ERRORS.INVALID_EMAIL
            })
        } else {
            this.setState({
                requestSent: true
            })
            onSubmit({ email })
        }
    }

    render() {
        const { label,
                successMessage,
                showSuccessMessage } = this.props
        const { email,
                hasError,
                requestSent,
                errorMsg,
                requestSuccess } = this.state

        const classes = {
            'has-error': hasError,
            'request-sent': requestSent || showSuccessMessage,
            'request-success': requestSuccess || showSuccessMessage
        }

        return (
            <div className={classNames('email-form', classes)}>
                <Form inline className={classNames(classes)}
                    onSubmit={(e) => { e.preventDefault() }}>
                    <FormGroup controlId={`formInline${pascalCase(label)}`}>
                        <ControlLabel style={{display: 'none'}}>
                            {label}
                        </ControlLabel>
                        <FormControl
                            type="email"
                            value={email}
                            onChange={this.onChange.bind(this)}
                            onKeyUp={this.onKeyUp.bind(this)}/>
                    </FormGroup>
                    {' '}
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.onClick.bind(this)}>
                        <ArrowRight />
                    </Button>
                </Form>
                { hasError &&
                    <small className="error-message">{errorMsg}</small> }
                { (requestSuccess || showSuccessMessage) &&
                    <div className="success-message">
                        { successMessage || 'Thanks, you\'re signed up!' }
                    </div> }
            </div>
        )
    }
}

EmailForm.propTypes = {
    label: PropTypes.string,
    successMessage: PropTypes.string,
    resetOnSuccess: PropTypes.bool,
    onSuccess: PropTypes.func,
    showSuccessMessage: PropTypes.bool,
    onSubmit: PropTypes.func,
    requestStates: PropTypes.object,
    request: PropTypes.string
}

EmailForm.defaultProps = {
    btnText: 'submit',
    label: 'Email',
    successMessage: '',
    resetOnSuccess: true,
    onSuccess: () => {},
    showSuccessMessage: false,
    onSubmit: () => {},
    requestStates: {},
    request: ''
}

export default EmailForm
