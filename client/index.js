import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducers from './redux/reducers';
import App from './containers/App';

const middlewares = [logger, thunk];

const store = createStore(reducers, applyMiddleware(...middlewares));

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);


