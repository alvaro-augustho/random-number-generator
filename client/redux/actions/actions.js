/*
 * action types
 */

export const SET_MIN = 'SET_MIN';
export const SET_MAX = 'SET_MAX';
export const SET_RANDOM_NUMBER = 'SET_RANDOM_NUMBER';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * other constants
 */

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export const setMin = number => ({
	type: SET_MIN,
	min: number
});

export const setMax = number => ({
	type: SET_MAX,
	max: number
});

export const setRandomNumber = number => ({
	type: SET_RANDOM_NUMBER,
	randomNumber: number
});

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
});
