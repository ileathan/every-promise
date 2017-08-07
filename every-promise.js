Promise.every = function(promises, callback) {
  var len;
  const preserved = new Array((len=promises.length));
  const resolved = [], rejected = [];
<<<<<<< HEAD
  (function recurs(found) {
    promises[found].then(good => {
      preserved[found] = good;
      resolved.push(good);
=======
  (function recurs(found){
    promises[found].then((good, bad) => {
      preserved[found] = good ? resolved.push(good) && good : rejected.push(bad) && bad;
>>>>>>> parent of 78cdfb0... allow concating when minifiying
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
