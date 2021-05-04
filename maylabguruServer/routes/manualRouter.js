const express = require('express');
const Manual = require('../models/manual');
const manualRouter = express.Router();

manualRouter.route('/')
    .get((req, res, next) => {
        Manual.find()
            .then(manuals => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(manuals);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Manual.create(req.body)
            .then(manual => {
                console.log('Manual Created ', manual);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(manual);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /manuals');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /manuals');
        // Manual.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

manualRouter.route('/:manualId')
    .get((req, res, next) => {
        Manual.findById(req.params.manualId)
            .then(manual => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(manual);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /manuals');
    })
    .put((req, res) => {
        Manual.findByIdAndUpdate(req.params.manualId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(manual => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(manual);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Manual.findByIdAndDelete(req.params.manualId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = manualRouter;