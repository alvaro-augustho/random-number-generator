import React from 'react';
import { connect } from 'react-redux';

const RandomNumber = ({ randomNumber }) => {
    return randomNumber ? (
        <div className="mt-lg-3">
            <h3 className="text-center">Your random number is: </h3>
            <h2 className="text-center">{randomNumber.toFixed(2)}</h2>
        </div>
    ) : null;
};

const mapStateToProps = appState => ({
    randomNumber: appState.numbersReducers.randomNumber
});

export default connect(mapStateToProps)(RandomNumber);