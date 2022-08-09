const Paint = function(litres){
    this.litres = litres;
}

Paint.prototype.checkIfEmpty = function(){
    return this.litres === 0;
};
Paint.prototype.empty = function(litres){
   const newLitres =  this.litres - litres
   this.litres = newLitres
};



module.exports = Paint;