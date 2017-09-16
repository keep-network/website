import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ControlLabel, Form, FormGroup,
    FormControl } from 'react-bootstrap';
import isEmail from 'validator/lib/isEmail';
import pascalCase from 'pascal-case';
import classNames from 'classnames';
import request from 'superagent';


const API_URL = 'https://backend.keep.network';


class EmailForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            hasError: false
        };
    }

    onChange(e) {
        this.setState({
            email: e.target.value,
            hasError: false
        });
    }

    onClick(e) {
        const { email } = this.state;
        const { url } = this.props;

        if (!isEmail(email)) {
            this.setState({
                hasError: true
            });
        } else {
            request
                .post(`${API_URL}${url}`)
                .send({ email: email })
                .end((err, res) => {
                    if (err) {
                        // TODO server error
                    } else {
                        // TODO success
                    }
                });
        }
    }

    render() {
        const { label, btnText } = this.props;
        const { hasError } = this.state;

        return (
            <div className="email-form">
                <Form inline className={classNames({'has-error': hasError})}>
                    <FormGroup controlId={`formInline${pascalCase(label)}`}>
                        <ControlLabel style={{display: 'none'}}>
                            {label}
                        </ControlLabel>
                        <FormControl
                            type="email"
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
                { hasError && <small className="error-message">Oops! That doesn't look like an email address!</small> }
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
