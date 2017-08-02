module.exports = function(promises, callback) {
  var found = 0;
  const preserved = new Array(promises.length);
  const resolved = [];
  const rejected = [];
  for(let i = 0, l = promises.length; i < l; i++) {
    promises[i].then(good => {
      resolved.push(good);
      preserved[i] = good;
      if(++found === l - 1) callback(preserved, resolved, rejected);
    }).catch(bad => {
      rejected.push(bad)
      preserved[i] = bad;
      if(++found === l - 1) callback(preserved, resolved, rejected);
   })
  }
}
