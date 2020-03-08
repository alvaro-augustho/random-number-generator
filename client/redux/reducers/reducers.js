import {
	SET_MIN,
	SET_MAX,
	SET_RANDOM_NUMBER,
	SET_ERROR,
	SET_VISIBILITY_FILTER,

	VisibilityFilters
} from '../actions/actions';

const { SHOW_ALL } = VisibilityFilters;

export const visibilityFilter = (state = SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter;
		default:
			return state;
	}
};

export const errors = (state = { errorMessage: "", errorCode: null }, action) => {
	switch (action.type) {
		case SET_ERROR:
			return Object.assign({}, state, {
				errorMessage: action.errorMessage,
				errorCode: action.errorCode
			});
		default:
			return state;
	}
};

export const numbersReducers = (state = {min: 0, max: 100, randomNumber: 0.0}, action) => {
	switch (action.type) {
		case SET_MIN:
			return Object.assign({}, state, {
				min: parseFloat(action.min),
				completed: false
			});
		case SET_MAX:
			return Object.assign({}, state, {
				max: parseFloat(action.max),
				completed: false
			});
		case SET_RANDOM_NUMBER:
			return Object.assign({}, state, {
				randomNumber: parseFloat(action.randomNumber),
				completed: false
			});
		default:
			return state;
	}
};