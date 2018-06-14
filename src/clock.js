var helpers = require('./helpers/');
var spell = require('./helpers/spell');

var writtenClock = function (hours, minutes) {
  var getTimeObject = helpers.getTimeObject;
  var writtenTime = spell.writtenTime;

  var timeObj = getTimeObject(hours, minutes);
  return writtenTime(timeObj);
};

module.exports = {
  writtenClock: writtenClock
};
