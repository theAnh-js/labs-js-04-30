

function hasEmail(email) {
    // return email.indexOf('@gmail.com') !== -1;   ==>cách 1
    return email.includes('@gmail.com')         // ==> cách 2
    // return email.lastIndexOf('@gmail.com') !== -1 // ==> cách 3
}
console.log(hasEmail('hoanbao@gmail.com'));