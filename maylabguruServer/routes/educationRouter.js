const express = require('express');
const Education = require('../models/education');
const educationRouter = express.Router();

educationRouter.route('/')
    .get((req, res, next) => {
        Education.find()
            .then(education => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(education);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Education.create(req.body)
            .then(education => {
                console.log('Client Created ', education);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(education);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /education');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /education');
        // Education.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

educationRouter.route('/:educationId')
    .get((req, res, next) => {
        Education.findById(req.params.educationId)
            .then(education => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(education);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /education');
    })
    .put((req, res) => {
        Education.findByIdAndUpdate(req.params.educationId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(education => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(education);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Education.findByIdAndDelete(req.params.educationId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = educationRouter;