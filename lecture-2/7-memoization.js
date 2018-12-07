//
// Memoization
//

// What to remember:
// * Cache for function calculations
// * If we have calculated value before, just retrieve it from cache
// * Use pure in React apps
// * Use reselect in Redux apps

function memoize(fn) {
  return (...args) => {
    // ...
  };
}

// const add = memoize(arr => arr.reduce((a, b) => a + b));

// const a = [1, 2, 4, 6];

console.log(add(a));
console.log(add(a));
