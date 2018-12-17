# Thunk

* Thunks are for handling async actions
* Under the hood it just checks if action is a function
* If action is a function it passes `dispatch`, `getState` and `extraArgument` in it
* `extraArgument` is good for passing additional information

Read more: https://github.com/reduxjs/redux-thunk

```js
function login() {
  return (dispatch, getState, extraArgument) => {
    dispatch({
      type: ...
    })
  }
}
```

