import {numbersReducers, errorsReducers} from "../../client/redux/reducers/reducers";

describe('>>> Testing reducers',()=> {

    it('+++ create numbersReducers function', () => {
        expect(numbersReducers).toThrow();
    });

    it('+++ create errorsReducers function', () => {
        expect(errorsReducers).toThrow();
    });

    it('+++ reducer for SET_MIN', () => {
        let state = {min: 0, max: 100, randomNumber: 0};
        state = numbersReducers(state, {type: "SET_MIN", min: 43.72});
        expect(state).toEqual({min: 43.72, max: 100, randomNumber: 0});
    });

    it('+++ reducer for SET_MAX', () => {
        let state = {min: 0, max: 100, randomNumber: 0};
        state = numbersReducers(state, {type: "SET_MAX", max: 58.97});
        expect(state).toEqual({min: 0, max: 58.97, randomNumber: 0});
    });

    it('+++ reducer for SET_RANDOM_NUMBER', () => {
        let state = {min: 0, max: 100, randomNumber: 0};
        state = numbersReducers(state, {type: "SET_RANDOM_NUMBER", randomNumber: 99.57});
        expect(state).toEqual({min: 0, max: 100, randomNumber: 99.57});
    });

    it('+++ reducer for non-existent number reducer', () => {
        let state = {min: 0, max: 100, randomNumber: 0};
        state = numbersReducers(state, {type: "SET_RANDOM_NUMBER_WRONG", randomNumber: 99.57});
        expect(state).toEqual({min: 0, max: 100, randomNumber: 0});
    });

    it('+++ reducer for SET_ERROR', () => {
        let state = {errorCode: null, errorMessage: ""};
        state = errorsReducers(state, {type: "SET_ERROR", errorCode: 500, errorMessage: "Internal Server Error"});
        expect(state).toEqual({errorCode: 500, errorMessage: "Internal Server Error"});
    });

    it('+++ reducer for non-existent error reducer', () => {
        let state = {errorCode: null, errorMessage: ""};
        state = errorsReducers(state, {type: "SET_ERROR_WRONG", errorCode: 500, errorMessage: "Internal Server Error"});
        expect(state).toEqual({errorCode: null, errorMessage: ""});
    });

});