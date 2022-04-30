
function truncate(text, maxLength) {
    if (text.length <= maxLength) return text;
    let start = text.slice(0, maxLength - 1);
    return `${start}\u2026`;
}
console.log(truncate('learningJavascript', 4));
console.log(truncate('boss', 4));

// '\u2026' là dấu  ellipsis character "…"(khác với dấu 3 chấm)
console.log('\u2026'.length); // 1
console.log('...'.length); // 3

function removeVowel(str) {
    // your code here
    if (str === '') return '';

    if (str.includes('u')) str = str.replaceAll('u', '');
    if (str.includes('e')) str = str.replaceAll('e', '');
    if (str.includes('o')) str = str.replaceAll('o', '');
    if (str.includes('a')) str = str.replaceAll('a', '');
    if (str.includes('i')) str = str.replaceAll('i', '');
    if (str[0].includes(' ')) str = str.replace(str[0], '');
    if (str[str.length - 1].includes(' ')) str.replace(str[str.length - 1], '');
    return str;
};
console.log(removeVowel('u hello world'));
console.log('javascript'.includes('v'));

// using if...else
function formatSecondsV1(seconds) {
    // your code here
    if (60 < seconds < 0) return null;
    if (seconds.toString().length === 1) seconds = `0${seconds}`;

    return seconds;
}
console.log(formatSecondsV1(0));
console.log(formatSecondsV1(5));
console.log(formatSecondsV1(38));

// using slice()
function formatSecondsV2(seconds) {
    // your code here
    if (60 < seconds < 0) return null;
    if (seconds.toString().length === 1) seconds = `0${seconds.toString().slice(0)}`;
    return seconds;
}
console.log(formatSecondsV2(0));
console.log(formatSecondsV2(40));
console.log(formatSecondsV2(2));



