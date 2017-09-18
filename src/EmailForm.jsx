import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ControlLabel, Form, FormGroup,
    FormControl } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import pascalCase from 'pascal-case';
import classNames from 'classnames';
import request from 'superagent';
import merge from 'lodash/merge';


const API_URL = 'https://backend.keep.network';

const ERRORS = {
    INVALID_EMAIL: `Oops! That doesn't look like an email address!`,
    SERVER: `Sorry, your request cannot be completed at this time.`
};

const RESET_DELAY = 3000; // 3 seconds


class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            email: '',
            hasError: false,
            requestSent: false,
            requestSuccess: false,
            errorMsg: ERRORS.INVALID_EMAIL,
        };
    }

    onChange(e) {
        this.setState(
            merge({}, this.getInitialState(), { email: e.target.value })
        );
    }

    onRequestSuccess() {
        this.setState({
            hasError: false,
            requestSent: true,
            requestSuccess: true
        });
        window.setTimeout(() => {
            this.setState(this.getInitialState());
        }, RESET_DELAY);
    }

    onClick(e) {
        const { email } = this.state;
        const { url } = this.props;

        if (!isEmail(email)) {
            this.setState({
                hasError: true,
                requestSent: false,
                errorMsg: ERRORS.INVALID_EMAIL
            });
        } else {
            this.setState({
                requestSent: true
            });
            request
                .post(`${API_URL}${url}`)
                .send({ email: email })
                .end((err, res) => {
                    if (err) {
                        this.setState({
                            hasError: true,
                            requestSent: false,
                            errorMsg: ERRORS.SERVER
                        });
                    } else {
                       this.onRequestSuccess();
                    }
                });
        }
    }

    render() {
        const { label, btnText } = this.props;
        const { email,
                hasError,
                requestSent,
                errorMsg,
                requestSuccess } = this.state;

        const classes = {
            'has-error': hasError,
            'request-sent': requestSent,
            'request-success': requestSuccess
        };

        return (
            <div className="email-form">
                <Form inline className={classNames(classes)}>
                    <FormGroup controlId={`formInline${pascalCase(label)}`}>
                        <ControlLabel style={{display: 'none'}}>
                            {label}
                        </ControlLabel>
                        <FormControl
                            type="email"
                            value={email}
                            onChange={this.onChange.bind(this)}/>
                    </FormGroup>
                    {' '}
                    <Button
                        bsStyle="primary"
                        bsSize="large"
                        onClick={this.onClick.bind(this)}>
                        {btnText}
                    </Button>
                </Form>
                { hasError &&
                    <small className="error-message">{errorMsg}</small> }
                { requestSuccess &&
                    <div className="success-message">
                        Thanks, you're signed up!
                    </div> }
            </div>
        );
    }
}

EmailForm.propTypes = {
    btnText: PropTypes.string,
    label: PropTypes.string,
    url: PropTypes.string
};

EmailForm.defaultTypes = {
    btnText: 'submit',
    label: 'Email',
    url: ''
};

export default EmailForm;
