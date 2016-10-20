var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('Should exist', () => {
    expect(TodoList).toExist();
  });

  it('Should render one Todo component for each item', () => {
    var todos = [{
      id: 1,
      text: "Test 1",
      completed: false,
      completedAt: undefined,
      createdAt: 10
    }, {
      id: 2,
      text: "Test 2",
      completed: false,
      completedAt: undefined,
      createdAt: 10
    }];

    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedTodoList/>
      </Provider>
    )
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);
  });

  it('Should render an empty message if there are no items', () => {
    var todos = [];
    var todolist = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todolist));

    expect($el.find('.container__message').length).toBe(1);
  });

});
