const express = require('express');
const Author = require('../models/author')
const authorRouter = express.Router();

authorRouter.route('/')
    .get((req, res, next) => {
        Author.find()
            .then(authors => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(authors);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Author.create(req.body)
            .then(author => {
                console.log('Author Created ', author);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(author);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /authors');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /authors');
        // Author.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });
authorRouter.route('/:authorId')
    .get((req, res, next) => {
        Author.findById(req.params.authorId)
            .then(author => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(author);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /authors');
    })
    .put((req, res) => {
        Author.findByIdAndUpdate(req.params.authorId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(author => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(author);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Author.findByIdAndDelete(req.params.authorId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = authorRouter;