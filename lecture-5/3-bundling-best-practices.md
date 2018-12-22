# Bundling best practice

* Optimize JS ([babel/minify](https://github.com/babel/minify), [UglifyJS](https://github.com/mishoo/UglifyJS), [Google Clojure Compiler](https://developers.google.com/closure/compiler/)).
* Use `NODE_ENV=production` — it helps to omit development code.
* Use code splitting and dynamic imports for loading code on demand.
* Use `defer` for the first bundle.
* Use `babel-preset-env` for compiling only what necessary.
* Don’t serve `babel-polyfill` in modern browsers.
* Use [BrowsersList](https://github.com/browserslist/browserslist) for defining supported envs.
* Don’t load polyfills multiple times.
* Decrease the render-blocking CSS. Decouple you _critical_ CSS.
* Remove duplicated styles.

Webpack workshop by Ivan Akulov: https://iamakulov.com/pages/webpack-workshop/
Article with tips about optimization for Webpack: https://iamakulov.com/notes/webpack-front-end-size-caching/