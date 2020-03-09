import * as actionTypes from './actionTypes';

/*
 * action creators
 */

export const setMin = number => ({
	type: actionTypes.SET_MIN,
	min: number
});

export const setMax = number => ({
	type: actionTypes.SET_MAX,
	max: number
});

export const setRandomNumber = number => ({
	type: actionTypes.SET_RANDOM_NUMBER,
	randomNumber: number
});

export const setError = ({ errorCode, errorMessage }) => ({
	type: actionTypes.SET_ERROR, errorCode, errorMessage
});
