var Dispatcher = require('../dispatcher');

module.exports = {
  create: function (value) {
    Dispatcher.dispatch({
      type: 'KEY_PRESS',
      value: value
    });
  }
};
