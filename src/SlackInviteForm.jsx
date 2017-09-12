import React from 'react';
import { Button, ControlLabel, Form, FormGroup,
    FormControl } from 'react-bootstrap';

const SlackInviteForm = () => <div>
    <Form inline>
        <FormGroup controlId="formInlineSlack">
            <ControlLabel style={{display: 'none'}}>Slack Email</ControlLabel>
            <FormControl type="email" id="slackEmail" />
        </FormGroup>
        {' '}
        <Button bsStyle="primary" bsSize="large">join</Button>
    </Form>
</div>;

export default SlackInviteForm;