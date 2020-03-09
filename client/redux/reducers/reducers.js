import {
	SET_MIN,
	SET_MAX,
	SET_RANDOM_NUMBER,
	SET_ERROR
} from '../actions/actionTypes';

const errorsReducers = (state = { errorMessage: "", errorCode: null }, action) => {
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

const numbersReducers = (state = {min: 0, max: 100, randomNumber: null}, action) => {
	switch (action.type) {
		case SET_MIN:
			return Object.assign({}, state, {
				min: parseFloat(action.min)
			});
		case SET_MAX:
			return Object.assign({}, state, {
				max: parseFloat(action.max)
			});
		case SET_RANDOM_NUMBER:
			return Object.assign({}, state, {
				randomNumber: parseFloat(action.randomNumber)
			});
		default:
			return state;
	}
};

export {
	numbersReducers, errorsReducers
};