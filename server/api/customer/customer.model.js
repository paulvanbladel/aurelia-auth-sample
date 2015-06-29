'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
    firstName: String,
    lastName: String,
    street: String,
    city: String,
    notes: String

});

// Duplicate the ID field.
//schema.virtual('id').get(function(){
//    return this._id.toHexString();
//});
//
//// Ensure virtual fields are serialised.
//schema.set('toJSON', {
//    virtuals: true
//});


//this patches the _id field to id when returned to the client
//this makes the client more ready for other database systems
//where usually id is used instead of _id
//schema.set('toJSON', {
//    transform: function (doc, ret, options) {
//        ret.id = ret._id;
//        delete ret._id;
//        delete ret.__v;
//    }
//});
module.exports = mongoose.model('Customer', schema);