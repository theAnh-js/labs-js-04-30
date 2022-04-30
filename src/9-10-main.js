
// works in way the same 'map' method:

function mapFunc(arr, callback) {
    if(!Array.isArray(arr) || typeof callback !== 'function')
    return undefined;

    const newArray = [];

    for(let i = 0; i < arr.length; i++){
        const newElement = callback(arr[i], i);
        newArray.push(newElement);
    }

    return newArray;
}
console.log(mapFunc([1, 2, 3, 4, 5], (element)=> element*10));
console.log(mapFunc({}, (element)=> element*10));
console.log(mapFunc([1, 2, 3, 4, 5], (element, index)=>
index % 2 === 0 ? element + 1 : element * 2));

console.log('----------separate---------------');

