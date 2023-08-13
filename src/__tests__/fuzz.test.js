import request from 'supertest';
import app from '../App';
import { assert, expect } from 'chai';
import { naughty } from './naughty.js';

describe('Fuzz Testing for Ascenda API', () => {
  it('Fuzz Hotel API Endpoints', async () => {
    const baseUrl = 'https://hotelapi.loyalty.dev';

    for (let i = 0; i < naughty.length * 5; i++) {
      try {
        // Generate random values for fuzzing
        const randomEndpoint = naughty[Math.floor(Math.random() * naughty.length)];
        const randomData = {
          param1: naughty[Math.floor(Math.random() * naughty.length)],
          param2: naughty[Math.floor(Math.random() * naughty.length)],
        };

        // Send fuzzed request
        const res = await request(app)
          .get(`${baseUrl}/api/${randomEndpoint}`)
          .send(randomData);

        // Assert response status
        expect(res.statusCode).to.be.at.least(400);
      } catch (error) {
        throw error;
      }
    }
  });
});
