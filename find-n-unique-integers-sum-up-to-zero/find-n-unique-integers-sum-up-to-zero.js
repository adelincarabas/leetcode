
var sumZero = function(n) {
    let result = [];
  if(n % 2 !== 0) {
    result.push(0);
  }

  for(let i = 0; i < Math.floor(n/2); i++) {
    result.push(n-i,-n+i)
  }
    return result;
};
