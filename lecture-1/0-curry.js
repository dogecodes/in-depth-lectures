//
// Curry in ES6
//

function curry(fn) {
  return function currified(...args) {
    if (args.length === 0) return currified;
    if (args.length >= fn.length) return fn.apply(fn, args);

    return curry(fn.bind(fn, ...args));
  };
}

const abc = curry((a, b, c) => {
  console.log({ a, b, c });
});

abc();
abc(1, 2, 3);
abc(1, 2)(3);
abc(1)(2, 3);
abc(1)(2)(3);
