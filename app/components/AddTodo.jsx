var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var text = this.refs.item.value;

    if (text.length > 2) {
      this.refs.item.value = '';
      dispatch(actions.startAddTodo(text));
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

export default connect()(AddTodo);
