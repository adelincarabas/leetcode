/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x<0) {
        return -reverse(-x);
    }
    let result = 0;
    while(x>0) {
      result = result * 10 + x % 10;
      x = Math.floor(x / 10);
    }
    if(result > 2**31 || result < 2**(-31))
    return 0;
    return result;
};