var Phone = require('./Phone.js');
var Tablet = require('./Tablet.js');
var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function SmartPhone (phoneNumber) {
  this.phoneNumber = phoneNumber;
  Phone.call(this, phoneNumber);
  GameConsole.call(this, 'Smart Phone');
}
SmartPhone.prototype = Object.create(Phone.prototype, {
  constructor : SmartPhone
});

function extend1(SmartPhone, Tablet){
  for (var k in Tablet) {
    SmartPhone[k] = Tablet[k];
  }
  return SmartPhone;
}

function extend2(SmartPhone, GameConsole){
  for (var k in GameConsole) {
    SmartPhone[k] = GameConsole[k];
  }
  return SmartPhone;
}

function extend3(SmartPhone, WebBrowser){
  for (var k in WebBrowser) {
    SmartPhone[k] = WebBrowser[k];
  }
  return SmartPhone;
}

extend1(SmartPhone.prototype, Tablet.prototype);
extend2(SmartPhone.prototype, GameConsole.prototype);
extend3(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;
