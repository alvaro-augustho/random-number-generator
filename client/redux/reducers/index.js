import { combineReducers } from 'redux';

import { visibilityFilter, numbersReducers } from "./reducers";

const reducers = combineReducers({
	visibilityFilter,
	numbersReducers
});

export default reducers;
