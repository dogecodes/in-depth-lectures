//
// default, rest, destructuring
//

// What to remember:
// * assign default values to params
// * you can access all arguments with arguments
// * arguments is an array-like object, not an array
// * you can pack rest arguments into array with ...
// * you can use destructuring for retrieving props of object params

function add(a, b, { name, age, foo }) {
  console.log(a, b, name, age, foo);
}

add(1, 2, {
  name: 'Doge',
  age: 1,
  foo: 123
});
