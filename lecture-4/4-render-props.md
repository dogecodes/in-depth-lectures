# Render props

react-router
final-form
formik

```js
<Route path="/foo" component={MyComponent} />
<Route path="/foo" render={() => <h1>MyComponent</h1>} />

<Field>
  {({ input, meta, ...props }) => (
    <input {...input} />
  )}
</Field>
```

* Component can have `component` prop
* Component can have `render` prop
* Component can interpret `children` as a function

Read more: https://reactjs.org/docs/render-props.html