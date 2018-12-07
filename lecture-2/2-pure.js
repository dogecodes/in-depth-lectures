//
// Pure functions
//

// What to remember:
// * Pure functions don't have side-effects inside themselves
//    * result depends only on input values
//    * No timers
//    * No requests
//    * No mutations
//    * No console.logs
// * Use React.PureComponent to make a component pure
// * React.PureComponent implements it with a shallow prop and state comparison.
// * Use pure() to make functional component pure

// const f = obj => {
//   obj.foo = 1;
//   return { ...obj, foo: 1 };
// };

// const g = (...text) => console.log(...text);

// const h = (secs, done) => setTimeout(done, secs * 1000);

// const j = val => val++;

// const k = val => val + 1;

// Pure React component
// class Component extends React.PureComponent {
//   shouldComponentUpdate() {
//     // ...
//   }

//   render() {
//     return <h1>I'm pure component!</h1>;
//   }
// }

// pure(props => <h1>I'm pure component!</h1>);
