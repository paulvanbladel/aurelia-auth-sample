'use strict';

var express = require('express');
var controller = require('./customer.controller');
var authUtils = require('../../auth/authUtils');
var router = express.Router();
router.use(authUtils.ensureAuthenticated); //auth only appied for following paths, not the paths above
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.get('/dto/quickList',controller.myMethod);
module.exports = router;