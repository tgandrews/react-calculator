var EventEmitter = require('events').EventEmitter;

var Dispatcher = require('../dispatcher');
var calculator = require('../calculator');

var CHANGE_EVENT = 'change';

var ComputationStore = Object.assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getDisplayValue: function () {
    return calculator.getDisplayValue();
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  }
});

ComputationStore.dispatchToken = Dispatcher.register(function(action) {
  switch(action.type) {
    case 'KEY_PRESS':
      calculator.key(action.value);
      ComputationStore.emitChange();
      break;
  }
});

module.exports = ComputationStore;
