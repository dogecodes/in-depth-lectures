//
// Iterators & generators
//

// What to remember:
// * Iterators are objects with an interface for iterating
// * Iterators can be created with generators
// * Iterators have next(), throw() and return() methods
// * You can pass value back to iterator as an argument to methods
// * You can iterate over iterator with for-of
// * You can create your own iterable objects with Symbol.iterator

// Dealing with generator
// function* gen() {
//   const a = yield 1;
// }

// Iterable example
class Collection {
  constructor(list) {
    this.list = list;
  }

  push(value) {
    this.list.push();
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.list.length; i += 1) {
      yield this.list[i];
    }
  }
}

const collection = new Collection([1, 2, 3, 4, 5]);

for (let item of collection) {
  console.log(item);
}

// Async/Await

co(function*() {
  const content = yield readFile("file.txt");

  console.log(content);
});
