import React from 'react';
import { Button, ControlLabel, Form, FormGroup,
    FormControl } from 'react-bootstrap';

const LeadGenForm = () => <div>
    <Form inline>
        <FormGroup controlId="formInlineEmail">
            <ControlLabel style={{display: 'none'}}>Email</ControlLabel>
            <FormControl type="email" id="email" />
        </FormGroup>
        {' '}
        <Button bsStyle="primary" bsSize="large">sign up</Button>
    </Form>
</div>;

export default LeadGenForm;
