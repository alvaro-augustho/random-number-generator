import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../redux/selectors/home';
import RangeForm from "./common/RangeForm";
import RandomNumber from "./common/RandomNumber";

class Home extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { dispatchSetVisibilityFilter } = this.props;
		dispatchSetVisibilityFilter();
	}
	render() {
		return (
			<div className="home">
				<RangeForm/>
				<RandomNumber/>
			</div>
		);
	}

}

Home.PropTypes = {
	dispatchSetVisibilityFilter: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(Home);