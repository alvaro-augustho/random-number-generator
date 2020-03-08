import {
	SET_MIN,
	SET_MAX,
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

export const numbersReducers = (state = {min: 0, max: 100, randomNumber: 0}, action) => {
	switch (action.type) {
		case SET_MIN:
			return [
				...state,
				{
					min: action.min,
					completed: false
				}
			];
		case SET_MAX:
			return [
				...state,
				{
					max: action.max,
					completed: false
				}
			];
		default:
			return state;
	}
};