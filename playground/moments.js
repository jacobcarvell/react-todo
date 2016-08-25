var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1472092393;
var currentMoment = moment.unix(timestamp);

console.log('Current moment', currentMoment.format("MMMM Do, Y @ hh:mm a"));
