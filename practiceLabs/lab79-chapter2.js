

// Bài 79: Hãy đếm số lượng chữ số của số nguyên dương n

export function acountNumber(n) {
    if (n <= 0 || !Number.isInteger(n)) return -1;

    let myStr = n + '';

    return myStr.length;

}
console.log(acountNumber(3));
console.log(acountNumber(43));
console.log(acountNumber(123));
console.log(acountNumber(100000));
console.log(acountNumber(1234560000));
console.log(acountNumber(0));




// Làm bài tại đây
function Student(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    // this.getFullName = function(){
    //     return `${this.firstName} ${this.lastName}`;
    // }
}
Student.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`;
}
// Ví dụ khi sử dụng
var student = new Student('Long', 'Bui');
console.log(student.firstName);  // 'Long'
console.log(student.lastName);  // 'Bui'
console.log(student.getFullName());  // 'Long Bui'