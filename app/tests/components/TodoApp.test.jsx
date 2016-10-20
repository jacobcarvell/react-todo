var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var configureStore = require('configureStore');
import TodoList from 'TodoList';
var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should render TodoList', () => {
    var store = configureStore.configure();
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    var todoapp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todolist = TestUtils.scryRenderedComponentsWithType(todoapp, TodoList);

    expect(todolist.length).toEqual(1);
  });

});
