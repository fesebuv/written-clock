
var isAfternoon = function (hours) {
  if(hours >= 12) {
    return true;
  }
  return false;
}

var isMidnight = function (hours) {
  return hours === 0;
}

var getTimeOfDay = function (hours) {
  if(isAfternoon(hours)) {
    return 'p.m.';
  }
  return 'a.m.';
}

var getHour = function (hours) {
  if (isAfternoon(hours) && hours > 12) {
    return hours - 12;
  } else if (isMidnight(hours)) {
    return 12;
  }
  return hours;
}

var getTimeObject = function (hours, minutes) {
  var theHour = getHour(hours);
  var theMins = minutes;
  var timeOfDay = getTimeOfDay(hours);

  return {
    hour: theHour,
    min: theMins,
    timeofday: timeOfDay
  };
};

module.exports = {
  getTimeObject: getTimeObject
};
