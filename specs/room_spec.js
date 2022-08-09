const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    let room;
    
    beforeEach(function(){
        room = new Room(200);
    });

    it('should have a square meters', function(){
        const actual = room.areaInSquareMeters;
        assert.strictEqual(actual, 200)

    })
    it('should start not painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false)

    })
    it('should be able to be painted', function(){
        room.roomPainted();
        const actual = room.painted;
        assert.strictEqual(actual, true)

    })
});
