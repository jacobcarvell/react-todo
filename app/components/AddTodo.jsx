var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var text = this.refs.item.value;

    if (text.length > 2) {
      this.refs.item.value = '';
      this.props.onAddTodo(text);
    } else {
      this.refs.item.focus();
    }
  },
  render: function () {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onSubmit}>
          <input type="text" placeholder="Enter new to do item" ref="item" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    )
  }
});

module.exports = AddTodo;
