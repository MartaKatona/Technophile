function Watch () {
  this.bodyPart  = null;
}
Watch.prototype.wear = function(bodyPart){
  this.bodyPart = bodyPart;
  return this.bodyPart;
};
module.exports = Watch;
