'use strict';

var express = require('express');
var authUtils = require('./authUtils');
var authController = require('./auth.controller.js');
var meController = require('./me.controller.js');
var identSrv = require('./identSrv.js');
var google = require('./google.js');
var linkedin = require('./linkedin.js');
var twitter = require('./twitter.js');
var facebook = require('./facebook.js');
var github = require('./github.js');
var live = require('./live.js');
var yahoo = require('./yahoo.js');
var foursquare = require('./foursquare');
var router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/google', google.authenticate);
router.post('/linkedin', linkedin.authenticate);
router.post('/twitter', twitter.authenticate);
router.post('/facebook', facebook.authenticate);
router.post('/github', github.authenticate);
router.post('/live', live.authenticate);
router.post('/yahoo', yahoo.authenticate);
router.post('/foursquare', foursquare.authenticate);
router.post('/identSrv', identSrv.authenticate);


//TODO implement ensureAuthenticated
/*router.get('/me',authUtils.ensureAuthenticated, meController.getMe );
router.put('/me',authUtils.ensureAuthenticated, meController.updateMe );
*/
router.use(authUtils.ensureAuthenticated); //auth only appied for following paths, not the paths above
router.get('/me', meController.getMe );
router.put('/me', meController.updateMe );
router.get('/unlink/:provider', meController.unlink);
module.exports = router;

//"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com&redirect_uri=https://satellizer.herokuapp.com&scope=openid profile email&display=popup"