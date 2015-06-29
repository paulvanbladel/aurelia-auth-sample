/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /items              ->  index
 * POST    /items              ->  create
 * GET     /items/:id          ->  show
 * PUT     /items/:id          ->  update
 * DELETE  /items/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Entity = require('./product.model');


exports.myMethod = function(req, res) {
    Entity.find(function (err, items) {
        if(err) { return handleError(res, err); }
        //return res.json(200, items);
        return res.status(200).json(items)
    });
};


// Get list of items
exports.index = function(req, res) {
  Entity.find(function (err, items) {
    if(err) { return handleError(res, err); }
      return res.status(200).json(items)
  });
};

// Get a single item
exports.show = function(req, res) {
  Entity.findById(req.params.id, function (err, item) {
    if(err) { return handleError(res, err); }
    if(!item) { return res.send(404); }
    return res.json(item);
  });
};

// Creates a new item in the DB.
exports.create = function(req, res) {
  Entity.create(req.body, function(err, item) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(item);
  });
};

// Updates an existing item in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Entity.findById(req.params.id, function (err, item) {
    if (err) { return handleError(res, err); }
    if(!item) { return res.send(404); }
    var updated = _.merge(item, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(item);

    });
  });
};

// Deletes a item from the DB.
exports.destroy = function(req, res) {
  Entity.findById(req.params.id, function (err, item) {
    if(err) { return handleError(res, err); }
    if(!item) { return res.send(404); }
    item.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(400, err);
}