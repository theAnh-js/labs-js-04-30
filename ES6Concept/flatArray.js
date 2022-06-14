//v1
function flatArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];

  let flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      flattenArr = flattenArr.concat(arr[i]);
    } else {
      flattenArr = flattenArr.concat(flatArray(arr[i]));
    }
  }
  return flattenArr;
}
console.log(flatArray([12, 4, [345, [2343]]]));
console.log(flatArray([1, 2, 3, [4, 5, [6, 7]], 9, 10]));

//v2
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
console.log(flatten([1, 2, 3, [45, 5, [334]]])); //[ 1, 2, 3, 45, 5, 334 ]
