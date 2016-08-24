// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(5,5));
//
// var toAdd = [5, 5];
// console.log(add(...toAdd));
//
// var groupA = ['Tom', 'Dick'];
// var groupB = ['Harry'];
// var final = [...groupA, ...groupB];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greeter (name, age) {
  return "Hi " + name + ", you are " + age;
}

console.log(greeter(...person));
console.log(greeter(...personTwo));

var names = ['Mike', 'Ben'];
var final = ['Jacob', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
