const Room = function(areaInSquareMeters){
    this.areaInSquareMeters = areaInSquareMeters;
    this.painted = false;
}

Room.prototype.roomPainted = function(){
  this.painted = true;
};

module.exports = Room;