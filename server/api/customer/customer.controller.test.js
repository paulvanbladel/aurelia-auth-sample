//this is meant to be a real unit test
var should = require('should');
var sinon = require('sinon');
describe('customer controller tests', function(){
	describe('Post tests', function(){
		it('should not allow a customer without lastName', function(){
			var user = {
   				 name: 'tj'
  				, pets: ['tobi', 'loki', 'jane', 'bandit']
			};
 
			user.should.have.property('name', 'tj');
			user.should.have.property('pets').with.lengthOf(4);
		})
	})
})