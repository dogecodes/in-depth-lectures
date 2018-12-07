//
// Recursion
//

// What to remember:
// * Recursion is when function calls itself
// * Recursion have to have exit condition
// * You can iterate over iterables with recursion

// Factorial example
// 0! = 1
// 1! = 1
// n! = n * (n - 1)!

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));
