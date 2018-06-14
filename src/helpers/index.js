
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
