//
// Object.is()
//

// What to remember:
// * Use Object.is for more strict comparison

// +0 and -0
console.log(+0 == -0); // true
console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

// NaN
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true

// Numbers & Strings
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(Object.is(5, 5)); // true
console.log(Object.is(5, '5')); // false
