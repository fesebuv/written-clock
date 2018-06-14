var helpers = require('./helpers/');
var spell = require('./helpers/spell');

var getTimeObject = helpers.getTimeObject;
var writtenTime = spell.writtenTime;

var writtenClock = function (dateObj) {
  var timeObj = getTimeObject(dateObj);
  return writtenTime(timeObj);
};

module.exports = {
  writtenClock: writtenClock
};
