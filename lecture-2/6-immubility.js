//
// Immutability
//

// What to remember:
// * It's like evolution
// * You shouldn't mutate props of current object
// * You have to create a new child with changed props
// * Use Immutable.js with Redux

const frog = { color: 'green', sound: 'ribbit ribbit' };
Object.freeze(frog);
frog.color = 'red';
frog.sound = 'hau hau';
console.log(frog);

const redfrog = { ...frog, color: 'red' };
console.log(redfrog);
