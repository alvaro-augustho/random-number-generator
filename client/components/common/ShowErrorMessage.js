import React from 'react';
import { connect } from 'react-redux';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const ShowErrorMessage = ({ errorCode, errorMessage }) => {
    return (errorCode ? (
        <Row>
            <Col/>
            <Col>
            <Alert className="alert-danger mt-5">Error: {errorCode} - {errorMessage}</Alert>
            </Col>
            <Col/>
        </Row>

    ) : null);
};

const mapStateToProps = appState => ({
    errorMessage: appState.errorsReducers.errorMessage,
    errorCode: appState.errorsReducers.errorCode
});

export default connect(mapStateToProps)(ShowErrorMessage);