//
var fizzBuzz = function(n) {
  let b = [];
    for(i = 1; i <=n; i++) {
      if(i % 3 == 0 && i % 5 == 0){
        b.push("FizzBuzz");
      }else if(i % 3 == 0){
        b.push("Fizz");
      }else if(i % 5 == 0){
        b.push("Buzz");
      }else{
      b.push(i.toString());
      }
    }
    return b;
};
