
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

var timepartOutput = function(timepart) {
  if (timepart) {
    return ' ' + timepart;
  }
  return '';
}

var writtenTime = function (writtenHourObj) {
  var hour = writtenHourObj.hour;
  var min = writtenHourObj.min;
  var timeofday = writtenHourObj.timeofday;

  var theHour = writtenHour[hour];
  var theMins = writtenMinutes[min];
  var timeOfDay = timeofday;


  return 'It\'s'
    + timepartOutput(theHour)
    + timepartOutput(theMins)
    + timepartOutput(timeOfDay);
};

module.exports =  {
  writtenTime: writtenTime
};
