module.exports = function(promises, callback) {
  var len;
  const preserved = new Array((len=promises.length));
  const resolved = [], const rejected = [];
  (function recurs(found){
    promises[found].then((good, bad) => {
      preserved[found] = good ? resolved.push(good) && good : rejected.push(bad) && bad;
      if(++found === len) callback(preserved, resolved, rejected);
      else recurs(found)
    })
  })(0)
}
