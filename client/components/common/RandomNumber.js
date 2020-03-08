import React from 'react';
import { connect } from 'react-redux';

const RandomNumber = ({ randomNumber }) => {
    return <h1>Number is: {randomNumber}</h1>;
};

const mapStateToProps = appState => ({
    randomNumber: appState.numbersReducers.randomNumber
});

export default connect(mapStateToProps)(RandomNumber);