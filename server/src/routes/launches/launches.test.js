//supertest is imported
const request = require('supertest');
//importing app.js to be tested
const app = require('../../app');


describe('TEST GET /launches', () => {
    test('It should respond with 200 success', async () => {
        //telling supertest to look at launches 
        const response = await request(app)
          .get('/launches')
          .expect('Content-Type', /json/)
          .expect(200);
        //using ASSERTIONS for JEST 5+5 must be
       // expect(response.statusCode).toBe(200);
    });
})

describe('Test POST /launch', () => {
    test('It should respond with 200 success', async () => {
      const response = await request(app)
        .post('/launches')
        .send({
            mission: 'USS Enterprise',
            rocket: 'NCC 1701-D',
            target: 'Kepler-186 f',
            launchDate: 'January 4, 2028',
        })
        .expect('Content-Type', /json/)
        .expect(201);
    });
    test('It should catch missing required props', () => {});
    test('It should catch invalid dates', () => {});    
})