var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    expect = require('chai').expect,
    sinon = require('sinon'),
    Display = require('../../lib/components/display');

describe('Display component', function(){
  var sandbox, displayElement;

  before('render and locate element', function() {
    sandbox = sinon.sandbox.create();
    var renderedComponent = TestUtils.renderIntoDocument(
      <Display displayValue='1' />
    );

    var inputComponent = TestUtils.findRenderedDOMComponentWithClass(
      renderedComponent,
      'display'
    );

    displayElement = inputComponent.getDOMNode();
  });

  after('clear up sandbox', function () {
    sandbox.restore();
  });

  it('only child should be a h1', function() {
    var children = displayElement.childNodes;
    expect(children.length).to.equal(1);
    var firstChild = children[0];
    expect(firstChild.nodeName).to.equal('H1');
  });

  it('should show the value provided in the props', function () {
    var h1 = displayElement.childNodes[0];
    expect(h1.textContent).to.equal('1');
  });
});
