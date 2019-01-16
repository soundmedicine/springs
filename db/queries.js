const knex = require('./knex'); // the connection!

module.exports = {
    getAll() {
        return knex('spring');
    },
    getOne(id) {
        return knex('spring').where('id', id).first();
    },
    create(spring) {
        return knex('spring').insert(spring, '*');
    },
    update(id, spring) {
        return knex('spring').where('id', id).update(spring, '*');
    }
}