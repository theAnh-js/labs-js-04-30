let numberList = [1, 5, 6, 3, 5, 58, 22, 33, 555, 32];
numberList.sort((a, b) => a - b);
console.log(numberList);
numberList.sort((a, b) => -a + b);
console.log(numberList);
console.log(numberList.reverse());

console.log([1, 5, 6, 3, 5, 58, 22, 33, 555, 32].sort());
console.log(['s', 'n', 'a', 'c', 'd', 'e', 'b'].sort());
console.log([1, 5 ,3, null, 20, 588, undefined, 4, 6, 2].sort());



let students = [
    {
        name: 'john',
        age: 45,
    },
    {
        name: 'petter',
        age: 34,
    },
    {
        name: 'fred',
        age: 23,
    },
    {
        name: 'may',
        age:56,
    }
]
students.sort(function(a, b) {
    return a.age - b.age;
})
console.log(students);

console.log(['javascript', 'reacet', 'css', 'html'].join(''));


console.log('javascript hello'.split(' '));
console.log('javascript hello'.split(''));
console.log('javascript hello'.split());


console.log('javascript'.concat('hello', 'hi'));
console.log(['.js', '.react'].concat('hello', 'hi'));

