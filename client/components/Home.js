import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { mapDispatchToProps } from '../redux/selectors/home';

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
				<label htmlFor="min">Min :</label>
				<input type="number" id="min" name="min" />
				<br/><br/>
				<label htmlFor="max">Max :</label>
				<input type="number" id="max" name="max" />
			</div>
		);
	}
};

Home.PropTypes = {
	dispatchSetVisibilityFilter: PropTypes.func.isRequired
};

export default connect(()=> ({}), mapDispatchToProps)(Home);