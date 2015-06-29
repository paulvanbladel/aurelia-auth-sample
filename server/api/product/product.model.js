'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    "productName": String,
    "productCode": String,
    "releaseDate": String,
    "description": String,
    "cost": Number,
    "price": Number,
    "category": String,
    "tags": [String],
    "imageUrl": String
});

module.exports = mongoose.model('Product', schema);