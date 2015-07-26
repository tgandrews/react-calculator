var React = require('react');
var Button = require('./button');
var Display = require('./display');

var ComputationStore = require('../stores/computation-store');
var ButtonPressAction = require('../actions/key-press-action');

function getStateFromStore() {
  return {
    displayValue: ComputationStore.getDisplayValue()
  };
};

module.exports = React.createClass({
  displayName: 'Calculator',

  // Default values
  getDefaultProps: function () {
    return {
      numbers: [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ],
      specialKeys: [ 'AC', '+', '=' ]
    };
  },

  getInitialState: function () {
    return getStateFromStore();
  },

  // Component life cycle
  componentDidMount: function () {
    ComputationStore.addChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState(getStateFromStore());
  },

  componentWillUnmount: function () {
    ComputationStore.removeChangeListner(this._onChange);
  },

  render: function() {
    return (
      <div className="calculator">
        <Display key="display" displayValue={this.state.displayValue} />
        <div className="numpad">
          {
            this.props.numbers.map(function (value) {
              return <Button key={value} value={value} action={ButtonPressAction} />
            })
          }
        </div>
        <div className="special-keys">
          {
            this.props.specialKeys.map(function (value) {
              return <Button key={value} value={value} action={ButtonPressAction} />
            })
          }
        </div>
      </div>
    );
  }
});
