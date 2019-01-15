const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

router.get('/', (req, res) => {
    queries.getAll().then(springs => {
        res.json(springs);
    })
});

router.get('/:id', isValidId, (req, res, next) => {
    queries.getOne(req.params.id).then(spring => {
        if(spring) {
            res.json(spring);
        } else {
            res.status(404);
            next();
        }
    })
})

module.exports = router;
