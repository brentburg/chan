
var chan = require('../chan');
var co = require('co');

var ch = chan();

co(function *(){
  var n;
  while (n = yield ch) console.log(n);
})();

co(function *(){
  var n = 50;
  while (n--) ch(n);
})();