'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');
var mongoose= require('mongoose');
var Customer = mongoose.model('Customer');
var agent = request.agent(app);

describe('GET /api/customer', function() {

  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/customer')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});


describe('customer crud test', function(){

  it('should allow a customer to be posted and return customer', function(done){
    var customer = {'firstName':'test firstName', 'lastName':'test lastName'};
    agent.post('/api/customer')
    .send(customer)
    .expect(201)
    .end(function(err,res){
      if (err) {
        console.log(err);
        return done(err);
      }
      else{
        res.body.firstName.should.equal('test firstName');
        return done();
      }
      ;
    })
  })
})
