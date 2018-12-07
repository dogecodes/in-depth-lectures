//
// Object literals
//

// What to remember:
// * use shorthand props for defining key with the name of variable
// * use method shorthand to avoid writing function keyword
// * use computed names props for dynamic prop keys

const name = 'Doge';
const age = 1;

const methodName = 'say' + 'Hi';

const obj = {
  // shorthand
  name,
  age,

  // method
  getName() {
    return this.name;
  },

  getAge() {
    return this.age;
  },

  [methodName](to) {
    return `Hello, ${to}! I'm ${this.name}!`;
  }
};

console.log(obj.sayHi('student'));
