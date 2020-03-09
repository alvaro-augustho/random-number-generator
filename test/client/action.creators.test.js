import configureMockStore from 'redux-mock-store';
import * as actions from '../../client/redux/actions/actions';

const mockStore = configureMockStore();

describe('async actions', () => {

    let store;

    beforeEach(()=>{
        store = mockStore({min: 0, max: 100, randomNumber: 0});
    });

    it('assert that action SET_MIN is dispatched correctly', () => {

        store.dispatch(actions.setMin(50.47));

        // return of async actions
        expect(store.getActions()).toEqual([{ "min": 50.47, "type": "SET_MIN" }]);

    });

    it('assert that action SET_MAX is dispatched correctly', () => {

        store.dispatch(actions.setMax(150.47));

        // return of async actions
        expect(store.getActions()).toEqual([{ "max": 150.47, "type": "SET_MAX" }]);

    });

    it('assert that action SET_RANDOM_NUMBER is dispatched correctly', () => {

        store.dispatch(actions.setRandomNumber(225.32));

        // return of async actions
        expect(store.getActions()).toEqual([{ "randomNumber": 225.32, "type": "SET_RANDOM_NUMBER" }]);

    });

    it('assert that action SET_ERROR is dispatched correctly', () => {

        store.dispatch(actions.setError({ errorCode: 404, errorMessage: "Not Found" }));

        // return of async actions
        expect(store.getActions()).toEqual([{ "errorCode": 404, "errorMessage": "Not Found", "type": "SET_ERROR" }]);

    });
});