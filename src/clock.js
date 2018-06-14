var helpers = require('./helpers/');
var spell = require('./helpers/spell');

var writtenClock = function (dateObj) {
  var getTimeObject = helpers.getTimeObject;
  var writtenTime = spell.writtenTime;

  var timeObj = getTimeObject(dateObj);
  return writtenTime(timeObj);
};

module.exports = {
  writtenClock: writtenClock
};
