const Decorator = function(){
    this.paintStock = []
}

Decorator.prototype.addCanOfPaint = function(paint){
    this.paintStock.push(paint)
}

Decorator.prototype.totalLitres = function(){
    let total = 0;
    for(let can of this.paintStock){
        total += can;
        
    }
    return total
}
Decorator.prototype.enoughPaint = function(room){

if (this.totalLitres() >= room){
    return true;}
else { return false;

}
};

Decorator.prototype.paintRoom = function(room){
    if(this.enoughPaint(room) === true){
    let litresLeftAfterPainting = this.paintStock - room
    return litresLeftAfterPainting
};
}
;

module.exports = Decorator
