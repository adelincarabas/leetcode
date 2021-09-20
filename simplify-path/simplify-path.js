/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let paths = path.split('/')
    paths = paths.filter(a=>{return a!== ''})
    let stack = []
    for (let i = 0; i < paths.length; i++) {
      if(paths[i] === "..") {
        stack.pop();
      }else if(paths[i] === "."){
        continue;
      }else {
        stack.push(paths[i]);
      }
    }
    return "/" + stack.join("/")
};