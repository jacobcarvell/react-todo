var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
  it('Should exist', () => {
    expect(AddTodo).toExist();
  })

  it('Should dispatch ADD_TODO when valid todo text', () => {
    var itemText = 'jacob'
    var action = actions.startAddTodo(itemText);
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.item.value = itemText;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('Should not dispatch ADD_TODO when invalid todo text', () => {
    var spy = expect.createSpy();
    var addtodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
    var $el = $(ReactDOM.findDOMNode(addtodo));

    addtodo.refs.item.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });

});
