//
// Arrow-functions
//

// What to remember:
// * No this, super, arguments or new.target – значення this, super, arguments та new.target
// * Those are inherited from closest parent regular function
// * Cannot be called with new
// * No proto
// * You cannot change this
// * No arguments
// * Cannot be used as generator
// * Can be async

const add = (a = 0, b = 0) => a + b;

console.log(add());
