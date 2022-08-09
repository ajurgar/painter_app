const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function(){
    let paint;

    beforeEach(function(){
        paint = new Paint(500);
    })
    it('should have a number of litres of paint', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 500)
    })
    it('should be able to check if it is empty', function(){
        const actual = paint.checkIfEmpty();
        assert.strictEqual(actual, false)
    })
    it('should be able to empty itself of paint', function(){
        paint.empty(300);
        assert.strictEqual(paint.litres, 200)
    })
})