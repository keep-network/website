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

  static getDerivedStateFromProps(nextProps, newState) {
    const { requestStates, request } = nextProps

    if (requestStates.currentRequest === request) {
      if (requestStates[request].error) {
        return {
          hasError: true,
          requestSent: false,
          errorMsg: ERRORS.SERVER,
        }
      } else {
        return this.onRequestSuccess()
      }
    }
  }

  onChange = (e) => {
    this.setState(merge({}, this.getInitialState(), { email: e.target.value }))
  }

  onRequestSuccess() {
    const { resetOnSuccess, onSuccess } = this.props

    onSuccess()

    if (resetOnSuccess) {
      window.setTimeout(() => {
        this.setState(this.getInitialState())
      }, RESET_DELAY)
    }

    return {
      hasError: false,
      requestSent: true,
      requestSuccess: true,
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
    const { label, showSuccessMessage, placeholder } = this.props
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
      <Form
        inline
        className={classNames(classes)}
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <FormGroup className="col-md-12 px-0 pr-xs-2">
          <Label style={{ display: "none" }}>{label}</Label>
          <Input
            className="form-group-input"
            type="email"
            value={email}
            placeholder={placeholder}
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />
        </FormGroup>{" "}
        {hasError && <small className="error-message">{errorMsg}</small>}
        <SubmitButton
          isLoading={requestSent && !requestSuccess}
          onClick={this.onClick}
        >
          <ArrowRightLong />
          <span className="button-text">Subscribe</span>
        </SubmitButton>
      </Form>
    )
  }

  renderSuccessMessage() {
    return (
      <div className="success-message">
        {this.props.successMessage ||
          "🎉 You’re in! Thanks for signing up for the Keep newsletter."}
      </div>
    )
  }

  render() {
    const { showSuccessMessage, children } = this.props
    const { requestSuccess } = this.state

    return (
      <div className="email-form">
        {children}
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
