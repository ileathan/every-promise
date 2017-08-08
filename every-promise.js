module.exports = function(promises, callback) {
  var len;
  const preserved = new Array((len = promises.length));
  const resolved = [], rejected = [];
  (function recurs(found){
    promises[found].then(good => {
      preserved[found] = resolved.push(good) && good;
      if(++found === len) callback(preserved, resolved, rejected);
      else recurs(found)
    }, bad => {
      preserved[found] = rejected.push(bad) && bad;
      if(++found === len) callback(preserved, resolved, rejected);
      else recurs(found)
    })
  })(0)
};
