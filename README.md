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
  var found = 0;
  const preserved = new Array(promises.length);
  const resolved = [];
  const rejected = [];
  for(let i = 0, l = promises.length; i < l; i++) {
    promises[i].then(good => {
      preserved[i] = good;
      resolved.push(good);
      if(++found === l - 1) callback(preserved, resolved, rejected);
    }).catch(bad => {
      preserved[i] = bad;
      rejected.push(bad)
      if(++found === l - 1) callback(preserved, resolved, rejected);
   })
  }
}
```

# Dependencies

None.
