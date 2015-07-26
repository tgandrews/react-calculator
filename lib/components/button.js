var React = require('react');

module.exports = React.createClass({
  displayName: 'Button',

  render: function() {
    return (
      <button type="button" onClick={this.onClick}>{this.props.value}</button>
    );
  },

  /**
   * Event handlers
   **/
  onClick: function(event) {
    this.props.action.create(this.props.value);
  }
});
