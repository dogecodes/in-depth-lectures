//
// High ordered functions
//

// What to remember:
// * A higher order function (HOF) is a function that takes a function as an argument, or returns a function.
// * Array methods are HOFs.
// * forEach is for iterating over array
// * map is for transforming array
// * filter is for filtering array
// * every, some, find, reduceRight
// * reduce is for reducing an array to single value
// * Array.from is for creating an array from iterable objects
// * Array.of is for creating an array form values
// * You can implement any array method with reduce

// HOF
const logger = f => {
  // enhance function somehow
  return (...args) => {
    console.log(...args);
    f(...args);
  };
};

// const add = (a, b) => a + b;
// const addl = logger(add);

// addl(1, 2);
// addl(1, 5);
// addl(7, 5);

//
// Array methods
//
const arr = [1, 2, 3, 4, 5, 6];

// forEach
// arr.forEach((el, index, array) => {
//   console.log(el, index, array);
// });

// map
// arr.map((el, index, array) => {
//   return el + 1;
// });

// filter
// arr.filter(value => value % 2 === 0);

// reduce
// arr.reduce((acc, el, index, arr) => {
//   return acc + el;
// });

// Array methods
const iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
};

// Array.from(iterable);
// Array.of(1, true, 'asfda', {})
