var React = require('react');
window.React = React;

var CalculatorApp = require('./components/calculator');

React.render(
  <CalculatorApp />,
  document.getElementById('app')
);
