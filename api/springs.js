const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validSpring(spring) {
    const hasName = typeof spring.name == 'string' && spring.name.trim() != '';
    const hasURL = typeof spring.url == 'string' && spring.url.trim() != '';
    return hasName && hasURL;
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
    });
});

router.post('/', (req, res, next) => {
    if(validSpring(req.body)) {
        queries.create(req.body).then(springs => {
            res.json(springs[0]);
        });
    } else {
        next(new Error('Invalid spring'));
    }
});

module.exports = router;
