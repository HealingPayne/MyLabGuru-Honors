const express = require('express');
const Client = require('../models/client');
const clientRouter = express.Router();

clientRouter.route('/')
    .get((req, res, next) => {
        Client.find()
            .then(clients => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(clients);
            })
            .catch(err => next(err));
    })
    .post((req, res, next) => {
        Client.create(req.body)
            .then(client => {
                console.log('Client Created ', client);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(client);
            })
            .catch(err => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /clients');
    })
    .delete((req, res, next) => {
        res.statusCode = 403;
        res.end('DELETE ALL operation not supported on /clients');
        // Client.deleteMany()
        //     .then(response => {
        //         res.statusCode = 200;
        //         res.setHeader('Content-Type', 'application/json');
        //         res.json(response);
        //     })
        //     .catch(err => next(err));
    });

clientRouter.route('/:clientId')
    .get((req, res, next) => {
        Client.findById(req.params.clientId)
            .then(client => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(client);
            })
            .catch(err => next(err));
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /clients');
    })
    .put((req, res) => {
        Client.findByIdAndUpdate(req.params.clientId, {
            $set: req.body
        }, { new: true }) //Get an updated object
            .then(client => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(client);
            })
            .catch(err => next(err));
    })
    .delete((req, res, next) => {
        Client.findByIdAndDelete(req.params.clientId)
            .then(response => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch(err => next(err));
    });
module.exports = clientRouter;