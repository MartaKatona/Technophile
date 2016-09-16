var GameConsole = require('./GameConsole.js');
var WebBrowser = require('./WebBrowser.js');

function NintendoDS () {
  GameConsole.call(this, 'Nintendo DS');
}
NintendoDS.prototype = Object.create(GameConsole.prototype, {
  constructor : NintendoDS
});

function extend(NintendoDS, WebBrowser){
  for (var k in WebBrowser) {
    if (WebBrowser.hasOwnProperty(k)) {
      NintendoDS[k] = WebBrowser[k];
    }
  }
  return NintendoDS;
}
extend(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;
