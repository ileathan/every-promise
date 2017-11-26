module.exports = function(promises, callback) {
  var len;
  const preserved = new Array(len = promises.length);
  const resolved = [], rejected = [];
  (function recurs(found){
    promises[found].then(good => {
      preserved[found] = good && resolved.push(good) && good;
      ++found === len ? callback(preserved, resolved, rejected) : recurs(found)
    }, bad => {
      preserved[found] = bad && rejected.push(bad) && bad;
      ++found === len ? callback(preserved, resolved, rejected) : recurs(found)
    })
  })(0)
};
