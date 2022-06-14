const student = {
  name: "Peter",
  sayHello() {
    console.log("He is ", this.name);
    console.log("this: ", this);
  },
};
setTimeout(student.sayHello);
// Không thể bind this cho setTimeout.
// this trong callback func của setTimeout được default là this của global object.

// There are 2 sollution to sovle this in setTimeout:

// way1- use bind cho hàm sayHello, chứ ko phải setTimeout:
const bird = {
  name: "flappy bird",
  sayHello() {
    console.log("He is", this.name);
    console.log("this: ", this);
  },
};
setTimeout(bird.sayHello.bind(bird));

//way2- use a wrapper function:
const rabbit = {
  name: "rabbit",
  sayHello() {
    console.log("He is", this.name);
    console.log("this: ", this);
  },
};
setTimeout(() => {
  rabbit.sayHello();
});

console.log("-------------separator------------------");
