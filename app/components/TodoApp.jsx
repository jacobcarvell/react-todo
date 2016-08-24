var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

var TodoApp = React.createClass({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
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
  handleAddTodo: function (text) {
    alert('New todo: ' + text);
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <Search onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
