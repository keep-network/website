import React from 'react';
import { Button, ControlLabel, Form, FormGroup,
    FormControl } from 'react-bootstrap';

const LeadGenForm = () => <div className="lead">
    <Form inline>
        <FormGroup controlId="formInlineEmail">
            <ControlLabel style={{display: 'none'}}>Email</ControlLabel>
            <FormControl type="email" id="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button bsStyle="primary" bsSize="large">Join Keep</Button>
    </Form>
</div>;

export default LeadGenForm;
