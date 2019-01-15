const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');


const app = require('../app');

describe('CRUD Springs', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
            return knex.seed.run();
        }).then(() => done());
    });

    it('Lists all records ...', (done) => {
        request(app)
            .get('/api/v1/springs')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                console.log(response.body);
                done();
            })
    })
});