import React, {Component} from 'react';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class FormContainer extends Component {
    render() {
        return (<div class="container">
            <Form horizontal>
                <Row>
                    <Col>
                        <Form.Group controlId="formHost">
                            <Form.Label>Host</Form.Label>
                            <Form.Control type="text" placeholder="myapp.hostname.com" />
                            <Form.Text>Hostname to check</Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="formPort">
                            <Form.Label>Port</Form.Label>
                            <Form.Control type="text" placeholder="80, 443" />
                            <Form.Text>Port to check</Form.Text>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} xsOffset={1}>
                        <Form.Check type="checkbox" label="Use Proxy?" />
                    </Col>
                </Row>
        </Form>
        </div>);
    }
}

export default FormContainer;