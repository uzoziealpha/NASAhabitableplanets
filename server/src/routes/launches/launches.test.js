//supertest is imported
const request = require('supertest');
//importing app.js to be tested
const app = require('../../app');

//TESTING GET
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


//TESTING POST
describe('Test POST /launch', () => {
    const completedLaunchData = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
        launchDate: 'January 4, 2028',
    };

    const launchDataWithoutDate = {
        mission: 'USS Enterprise',
        rocket: 'NCC 1701-D',
        target: 'Kepler-186 f',
    }

    test('It should respond with 201 created', async () => {
      const response = await request(app)
        .post('/launches')
        .send(completedLaunchData)
        .expect('Content-Type', /json/)
        .expect(201);

       const requestDate = new Date (completedLaunchData.launchDate).valueOf();
       const responseDate = new Date(response.body.launchDate).valueOf();
       expect(responseDate).toBe(requestDate);
        //we use toMatchObject to match the dates 
        expect(response.body).toMatchObject(launchDataWithoutDate);
    });
    test('It should catch missing required props', () => {});
    test('It should catch invalid dates', () => {});    
})