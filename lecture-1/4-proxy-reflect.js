//
// Proxy & Reflect
//

// What to remember:
// * Proxies help to deal trap operations
// * Reflect help to replace trapped operations with custom logic
// * Neither Proxy nor Reflect can be polyfilled

// Proxy trap               Overrides behavior                Default behavior
// -------------------------------------------------------------------------------------
// get                      Reading property                  Reflect.get()
// set                      Writing property                  Reflect.set()
// has                      Operator in                       Reflect.has()
// deleteProperty           Operator delete                   Reflect.deleteProperty()
// getPrototypeOf           Object.getPrototypeOf()           Reflect.getPrototypeOf()
// setPrototypeOf           Object.setPrototypeOf()           Reflect.setPrototypeOf()
// isExtensible             Object.isExtensible()             Reflect.isExtensible()
// preventExtensions        Object.preventExtensions()        Reflect.preventExtensions()
// getOwnPropertyDescriptor Object.getOwnPropertyDescriptor() Reflect.getOwnPropertyDescriptor()
// defineProperty	          Object.defineProperty()           Reflect.defineProperty
// ownKeys                  Object.keys,
//                          Object.getOwnPropertyNames(),     Reflect.ownKeys()
//                          Object.getOwnPropertySymbols()
// apply                    Function call                     Reflect.apply()
// construct                Function call with new            Reflect.construct()

const target = {};

const proxy = new Proxy(target, {
  set(target, prop, value, receiver) {
    console.log(target, prop, value, receiver);

    Reflect.set(target, prop, value, receiver);
  }
});
