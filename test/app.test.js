const request = require('supertest');
const expect = require('chai').expect;
const knex = require('../db/knex');

const app = require('../app');

const fixtures = require('./fixtures');

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
                expect(response.body).to.deep.equal(fixtures.springs);
                done();
        });
    });

    it('Lists record by id ...', (done) => {
        request(app)
            .get('/api/v1/springs/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.springs[0]);
                done();
        });
    });

    it('Show one record by id ...', (done) => {
        request(app)
            .get('/api/v1/springs/4')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.springs[3]);
                done();
        });
    });

    it('Creates a record', (done) => {
        request(app)
            .post('/api/v1/springs')
            .send(fixtures.spring)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                fixtures.spring.id = response.body.id;
                expect(response.body).to.deep.equal(fixtures.spring);
                done();
        });
    });

    it('Updates a record', (done) => {
        fixtures.spring.access_rating = 2;
        request(app)
            .put('/api/v1/springs/5')
            .send(fixtures.spring)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                fixtures.spring.id = response.body.id;
                expect(response.body).to.deep.equal(fixtures.spring);
                done();
        });
    });

    it('Deletes a record', (done) => {
        request(app)
            .delete('/api/v1/springs/5')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal({
                    deleted: true
                });
                done();
        });
    });
});
