const express = require('express');
const Comment = require('../models/comment');
const commentRouter = express.Router();

commentRouter.route('/')
    .get((req, res, next) => {
        Comment.find()
            .then(comments => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comments);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Comment.create(req.body)
            .then(comment => {
                console.log('Client Created ', comment);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comment);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /comments');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /comments');
        // Comment.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

commentRouter.route('/:commentId')
    .get((req, res, next) => {
        Comment.findById(req.params.commentId)
            .then(comment => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comment);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /comment');
    })
    .put((req, res) => {
        Comment.findByIdAndUpdate(req.params.commentId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(comment => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(comment);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Comment.findByIdAndDelete(req.params.commentId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = commentRouter;