function capitalize(str) {
    if(str === '') return '';
    
    const firstChar = str[0].toUpperCase();
    console.log(firstChar)
    const restChar = str.slice(1).toLowerCase();
    
    return `${firstChar}${restChar}`;
}
console.log(capitalize('i am the anh'));
console.log(capitalize('i Am the anh'));
console.log(capitalize('i am tHe aNh'));


function parameterize(str) {
    const lowerCaseStr = str.toLowerCase();

    // return lowerCaseStr.replaceAll(' ', '-'); cách 1
    return str.split(' ').join('-');  // cách 2
}
console.log(parameterize('cOde Js iS fUn'))