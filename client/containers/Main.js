import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../components/Home';
import Header from '../components/common/Header';
import NotFound from '../components/common/NotFound';

import '../css/bootstrap.min.css';

export default class Main extends Component {
  render() {
    return (
    	<div className="main">
		    <Header header="Random Number Generator"/>
		    <Switch>
			    <Route exact path="/" component={Home} />

			    <Route path="/404" component={NotFound} />
		    </Switch>
	    </div>
    );
  }
}