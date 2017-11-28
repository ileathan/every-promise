# promise-every
Currently javascript does not have a `Promise.every()` function, so here it is.

**1. You have an iterable of **`Promises`**.**

**2. You want to do something when they are all done.**

**3. You want all the data.**

# Code

```javascript
Promise.every = require('every-promise');
Promise.every(ARRAY_OF_PROMISES, function(finished) {
  console.log(finished) // array of finished promises
});
```
Thats it!

If you want to access just the resolved or rejected promises the callback is passed three parameteres `finished, resolved, rejected`.
In that order, `finished` will contain both resolved and rejected promises in the order you provided them in.

# Instalation

```bash
npm install every-promise
```

You can also just copypaste this into your code:

```javascript
Promise.every = function(promises, callback) {
  var len;
  const preserved = new Array(len = promises.length);
  const resolved = [], rejected = [];
  (function recurs(found){
    promises[found].then(good => {
      preserved[found] = resolved.push(good) && good;
      ++found === len ? callback(preserved, resolved, rejected) : recurs(found)
    }, bad => {
      preserved[found] = rejected.push(bad) && bad;
      ++found === len ? callback(preserved, resolved, rejected) : recurs(found)
    })
  })(0)
};
```

Or useing the traditional `.then().catch()`.

```javascript
Promise.every = function(promises, callback) {
  var len;
  const preserved = new Array(len = promises.length);
  const resolved = [], rejected = [];
  (function recurs(found){
    promises[found].then(good => {
      preserved[found] = good;
      resolved.push(good);
      ++found === len ? callback(preserved, resolved, rejected) : recurs(found)
    }).catch(bad => {
      preserved[found] = bad;
      rejected.push(bad)
      ++found === len ? callback(preserved, resolved, rejected) : recurs(found)
   })
  })(0)
};
```

# Dependencies

None.
