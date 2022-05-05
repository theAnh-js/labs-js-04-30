export function statisticsWords(str) {

    if (typeof str !== 'string') return null;
    if (str.trim() === '') return null;

    let strArr = str.trim().split(' ');
    let output = {};

    let acountWords = 1;
    for (let i = 0; i < strArr.length; i++) {

        if (!output[strArr[i]]) {
            for (let j = 1; j < strArr.length; j++) {
                if (strArr[i] === strArr[j]) {
                    acountWords += 1;
                }
            }
            output[strArr[i]] = acountWords;
        }
        if (acountWords >= 1) acountWords = 0;
    }

    return output;
}

// console.log(statisticsWords('use strict use use strict strict js learn easy frontend the anh '));
// console.log(statisticsWords('use'));
// console.log(statisticsWords('frontend'));
// console.log(statisticsWords('use strict use'));

