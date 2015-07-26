var calculator = require('../lib/calculator');
var expect = require('chai').expect;

describe('Calculator', function () {
  afterEach('reset state', function () {
    calculator.clear();
  });

  describe('simple key input', function () {
    it('should return a single value', function () {
      calculator.key(1);
      expect(calculator.getDisplayValue()).to.equal(1);
    });

    it('should return a 10s value when a second digit is entered',  function () {
      calculator.key(1);
      calculator.key(6);
      expect(calculator.getDisplayValue()).to.equal(16);
    });

    it('should return a 100s value when a third digit is entered', function () {
      calculator.key(8);
      calculator.key(9);
      calculator.key(5);
      expect(calculator.getDisplayValue()).to.equal(895);
    });
  });

  describe('addition', function () {
    it('should start showing the new value after a plus', function () {
      calculator.key(9);
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      expect(calculator.getDisplayValue()).to.equal(5);
    });

    it('should show the combined value after another plus', function () {
      calculator.key(9);
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      calculator.key('+');
      expect(calculator.getDisplayValue()).to.equal(96);
    });

    it('should add a third part to the previous parts', function () {
      calculator.key(9);
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      calculator.key('+');
      calculator.key(6);
      calculator.key('+');
      expect(calculator.getDisplayValue()).to.equal(102);
    });
  });

  describe('equals', function () {
    it('should show the result of the additions', function () {
      calculator.key(9);
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      calculator.key('+');
      calculator.key(6);
      calculator.key('=');
      expect(calculator.getDisplayValue()).to.equal(102);
    });

    it('should clear the previous calculation if a digit is entered after the equals', function () {
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      calculator.key('=');
      calculator.key(5);
      calculator.key('+');
      expect(calculator.getDisplayValue()).to.equal(5);
    });

    it('should continue calculation if a + is entered after an equals', function () {
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      calculator.key('=');
      calculator.key('+');
      calculator.key(5);
      calculator.key('=');
      expect(calculator.getDisplayValue()).to.equal(11);
    });
  });

  describe('all clear', function () {
    it('should clear all state', function () {
      calculator.key(1);
      calculator.key('+');
      calculator.key(5);
      calculator.key('=');
      calculator.key('+');
      calculator.key(5);
      calculator.key('=');
      calculator.key('AC');
      expect(calculator.getDisplayValue()).to.equal(0);
    })
  });
});
