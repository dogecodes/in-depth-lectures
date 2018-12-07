//
// Promise
//

// What to remember:
// * Promises help to solve callback hell
// * Promise is like a placeholder for an operation
// * Promises have states (pending, resolved, rejected)
// * You can deal with promise's result in .then
// * .then(onResolve, onReject)
// * .catch(onReject) === .then(null, onReject)
// * Chain promise calls with .then
// * Whatever you return from .then, will be available in the next .then
// * Catch errors with .catch
// * You can return values from .catch
// * Create settled promises with Promise.resolve() and Promise.reject()
// * ALWAYS use catch at the end of promises chain
// * Use unhandledRejection

// Callback hell
// method1(function(err, result1) {
//   if (err) {
//     throw err;
//   }

//   method2(function(err, result2) {
//     if (err) {
//       throw err;
//     }

//     method3(function(err, result3) {
//       if (err) {
//         throw err;
//       }

//       method4(function(err, result4) {
//         if (err) {
//           throw err;
//         }

//         method(result1, result2, result3, result4);
//       });
//     });
//   });
// });

// Promise lifecycle
//
//           pending
//              ↓
//           ↙    ↘
//   resolved      rejected
// (fulfilled)

// const fs = require("fs");

// Creating settled promises
// const readFile = filename =>
//   new Promise((resolve, reject) => {
//     fs.readFile(filename, (err, content) => {
//       if (err) return reject(err);
//       resolve(content.toString());
//     });
//   });

// readFile(__filename)
//   .then(content => {
//     console.log(content);
//     return readFile("2-symbols.js");
//   })
//   .then(content => {
//     console.log(content);
//     return "this is fine";
//   })
//   .then(string => {
//     console.log(string);
//   })
//   .catch(reason => console.log({ reason }));

// Creating unsetted promises
// Promise.resolve("resolved!")
// Promise.reject(new Error("rejected!")).catch(reason => console.log(reason));

// promise.on("unhandledRejection", (error, promise) => {
//   console.log({ error, promise });
// });

// Thenables
// const thenable = {
//   then(resolve) {
//     resolve(42);
//   }
// };

// const promise = Promise.resolve(thenable);

const timeout = misec =>
  new Promise(resolve => {
    setTimeout(() => resolve(misec), misec);
  });

// All
// Promise.all([
//   Promise.resolve(1),
//   Promise.reject(2),
//   Promise.resolve(3),
//   Promise.resolve(4)
// ])
//   .then(results => console.log(results))
//   .catch(reason => console.log(reason));

// Race
// Promise.race([
//   timeout(1000),
//   timeout(200),
//   timeout(100),
//   timeout(300),
//   timeout(1200)
// ])
//   .then(results => console.log(results))
//   .catch(reason => console.log(reason));
