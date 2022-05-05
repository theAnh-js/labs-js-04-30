
//v1
export function countWords(str) {
    if (typeof str !== 'string') return -1;

    return str.trim().split(' ').length;
}

//v2
export function countWordsV2(str) {
    if (typeof str !== 'string') return -1;

    let newStr = str.trim();
    if (!newStr.includes(' ')) return 1;

    let output = 1;
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === ' ') output += 1
    }
    return output;
}
console.log(countWordsV2('frontend easy'));
console.log(countWordsV2('frontend'));
console.log(countWordsV2('frontend ee ee'));
console.log(countWordsV2('frontend ee ee 77 99  '));