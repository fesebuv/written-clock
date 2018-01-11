
var writtenHour = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve'
];

var writtenMinutes = [
  '',
  'oh one',
  'oh two',
  'oh three',
  'oh four',
  'oh five',
  'oh six',
  'oh seven',
  'oh eight',
  'oh nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eightteen',
  'nineteen',
  'twenty',
  'twenty one',
  'twenty two',
  'twenty three',
  'twenty four',
  'twenty five',
  'twenty six',
  'twenty seven',
  'twenty eight',
  'twenty nine',
  'thrity',
  'thrity one',
  'thrity two',
  'thrity three',
  'thrity four',
  'thrity five',
  'thrity six',
  'thrity seven',
  'thrity eight',
  'thrity nine',
  'forty',
  'forty one',
  'forty two',
  'forty three',
  'forty four',
  'forty five',
  'forty six',
  'forty seven',
  'forty eight',
  'forty nine',
  'fifty',
  'fifty one',
  'fifty two',
  'fifty three',
  'fifty four',
  'fifty five',
  'fifty six',
  'fifty seven',
  'fifty eight',
  'fifty nine'
];

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

var timepartOutput = function(timepart) {
  if (timepart) {
    return ' ' + timepart;
  }
  return '';
}

var output = function (hour, min, timeofday) {
  return 'It\'s'
    + timepartOutput(hour)
    + timepartOutput(min)
    + timepartOutput(timeofday);
}

var writtenClock = function (hours, minutes) {
  var theHour = writtenHour[getHour(hours)];
  var theMins = writtenMinutes[minutes];
  var timeOfDay = getTimeOfDay(hours);

  return output(theHour, theMins, timeOfDay);
};

module.exports = {
  writtenClock: writtenClock
};
