import { combineReducers } from 'redux';

import { numbersReducers, errorsReducers } from "./reducers";

const reducers = combineReducers({
	numbersReducers,
	errorsReducers
});

export default reducers;
