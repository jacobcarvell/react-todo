var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('Should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should add todo to the todos state', () => {
    var text = "Test Text";
    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);

    todoapp.setState({todos: []});
    todoapp.handleAddTodo(text);

    expect(todoapp.state.todos[0].text).toBe(text);
    expect(todoapp.state.todos[0].createdAt).toBeA('number');
  });

  it('Should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 1,
      text: 'test',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    };
    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);

    todoapp.setState({todos: [todoData]});
    expect(todoapp.state.todos[0].completed).toBe(false);

    todoapp.handleToggle(1);
    expect(todoapp.state.todos[0].completed).toBe(true);
    expect(todoapp.state.todos[0].completedAt).toBeA('number');

  });

  it('Should remove completedAt when set from true to false', () => {
    var todoData = {
      id: 1,
      text: 'test',
      completed: true,
      createdAt: 0,
      completedAt: 0
    };
    var todoapp = TestUtils.renderIntoDocument(<TodoApp />);

    todoapp.setState({todos: [todoData]});

    todoapp.handleToggle(1);
    expect(todoapp.state.todos[0].completedAt).toBeA('undefined');

  });

});
