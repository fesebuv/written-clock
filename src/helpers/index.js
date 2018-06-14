
var NOON = 12;
var MIDNIGHT = 0;

var isAfternoon = function (hours) {
  if(hours >= NOON) {
    return true;
  }
  return false;
}

var isMidnight = function (hours) {
  return hours === MIDNIGHT;
}

var getTimeOfDay = function (hours) {
  if(isAfternoon(hours)) {
    return 'p.m.';
  }
  return 'a.m.';
}

var getHour = function (hours) {
  if (isAfternoon(hours) && hours > NOON) {
    return hours - NOON;
  } else if (isMidnight(hours)) {
    return NOON;
  }
  return hours;
}

var getTimeObject = function (dateObj) {
  var date = new Date(dateObj);
  var hours = date.getHours();
  var minutes = date.getMinutes();

  return {
    hour: getHour(hours),
    min: minutes,
    timeofday: getTimeOfDay(hours)
  };
};

module.exports = {
  getTimeObject: getTimeObject
};
