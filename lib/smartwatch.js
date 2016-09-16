var Watch = require('./Watch.js');
var Tablet = require('./Tablet.js');


function SmartWatch () {
  Watch.call(this);
}
SmartWatch.prototype = Object.create(Watch.prototype, {
  constructor : SmartWatch
});
function extend(SmartWatch, Tablet){
  for (var k in Tablet) {
    SmartWatch[k] = Tablet[k];
  }
  return SmartWatch;
}
extend(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;
