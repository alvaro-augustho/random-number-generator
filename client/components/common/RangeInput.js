import React from 'react';
import { connect } from 'react-redux';
import { setMin, setMax } from '../../redux/actions/actions';

import Form from 'react-bootstrap/Form';

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

        return  (<Form.Group controlId="formBasicEmail" className="mb-3">
                    <Form.Label>{this.props.name}:</Form.Label>
                    <Form.Control defaultValue={parseInt(this.props.defaultValue)} ref={this.props.name} name={this.props.name} onChange={this.handleChange}/>
                    <Form.Text className="text-muted">
                        {this.props.description}
                    </Form.Text>
                </Form.Group>);

        /*return <input ref={this.props.name} name={this.props.name} onChange={this.handleChange} />;*/
    }
}

export default connect()(RangeInput);