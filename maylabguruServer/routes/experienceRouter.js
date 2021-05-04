const express = require('express');
const Experience = require('../models/experience');
const experienceRouter = express.Router();

experienceRouter.route('/')
    .get((req, res, next) => {
        Experience.find()
            .then(experiences => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(experiences);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Experience.create(req.body)
            .then(experience => {
                console.log('Client Created ', experience);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(experience);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /experience');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /experience');
        // Experience.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

experienceRouter.route('/:experienceId')
    .get((req, res, next) => {
        Experience.findById(req.params.clientId)
            .then(experience => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(experience);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /experience');
    })
    .put((req, res) => {
        Experience.findByIdAndUpdate(req.params.experienceId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(experience => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(experience);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Experience.findByIdAndDelete(req.params.experienceId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = experienceRouter;