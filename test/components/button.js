var React = require('react/addons'),
    TestUtils = React.addons.TestUtils,
    expect = require('chai').expect,
    sinon = require('sinon'),
    Button = require('../../lib/components/button');

describe('Button component', function(){
  var sandbox, buttonElement;

  var action = {
    create: function () {}
  };

  before('render and locate element', function() {
    sandbox = sinon.sandbox.create();
    var renderedComponent = TestUtils.renderIntoDocument(
      <Button action={action} value='1' />
    );

    // Searching for <input> tag within rendered React component
    // Throws an exception if not found
    var inputComponent = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'button'
    );

    buttonElement = inputComponent.getDOMNode();
  });

  after('clear up sandbox', function () {
    sandbox.restore();
  });

  it('<button> should be of type "button"', function() {
    expect(buttonElement.getAttribute('type')).to.equal('button');
  });

  it('should trigger a create on the action provided with it\'s value', function () {
    sandbox.stub(action, 'create');
    TestUtils.Simulate.click(buttonElement);
    expect(action.create.callCount).to.equal(1);
    expect(action.create.calledWith('1')).to.be.true;
  });
});
