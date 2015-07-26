var React = require('react');

module.exports = React.createClass({
  displayName: 'Display',

  render: function() {
    return (
      <div className="display">
        <h1>{this.props.displayValue}</h1>
      </div>
    );
  }
});
