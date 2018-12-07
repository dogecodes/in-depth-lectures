//
// let, const & var
//

// What to remember:
// * var hoists
// * const/let do not hoist
// * var scope is function
// * const/let scope is a block
// * const works only for references
// * const objects/arrays/etc are mutable
// * always use const
// * use let if const does not work
// * never use var

//
// scope with var

(function foo() {
  var a = 1;

  (function bar() {
    var b = 2;

    (function baz() {
      var c = 3;

      // console.log('baz', { a, b, c });
    })();

    // console.log('bar', { a, b, c });
  })();

  // console.log('foo', { a, b, c });
})();

//
// var value

function getVarValue(condition) {
  if (condition) {
    var value = 'blue';

    // some code

    console.log(value);
  } else {
    // value == undefined
    console.log(value);
  }

  // value == undefined
  console.log(value);
}

//
// let value

function getLetValue(condition) {
  if (condition) {
    let value = 'blue';

    // some code

    console.log(value);
  } else {
    // value doesn't exist

    console.log(value);
  }

  // value doesn't exist
  console.log(value);
}

getLetValue(false);
