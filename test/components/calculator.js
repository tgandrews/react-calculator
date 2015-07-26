var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    expect = require('chai').expect,
    sinon = require('sinon'),
    Calculator = require('../../lib/components/calculator');

describe('Calculator component', function(){
  var sandbox, calculatorElement, createElementSpy;

  before('render and locate element', function() {
    sandbox = sinon.sandbox.create();
    createElementSpy = sandbox.spy(React, 'createElement');

    var renderedComponent = TestUtils.renderIntoDocument(
      <Calculator />
    );

    var inputComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'calculator'
    );

    calculatorElement = inputComponent.getDOMNode();
  });

  after('clear up sandbox', function () {
    sandbox.restore();
  });

  it('should create 13 buttons', function() {
    expect(createElementSpy.withArgs(componentMatcher('Button')).callCount).to.equal(13);
  });

  it('should have two divs containing buttons', function () {
    var children = [
      { selector: '.numpad', count: 10 },
      { selector: '.special-keys', count: 3 }
    ];
    for (var i = 0; i < children.length; ++i) {
      var child = children[i];
      var childElement = calculatorElement.querySelector(child.selector);
      expect(childElement.nodeName).to.equal('DIV');
      expect(childElement.querySelectorAll('button').length).to.equal(child.count);
    }
  });

  it('should have a display element', function () {
    var displayElement = calculatorElement.querySelector('.display');
    expect(displayElement.nodeName).to.equal('DIV');
    expect(createElementSpy.withArgs(componentMatcher('Display')).callCount).to.equal(1);
  });
});

// Used for checking React.createElement calls to see if it was used to create a
// particular component
// This should be extracted if this test requirement comes up again.
function componentMatcher (componentName) {
  return sinon.match(function (firstParam) {
    return firstParam.displayName === componentName;
  });
}
