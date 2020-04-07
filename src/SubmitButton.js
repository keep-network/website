import React from 'react'
import { Button } from 'react-bootstrap'

const SubmitButton = ({ isLoading, onClick, children }) => (
    <Button
        bsStyle="primary"
        bsSize="large"
        className="btn-submit"
        disabled={isLoading}
        onClick={onClick}>
        { isLoading ? (
            <div className="spinner" />
        ) : (
            children || 'Submit'
        )}
    </Button>
)

export default SubmitButton
