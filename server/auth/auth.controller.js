'use strict';
var _ = require('lodash');
var Entity = require('./user.model.js');
var jwt = require('jwt-simple');
var authUtils = require('./authUtils');
exports.signup = function (req, res) {
    console.log("req body " + req.body.email);
    Entity.findOne({email: req.body.email}, function (err, existingUser) {
        if (existingUser) {
            return res.status(409).send({message: 'Email is already taken'});
        }
        var user = new Entity({
            displayName: req.body.displayName,
            email: req.body.email,
            password: req.body.password
        });
        user.save(function () {
            return res.status(201).json({token: authUtils.createJWT(user)});
        });

    });
};

exports.login = function (req, res) {
    console.log("req body " + req.body.email);
    Entity.findOne({email: req.body.email}, '+password', function (err, user) {
        if (!user) {
            return res.status(401).json({message: 'Wrong email and/or password'});
        }
        user.comparePassword(req.body.password, function (err, isMatch) {
            if (!isMatch) {
                return res.status(401).send({message: 'Wrong email and/or password'});
            }
            res.send({token: authUtils.createJWT(user)});
        });
    });
};

