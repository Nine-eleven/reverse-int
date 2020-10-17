module.exports = function reverse (n) {
  
n= String (n);
let result = "";

if (n.includes("-")) { n = n.slice(1)} ;

for (let i = (n.length - 1); i >= 0 ; i -= 1) {
    result += n[i];
}

return +result;

}
