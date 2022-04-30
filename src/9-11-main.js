// works in way the same 'filter' method:
function filterFunc(arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function'){
        return undefined;
    }

    let output = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i], i)) output.push(arr[i]);
    }
    
    return output;
}
console.log(filterFunc([1, 2, 3, 4], (numbers) => numbers > 2));
console.log(filterFunc([1, 2, 3, 4], (numbers) => numbers > 3));
console.log(filterFunc([1, 2, 3, 4], (numbers) => numbers > 30));
console.log(filterFunc({}, (numbers) => numbers > 30));