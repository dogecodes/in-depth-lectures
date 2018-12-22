# Static type checking

* Static type checkers are tools for checking your code types on compile time.
* You start writing your js with types and compiles it with those tools.
* They will complain about wrong types.
* There are few solutions for that:
  * [TypeScript](https://www.typescriptlang.org/) is developed by Microsoft.
  * [Flow](https://flow.org/) is developed by Facebook.
* In most of cases simply use TS, since it's more mature, has better support and large community.
* Flow works through Babel and is pretending it's a JS, but it's not.
* TS is pretending it's a superset of JS, but it's not. It's a separate language.
* 3rd-party libs require so called typings.
* [ReasonML](https://reasonml.github.io/) is OCaml which looks like JS. Good for hispters.
* There are more: Elm, ClojureScript, PureScript.

JavaScript:

```js
function add(a, b) {
  return a + b;
}

add(1, 1)   // 2
add('', 1)  // '1'
add([], 1)  // '1'
add([], {}) // '[object Object]'
```

TypeScript

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(1, 1)   // 2
add('', 1)  // failed to compile!
add([], 1)  // failed to compile!
add([], {}) // failed to compile!
```