var displayValue = 0;
var runningTotal = 0;
var digits = [];
var possiblyFinished = false;

function calculateDigits() {
  var value = 0;
  // Reverse modifies the existing array, so take a copy
  var reversed = digits.slice(0).reverse();
  for (var i = 0; i < reversed.length; i++) {
    var digit = reversed[i];
    var calculatedValue = digit * Math.pow(10, i);
    value += calculatedValue;
  }
  return value;
}

module.exports = {
  key: function (key) {
    if ((typeof key === 'number') && !isNaN(key)) {
      if (possiblyFinished) {
        this.clear();
        possiblyFinished = false;
      }
      digits.push(key);
      displayValue = calculateDigits();
    }
    else if (key === '+' || key === '=') {
      possiblyFinished = (key === '=');
      if (digits.length > 0) {
        runningTotal += displayValue;
      }
      displayValue = runningTotal;
      digits = [];
    }
    else if (key === 'AC') {
      this.clear();
    }
  },
  getDisplayValue: function () {
    return displayValue;
  },
  clear: function () {
    digits = [];
    displayValue = 0;
    runningTotal = 0;
  }
};
