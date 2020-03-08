import { combineReducers } from 'redux';

import { visibilityFilter, numbersReducers, errors } from "./reducers";

const reducers = combineReducers({
	visibilityFilter,
	numbersReducers,
	errors
});

export default reducers;
