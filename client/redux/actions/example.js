/*
 * action types
 */

export const SET_MIN = 'SET_MIN';
export const SET_MAX = 'SET_MAX';
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
	number
});

export const setMax = number => ({
	type: SET_MAX,
	number
});

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
});
