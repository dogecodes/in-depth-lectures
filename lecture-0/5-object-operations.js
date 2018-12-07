//
// Object operations
//

// What to remember:
// * Object.assign assigns object props from right to left
// * ... spreads the object,
// * Object.seal prevent adding new props
// * Object.freeze freeze an object

const additionalProps = {
  prop1: 'blah',
  prop2: 'blahblah',
  prop3: 'blahblahblah'
};

const foo = {
  name: 'foo'
};

// Object.seal(foo);

// Object.freeze(foo);
