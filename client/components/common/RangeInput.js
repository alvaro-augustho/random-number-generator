import React from 'react';
import { connect } from 'react-redux';
import { setMin, setMax } from '../../redux/actions/actions';

import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

class RangeInput extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        if(this.props.type === 'min') {
            let value = this.refs[this.props.name].value ? this.refs[this.props.name].value : 0;
            this.props.dispatch(setMin(value));
        }

        if(this.props.type === 'max') {
            let value = this.refs[this.props.name].value ? this.refs[this.props.name].value : 100;
            this.props.dispatch(setMax(value));
        }
    }

    render(){

        return  (<InputGroup className="mb-3">
                    <InputGroup.Prepend>
                    <InputGroup.Text>{this.props.name}: </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl defaultValue={parseInt(this.props.defaultValue)} ref={this.props.name} name={this.props.name} onChange={this.handleChange}/>
                </InputGroup>);

        /*return <input ref={this.props.name} name={this.props.name} onChange={this.handleChange} />;*/
    }
}

export default connect()(RangeInput);