var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk Augustus'
        }, {
          id: 2,
          text: 'Clean the caravan'
        }, {
          id: 3,
          text: 'Buy a vineyard'
        }, {
          id: 4,
          text: 'Make some wine'
        }
      ]
    };
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
