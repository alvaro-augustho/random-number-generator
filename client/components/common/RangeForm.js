import React from 'react';
import { connect } from 'react-redux';
import RangeInput from './RangeInput';

let RangeForm = () => {

    return (
        <div>
            <form>
                <RangeInput name="min" type="min"/>
                <RangeInput name="max" type="max"/>
                <button type="submit">Generate</button>
            </form>
        </div>
    );
};

export default connect()(RangeForm);