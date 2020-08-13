import React, { Component } from "react"
import PropTypes from "prop-types"
import { Label, Form, FormGroup, Input } from "reactstrap"
import isEmail from "validator/lib/isEmail"
import classNames from "classnames"
import merge from "lodash/merge"

import { ArrowRightLong } from "./Icons"
import SubmitButton from "./SubmitButton"

const ERRORS = {
  INVALID_EMAIL: `Oops! That doesn't look like an email address!`,
  SERVER: `Sorry, your request cannot be completed at this time.`,
}

const RESET_DELAY = 3000 // 3 seconds

class EmailForm extends Component {
  constructor(props) {
    super(props)

    this.state = this.getInitialState()
  }

  getInitialState() {
    return {
      email: "",
      hasError: false,
      requestSent: false,
      requestSuccess: false,
      errorMsg: ERRORS.INVALID_EMAIL,
    }
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillReceiveProps(nextProps) {
    const { requestStates, request } = nextProps

    if (requestStates.currentRequest === request) {
      if (requestStates[request].error) {
        this.setState({
          hasError: true,
          requestSent: false,
          errorMsg: ERRORS.SERVER,
        })
      } else {
        this.onRequestSuccess()
      }
    }
  }

  onChange = (e) => {
    this.setState(merge({}, this.getInitialState(), { email: e.target.value }))
  }

  onRequestSuccess() {
    const { resetOnSuccess, onSuccess } = this.props

    this.setState({
      hasError: false,
      requestSent: true,
      requestSuccess: true,
    })

    onSuccess()

    if (resetOnSuccess) {
      window.setTimeout(() => {
        this.setState(this.getInitialState())
      }, RESET_DELAY)
    }
  }

  onClick = (e) => {
    this.submit()
  }

  onKeyUp = (e) => {
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
        errorMsg: ERRORS.INVALID_EMAIL,
      })
    } else {
      this.setState({
        requestSent: true,
      })
      onSubmit({ email })
    }
  }

  renderForm() {
    const { label, showSuccessMessage, placeholder, children } = this.props
    const {
      email,
      hasError,
      requestSent,
      errorMsg,
      requestSuccess,
    } = this.state

    const classes = {
      "has-error": hasError,
      "request-sent": requestSent || showSuccessMessage,
      "request-success": requestSuccess || showSuccessMessage,
    }

    return (
      <div>
        {children}
        <Form
          inline
          className={classNames(classes)}
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <FormGroup>
            <Label style={{ display: "none" }}>{label}</Label>
            <Input
              type="email"
              value={email}
              placeholder={placeholder}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
          </FormGroup>{" "}
          <SubmitButton
            isLoading={requestSent && !requestSuccess}
            onClick={this.onClick}
          >
            <ArrowRightLong />
          </SubmitButton>
        </Form>
        {hasError && <small className="error-message">{errorMsg}</small>}
      </div>
    )
  }

  renderSuccessMessage() {
    return (
      <div className="success-message">
        {this.props.successMessage || "Thanks for joining!"}
      </div>
    )
  }

  render() {
    const { showSuccessMessage } = this.props
    const { requestSuccess } = this.state

    return (
      <div className="email-form">
        {requestSuccess || showSuccessMessage
          ? this.renderSuccessMessage()
          : this.renderForm()}
      </div>
    )
  }
}

EmailForm.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  successMessage: PropTypes.string,
  resetOnSuccess: PropTypes.bool,
  onSuccess: PropTypes.func,
  showSuccessMessage: PropTypes.bool,
  onSubmit: PropTypes.func,
  requestStates: PropTypes.object,
  request: PropTypes.string,
}

EmailForm.defaultProps = {
  btnText: "submit",
  label: "Email",
  successMessage: "",
  resetOnSuccess: true,
  onSuccess: () => {},
  showSuccessMessage: false,
  onSubmit: () => {},
  requestStates: {},
  request: "",
}

export default EmailForm
