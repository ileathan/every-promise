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
  const preserved = new Array((len=promises.length));
  const resolved = [], rejected = [];
<<<<<<< HEAD
  (function recurs(found) {
=======
  (function recurs(found){
    promises[found].then((good, bad) => {
      preserved[found] = good ? resolved.push(good) && good : rejected.push(bad) && bad;
      if(++found === len) callback(preserved, resolved, rejected);
      else recurs(found)
    })
  })(0)
}
```

Or useing the traditional `.then().catch()`.

```javascript
Promise.every = function(promises, callback) {
  var len;
  const preserved = new Array((len=promises.length));
  const resolved = [], rejected = [];
  (function recurs(found){
>>>>>>> parent of 78cdfb0... allow concating when minifiying
    promises[found].then(good => {
      preserved[found] = good;
      resolved.push(good);
      if(++found === len) callback(preserved, resolved, rejected);
      else recurs(found)
    }).catch(bad => {
      preserved[found] = bad;
      rejected.push(bad)
      if(++found === len) callback(preserved, resolved, rejected);
      else recurs(found)
   })
  })(0)
}
```

# Dependencies

None.
