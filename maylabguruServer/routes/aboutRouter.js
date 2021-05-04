const express = require('express');
const About = require('../models/about');
const aboutRouter = express.Router();

aboutRouter.route('/')
    .get((req, res, next) => {
        About.find()
            .then(about => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(about);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        About.create(req.body)
            .then(about => {
                console.log('Client Created ', about);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(about);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /about');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /about');
        // About.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

aboutRouter.route('/:aboutId')
    .get((req, res, next) => {
        About.findById(req.params.aboutId)
            .then(about => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(about);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /about');
    })
    .put((req, res) => {
        About.findByIdAndUpdate(req.params.aboutId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(about => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(about);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        About.findByIdAndDelete(req.params.aboutId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = aboutRouter;