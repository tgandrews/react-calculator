# React Calculator
A simple react & flux calculator.

## Data flow
1. When a button is pressed then it triggers an action with the button's value.
1. This action reaches the store via the dispatcher.
1. The store passes this information to the calculator which updates state. The store will then ask the calculator for the new displayValue.
1. The store emits a change event which will trigger the Calculator component to rerender causing the display component (and therefore screen) to update.

## Getting started
To get started you need to run the following commands.

1. `npm install` - To install most dependencies
1. `npm install -g browserify` - This is only required to run, it is not required for testing.

## Testing - a sanity check
To run the unit tests you can run `npm test`.

Tests are written using [mocha](http://mochajs.org/), [chai](http://chaijs.com/) (expectations) and [sinon](http://sinonjs.org/) (for mocking). They run in node using [jsdom](https://github.com/tmpvar/jsdom).

Currently there are only unit level tests and no integration tests. Additionally the action and store are completely untested.

## Running the app
To run the app you need to run `npm start` and this will:

1. Copy all static resources (index.html and assets folder) to the built directory.
1. Run [browserify](http://browserify.org/) to bundle the JavaScript.
1. Finally, it starts a very simple web server on port 8000, so that you can view the app at [http://localhost:8000](http://localhost:8000).

## To Do - In order of importance:
1. Remove usage of python SimpleHTTPServer to static files from nginx or apache. Maybe deploy the app as a docker image.
1. There is no user logging on the server side or client side error tracking. These could both be third party libraries.
1. Support for landscape phones. Currently it requires a user to scroll to see all of the numpad on some screens.
1. Testing on windows and mobile phone - this only been tested on a Mac.
1. Testing of the Computation Store and action.
1. Additional integration tests are required as well, as there is no guarantee that the units work together.
1. Currently using pure css and not using less or sass but this is probably sufficient at the moment.
