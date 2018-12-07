//
// Composition
//

// What to remember:
// * Composition is when output of the func is passed as input to another

const f = val => val;
const g = val => val;

f(g(1));

// Example

const neg = val => -val;
const add = (a, b) => a + b;
const substr = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const inc = val => add(val, 1);
const dec = val => add(val, -1);

// ((4 + (7 * 0)) - (1 / 7))

const res = substr(add(4, multiply(7, 0)), divide(1, 7));
console.log(res);
