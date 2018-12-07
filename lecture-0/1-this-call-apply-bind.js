//
// this, call, apply, bind
//

// What to remember:
// * params is what declared in function
// * args is what actually passed
// * this points to current scope
// * apply takes args as array
// * call takes args as params
// * bind returns a function

function add(c, d) {
  console.log(this.a + this.b + c + d);
}

// function main() {
//   this.a = 1;
//   this.b = 2;

//   add();
// }

// main();

// apply, call

const foo = { a: 10, b: 20 };

// add.apply(foo, [1, 5]);
// add.call(foo, 1, 5);

// bind

// const f = add.bind(foo, 1, 2);

// f(123, 123);
