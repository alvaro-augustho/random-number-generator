const app = require('../../server/app');
const supertest = require('supertest');
const request = supertest(app);

describe("Testing endpoints", () => {

    test(`Assert that /getNumber returns OK and between default 'min=0' and 'max=100' with no params`, async (done) => {
    const response = await request.get('/getNumber');

    expect(response.status).toBe(200);
    expect(response.type).toEqual('application/json');
    expect(response.body.number).toBeGreaterThan(0);
    expect(response.body.number).toBeLessThan(100);

    done()
    }, 5000);

    test(`Assert that /getNumber returns more than 'min' param`, async (done) => {
        const response = await request.get('/getNumber?min=1500');

        expect(response.status).toBe(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.number).toBeGreaterThan(1500);

        done()
    }, 5000);

    test(`Assert that /getNumber returns less than 'max' param and more than default 'min=0'`, async (done) => {
        const response = await request.get('/getNumber?max=1500');

        expect(response.status).toBe(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.number).toBeGreaterThan(0);
        expect(response.body.number).toBeLessThan(1500);

        done()
    }, 5000);

    test(`Assert that /getNumber returns less than 'max' param and more than 'min' param`, async (done) => {
        const response = await request.get('/getNumber?min=1455&max=1500');

        expect(response.status).toBe(200);
        expect(response.type).toEqual('application/json');
        expect(response.body.number).toBeGreaterThan(1455);
        expect(response.body.number).toBeLessThan(1500);

        done()
    }, 5000);

});