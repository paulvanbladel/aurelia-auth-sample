'use strict';
var _ = require('lodash');
var jwt = require('jwt-simple');
var authUtils = require('./authUtils');
var User = require('./user.model.js');

exports.getMe = function (req, res) {
    User.findById(req.user, function (err, user) {
        if (!user) {
            return res.status(404).send({message: 'User not found'});
        }
        res.send(user);
    });
};

exports.updateMe = function (req, res) {
    User.findById(req.user, function (err, user) {
        if (!user) {
            return res.status(400).send({message: 'User not found'});
        }
        user.displayName = req.body.displayName || user.displayName;
        user.email = req.body.email || user.email;
        user.save(function (err) {
            res.status(200).end();
        });
    });
};

exports.unlink = function(req,res){
var provider = req.params.provider;
console.log("provider = " + provider);
  var providers = ['facebook', 'foursquare', 'google', 'github', 'linkedin', 'live', 'twitter', 'yahoo'];

  if (providers.indexOf(provider) === -1) {
    return res.status(400).send('Unknown provider');
  }

  User.findById(req.user, function(err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found' });
    }
    user[provider] = undefined;
    user.save(function() {
      res.status(200).end();
    });
  });
};
