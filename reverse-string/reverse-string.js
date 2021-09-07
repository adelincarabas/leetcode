/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  let b = "";
    for(let i = s.length-1; i >= 0; i--) {
      b = b + s[i];
    }
    for(i = 0; i < s.length; i++) {
      s[i] = b[i];
    }
};