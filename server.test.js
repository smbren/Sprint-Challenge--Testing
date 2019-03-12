const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {

    describe('games route', () => {
      it('should return an OK status code from the /games route', async () => {
        const expectedStatusCode = 200;
        let response;

        return request(server).get('/games').then(res => {
            response = res;
  
            expect(response.status).toEqual(expectedStatusCode);
        })
      });
  
      it('should always return an array fron the games route', async () => {
  
        return request(server).get('/games').then(res => {
            response = res;
  
            expect(response.body.isArray()).toBeTruthy();
        })  
      });
  
      it('should return an empty array fron the games route if no games are listed', async () => {

        return request(server).get('/games').then(res => {
            response = res;
  
            expect(response.body.length()).toEqual(0);
        })
      });

    });
  });