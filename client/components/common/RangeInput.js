import React from 'react';
import { connect } from 'react-redux';
import { setMin, setMax } from '../../redux/actions/actions';

class RangeInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if(this.props.type === 'min') {
            this.props.dispatch(setMin(this.refs[this.props.name].value));
        }

        if(this.props.type === 'max') {
            this.props.dispatch(setMax(this.refs[this.props.name].value));
        }
    }

    render(){
        return <input ref={this.props.name} name={this.props.name} onChange={this.handleChange} />;
    }
}

export default connect()(RangeInput);