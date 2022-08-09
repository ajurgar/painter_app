const assert = require('assert');
const Decorator = require('../decorator.js');
const Room = require('../room.js');
const Paint = require('../paint.js');

describe('Decorator', function(){
 let decorator;
 let room;
 let paint;

 beforeEach(function(){
    decorator = new Decorator()
    room = new Room(350)
    paint = new Paint(500)
 })

     it('should be able to add a can of paint', function(){
        decorator.addCanOfPaint(paint)
        assert.strictEqual(decorator.paintStock.length, 1);
     })
     it('should be able to calculate total litres in stock', function(){
        decorator.addCanOfPaint(300)
        decorator.addCanOfPaint(300)
        const actual = decorator.totalLitres()
        assert.strictEqual(actual, 600);
     })
     it('should calculate whether is has enough paint to paint the room',function(){
        decorator.addCanOfPaint(300)
        decorator.addCanOfPaint(300)
        decorator.totalLitres()
        const actual = decorator.enoughPaint(room.areaInSquareMeters)
        assert.strictEqual(actual, true)
     })
     it('should be able to paint room if has enough paint in stock', function(){
        decorator.addCanOfPaint(paint.litres)
        const actual = decorator.paintRoom(room.areaInSquareMeters)
        assert.strictEqual(actual, 150)
     })
})