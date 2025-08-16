const request = require('supertest');
const app = require('../src/app');

describe('GET /', () => {
  it('debería responder con "¡Hola Mundo!"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('¡Hola Mundo!');
  });
});