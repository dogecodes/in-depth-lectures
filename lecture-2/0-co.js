//
// Co-routines with generators and iterators
//

// Co
function co(generator) {
  // create an iterator from generator
  const task = generator();

  // go to the first yield
  let result = task.next();

  // recurring function for iterating over next()'s
  function step() {
    // if there's anything to do
    if (!result.done) {
      // wrap value in promise and resolve it
      Promise.resolve(result.value)
        .then(value => {
          result = task.next(value);
          step();
        })
        .catch(error => {
          result = task.throw(error);
          step();
        });
    }
  }

  // make a first step
  step();
}

// Main

const fs = require('fs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

// const readFile = () => {
//   throw new Error('Test');
};

co(function*() {
  const buffer = yield readFile(__filename);
  const contents = yield buffer.toString();
  console.log(contents);
  console.log('Done');
});
