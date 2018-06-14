var expect = require('chai').expect;
var clock = require('../src/clock').writtenClock;

var getCurrentTime = function () {
  var outDate = new Date();
  return clock(outDate);
};

describe('clock', function () {
  it('should be a method', function () {
    expect(clock).to.be.a('function');
  });

  describe('current time', function () {
    it('should spell out current time: "' + getCurrentTime() + '"', function () {
      expect(getCurrentTime()).to.be.ok;
    });
  });


  describe('verify times', function () {
    it('should return It\'s twelve a.m.', function () {
      var date = new Date();
      date.setHours(0,0,0);

      var writtenTime = clock(date);
      expect(writtenTime).to.equal('It\'s twelve a.m.');
    });

    it('should return It\'s twelve p.m.', function () {
      var date = new Date();
      date.setHours(12,0,0);

      var writtenTime = clock(date);
      expect(writtenTime).to.equal('It\'s twelve p.m.');
    });

    it('should return It\'s one fifteen p.m.', function () {
      var date = new Date();
      date.setHours(13,15,0);

      var writtenTime = clock(date);
      expect(writtenTime).to.equal('It\'s one fifteen p.m.');
    });

    it('should return It\'s one fifteen a.m.', function () {
      var date = new Date();
      date.setHours(1,15,0);

      var writtenTime = clock(date);
      expect(writtenTime).to.equal('It\'s one fifteen a.m.');
    });

    it('should return It\'s one oh seven a.m.', function () {
      var date = new Date();
      date.setHours(1,7,0);

      var writtenTime = clock(date);
      expect(writtenTime).to.equal('It\'s one oh seven a.m.');
    });

    it('should return It\'s one oh seven p.m.', function () {
      var date = new Date();
      date.setHours(13,7,0);

      var writtenTime = clock(date);
      expect(writtenTime).to.equal('It\'s one oh seven p.m.');
    });
  });

});
