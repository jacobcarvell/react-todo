var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyle')

ReactDOM.render(
  <p>Boilerplate project version 2</p>,
  document.getElementById('app')
);
