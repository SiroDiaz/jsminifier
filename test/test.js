var JSMinifier = require('../dist/jsminifier'),
	chai = require('chai'),
	assert = chai.assert;

describe('Test for Minify method', function() {
	it('Should be equal the minified file', function() {
		var minifier = new JSMinifier('./test/javascripts/a.js');
		assert.equal(minifier.minify(), 'var a = "hello";');
	});

	it('Should not be equal. Semicolon neccesary', function() {
		var minifier = new JSMinifier('./test/javascripts/a.js');
		assert.notEqual(minifier.minify(), 'var a = "hello"');
	});

	it('Should remove blank spaces', function() {
		var minifier = new JSMinifier('./test/javascripts/b.js');
		assert.equal(minifier.minify(), 'var a = 20;');
	});

	it('Should not put semicolon in an array separated by new lines', function() {
		var minifier = new JSMinifier('./test/javascripts/c.js');
		assert.equal(minifier.minify(), 'var a = [1,2,3];');
	});

	it('Should not put semicolon in the subarray', function() {
		var minifier = new JSMinifier('./test/javascripts/d.js');
		assert.equal(minifier.minify(), 'var a = [1,2,[2, 3, 4]];');
	});

	it('Should concat files and minify them', function() {
		var minifier = new JSMinifier(['./test/javascripts/b.js', './test/javascripts/d.js']);
		assert.equal(minifier.minify(), 'var a = 20;var a = [1,2,[2, 3, 4]];');
	});
});