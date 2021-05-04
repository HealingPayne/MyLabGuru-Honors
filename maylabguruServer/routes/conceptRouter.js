const express = require('express');
const Concept = require('../models/concept');
const conceptRouter = express.Router();

conceptRouter.route('/')
    .get((req, res, next) => {
        Concept.find()
            .then(concepts => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(concepts);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Concept.create(req.body)
            .then(concept => {
                console.log('Concept Created ', concept);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(concept);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /concepts');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /concepts');
        // Concept.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

conceptRouter.route('/:conceptId')
    .get((req, res, next) => {
        Concept.findById(req.params.conceptId)
            .then(concept => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(concept);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /concepts');
    })
    .put((req, res) => {
        Concept.findByIdAndUpdate(req.params.conceptId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(concept => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(concept);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Concept.findByIdAndDelete(req.params.conceptId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = conceptRouter;