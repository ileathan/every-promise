# promise-every
Currently javascript does not have a `Promise.every()` function, so here it is.

**1. You have an iterable of `Promises`. **

**2. You want to do something when they are all done.**

**3. You want all the data.**

# Code

```javascript
Promise.every(ARRAY_OF_PROMISES, function(resolved, rejected) {
  console.log(resolved) // array of resolved
  console.log(rejected) // array of rejected
});
```
Thats it!

# Instalation

```bash
npm install promise-every
```

You can also just copypaste this into your code:

```javascript
Promise.every = function(promises, callback) {
  var found = 0;
  const resolved = [];
  const rejected = [];
  for(let i = 0, l = promises.length; i < l; i++) {
    promises[i].then(good => {
      resolved.push(good);
      if(++found === l - 1) callback(resolved, rejected);
    }).catch(bad => {
      rejected.push(bad)
      if(++found === l - 1) callback(resolved, rejected);
   })
  }
}
```

# Dependencies

None.
