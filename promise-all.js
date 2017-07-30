module.exports = function(promises, callback) {
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
