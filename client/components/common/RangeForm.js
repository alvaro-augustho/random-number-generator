import React from 'react';
import { connect } from 'react-redux';
import RangeInput from './RangeInput';
import fetchRandomNumber from "../apiCalls/fetchRandomNumber";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class RangeForm extends React.Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatch(fetchRandomNumber(this.props.min, this.props.max));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col/>
                    <Col>
                        <Form onSubmit={this.handleSubmit}>
                            <RangeInput name="Minimum" description="Enter the minimum value for the random number" type="min" defaultValue="0"/>
                            <RangeInput name="Maximum" description="Enter the maximum value for the random number" type="max" defaultValue="100"/>
                            <Button type="submit" value="Submit" sie="lg" block>Submit</Button>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = appState => ({
    min: appState.numbersReducers.min,
    max: appState.numbersReducers.max
});

export default connect(mapStateToProps)(RangeForm);