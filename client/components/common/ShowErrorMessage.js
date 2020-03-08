import React from 'react';
import { connect } from 'react-redux';

const ShowErrorMessage = ({ errorCode, errorMessage }) => {
    return (errorCode ? (<h1>Error: {errorCode} - {errorMessage}</h1>) : null);
};

const mapStateToProps = appState => ({
    errorMessage: appState.errors.errorMessage,
    errorCode: appState.errors.errorCode
});

export default connect(mapStateToProps)(ShowErrorMessage);