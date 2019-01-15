const knex = require('../db/knex');

describe('CRUD Springs', () => {
    before(() => {
        //run migrations
        knex.migrate.latest()
            .then(() => {
             //run seeds
            return knex.seed.run();
        })
    })
})