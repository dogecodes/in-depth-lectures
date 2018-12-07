//
// Symbols
//

// What to remember:
// * Symbol is a new primitive
// * Symbol doesn't have literal form
// * Use Symbol.for for sharing symbols
// * Use Object.getOwnPropertySymbols to get all of the symbols
// * Well known symbols expose internals of JS
//   More: https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Well-known_symbols

// console.log(Symbol("foo") === Symbol("foo"));

const firstName = Symbol.for("test");
const person = {
  [firstName]: "Doge"
};

// console.log(Symbol.keyFor(firstName));

// console.log(Object.getOwnPropertySymbols(person));

// console.log(person[Symbol.for("test")]);

// const shit = {
//   get [Symbol.toStringTag]() {
//     return "💩";
//   }
// };

// console.log(Object.prototype.toString.call(shit));

// Symbol.for
// Symbol.keyFor
// const symbols = Object.getOwnPropertySymbols(obj)
