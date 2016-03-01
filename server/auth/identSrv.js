'use strict';
var User = require('./user.model.js');
var config = require('../config');
var request = require('request');
var jwt = require('jwt-simple');
var authUtils = require('./authUtils');



exports.authenticate = function (req, res) {
    var accessTokenUrl = 'http://localhost:22530/connect/token';
    var peopleApiUrl = 'http://localhost:22530/connect/userinfo';
    var params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: config.IDENTSRV_SECRET,
        redirect_uri: req.body.redirectUri,
        grant_type: 'authorization_code'
    };

    // Step 1. Exchange authorization code for access token.
    request.post(accessTokenUrl, { json: true, form: params }, function (err, response, token) {
        var accessToken = token.access_token;

        var headers = { Authorization: 'Bearer ' + accessToken, connection: 'keep-alive'  };

        // Step 2. Retrieve profile information about the current user.
    
        request({ url: peopleApiUrl, method: 'GET', headers: headers},
            function (err, response, profile) {

                if (err) {
                    console.log("error : " + err);
                }

            
                // Step 3a. Link user accounts.
                if (req.headers.authorization) {
                    User.findOne({ "identSrv": profile.sub }, function (err, existingUser) {
                        if (existingUser) {
                            return res.status(409).send({ message: 'There is already an IdentityServer account that belongs to you' });
                        }
                        var token = req.headers.authorization.split(' ')[1];
                        var payload = jwt.decode(token, config.TOKEN_SECRET);
                        User.findById(payload.sub, function (err, user) {
                            if (!user) {
                                return res.status(400).send({ message: 'User not found' });
                            }
                            user.identSrv = profile.sub;
                            //user.picture = user.picture || profile.picture.replace('sz=50', 'sz=200');
                            user.displayName = user.displayName || profile.name;
                            user.save(function () {
                                var token = authUtils.createJWT(user);
                                res.send({ token: token });
                            });
                        });
                    });
                } else {
                    // Step 3b. Create a new user account or return an existing one.
                    User.findOne({ identSrv: profile.sub }, function (err, existingUser) {
                        if (existingUser) {
                            return res.send({ token: authUtils.createJWT(existingUser) });
                        }
                        var user = new User();
                        user.identSrv = profile.sub;
                        //user.picture = profile.picture.replace('sz=50', 'sz=200');
                        user.displayName = profile.name;
                        user.save(function (err) {
                            var token = authUtils.createJWT(user);
                            res.send({ token: token });
                        });
                    });
                }
            });
    });
}