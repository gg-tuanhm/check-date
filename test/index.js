var expect = require('chai').expect; // ecpect library
var check = require('../src/index.js'); // your module, test this

describe('CheckDate', function (){
	describe('checkDate()', function (){ //test max method of Math module
		it('return true when date is 28/02/2017', function (done){
			check.checkDate('28/02/2017', function (err, isCheck){
				expect(err).to.equal(null);
				expect(isCheck).to.equal(true);
				done();
			});
		});

		it('return false when date is 29/02/2017', function (done){
			check.checkDate('29/02/2017', function (err, isCheck){
				expect(err).to.equal(null);
				expect(isCheck).to.equal(false);
				done();
			});
		});

		it('return error when input is not date', function (done){
			check.checkDate('dd/02/2017', function (err, isCheck){
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('input must be a type date');
				done();
			});
		});

		it('return error when input is not date', function (done){
			check.checkDate('ddmmyyyy', function (err, isCheck){
				expect(err).to.not.equal(null);
				expect(err.message).to.equal('input must be a type date');
				done();
			});
		});

	});
});