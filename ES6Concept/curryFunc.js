//Curry function/Higher Order Function(HOF)
function sum(x) {
  return function (y) {
    return x + y;
  };
}
console.log(sum(5)(10));

//kết hợp giữa curry func và closures
// generate increase id
function generateIncrement(startId = 1) {
  let id = startId;
  return function () {
    return id++;
  };
}
let getNextId = generateIncrement(10);
console.log(getNextId()); //10
console.log(getNextId()); //11
console.log(getNextId()); //12
console.log(getNextId()); //13
console.log(getNextId()); //14
