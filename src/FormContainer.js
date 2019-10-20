import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class FormContainer extends Component {
    render() {
        return (<div className="container">
            <Form>
                <FormGroup>
                    <Label>Host</Label>
                    <Input type="text" name="host" placeholder="myapp.hostname.com" />
                    <FormText>Hostname to check</FormText>
                </FormGroup>
                <FormGroup>
                    <Label>Port</Label>
                    <Input type="text" name="port" placeholder="80, 443" />
                    <FormText>Port to check</FormText>
                </FormGroup>
                <Input type="checkbox" />
                <Label>Use Proxy?</Label>
            </Form>
        </div>);
    }
}

export default FormContainer;