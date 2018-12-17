# New Context

* Use `React.createContext(defaultValue)` to create context
* Use created context as a `MyContext.Provider` for providing data
* Use create context as `MyContext.Consumer` for retrieving data
* `children` of `MyContext.Consumer` have to be a render function
* You can use consumer at any nesting level

Read more: https://reactjs.org/docs/context.html

## Homework

Create a simple theme provider for an App with `light` and `black` theme.
Implement ability to toggle themes.
Pass colors through new context API.
