// Convert hours to seconds
function convertToSeconds(hours) {
    if(hours <= 0) return 0;

    const SECONDS_PER_HOUR = 3600;
    return hours * SECONDS_PER_HOUR
}

console.log(convertToSeconds(3))


// Given 3 numbers, find max
function showMax(a, b, c){
    let max = a;

    if(max < b) max = b;
    if(max < c) max = c;

    return max
}

console.log(showMax(5, 6, 7));
console.log(showMax(54, 66, 27));
console.log(showMax(533, 622, 17));

 

// Given 3 numbers, find max even number
function showMaxEvenNumber(a, b, c) {

    let max = Number.NEGATIVE_INFINITY;

    if( a % 2 === 0 && max < a) max = a;
    if( b % 2 === 0 && max < b) max = b;
    if( c % 2 === 0 && max < c) max = c;

    return max;
}
console.log(showMaxEvenNumber(5, 7, 9));
console.log(showMaxEvenNumber(50, 76, 99));
console.log(showMaxEvenNumber(54, 47, 89));
console.log(showMaxEvenNumber(5, 70, 9999));
console.log(showMaxEvenNumber(5666, 55557, 49)); 