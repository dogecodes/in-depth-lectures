//
// Memoize
//

function memoize(fn) {
  const cache = new Map();

  return (...args) => {
    const key = JSON.stringify(args);
    console.log(cache);

    if (cache.has(key)) {
      console.log('get result from cache', key);
      return cache.get(key);
    }

    console.log('calculate result and save to cache', key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const add = memoize((a,b) => a + b);

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));

console.log(add(5, 2));
console.log(add(5, 2));