import React from 'react';
import { connect } from 'react-redux';
import RangeInput from './RangeInput';
import fetchRandomNumber from "../apiCalls/fetchRandomNumber";

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <RangeInput name="min" type="min"/>
                    <RangeInput name="max" type="max"/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = appState => ({
    min: appState.numbersReducers.min,
    max: appState.numbersReducers.max
});

export default connect(mapStateToProps)(RangeForm);