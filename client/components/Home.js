import React, { Component } from 'react';
import { connect } from 'react-redux';

import RangeForm from "./common/RangeForm";
import RandomNumber from "./common/RandomNumber";
import ShowErrorMessage from "./common/ShowErrorMessage";

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<RangeForm/>
				<RandomNumber/>
				<ShowErrorMessage/>
			</div>
		);
	}

}

export default connect()(Home);