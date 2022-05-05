export function statisticsCharacters(str) {
    if (typeof str !== 'string' || str === '') return null;

    let charList = str.split('');
    let acountSpace = 0;
    let acountChar = 1;
    if (charList[0] === ' ') acountChar = 0;

    let output = {};
    for (let i = 0; i < charList.length; i++) {

        if (!output[charList[i]] && charList[i] !== ' ') {
            for (let j = 1; j < charList.length; j++) {
                if (charList[i] === charList[j]) acountChar++;
            }
            output[charList[i]] = acountChar;
            if (acountChar >= 1) acountChar = 0;
        }

        if (charList[i] === ' ') acountSpace++;
        output['space'] = acountSpace;
    }
    return output;
}

console.log(statisticsCharacters(' a b c '));
console.log(statisticsCharacters('easy frontend '));
console.log(statisticsCharacters(' easy '));
console.log(statisticsCharacters(' a b c d a b c d '));
console.log(statisticsCharacters(' ac cb  bb dd  '))
