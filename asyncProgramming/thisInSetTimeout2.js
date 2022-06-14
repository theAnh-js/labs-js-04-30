const teacher = {
  name: "sensei",
  //hoạt động bình thường
  normal() {
    console.log("nomal, He is", this.name);
    console.log("this: ", this);
  },

  // vì là arrow func ko có this của riêng nó, nên nó trở ra this của global object
  arrow: () => {
    console.log("arrow, He is", this.name);
    console.log("this in arrow func: ", this);
  },

  // outter this thì vẫn trỏ về teacher
  // Tuy nhiên, inner this sẽ trỏ ra global object, do callback trong setTimeout được default vậy.
  normalSetTimeout() {
    console.log("outter this: ", this);
    setTimeout(function () {
      console.log("inner this in normalSetTimeout, he is:", this.name);
      console.log("inner this", this);
    });
  },

  // outter this thì vẫn trỏ về teacher
  // inner this cũng trỏ về teacher, do callback func trong setTimeout là 1 arrow func nên
  // nó sẽ trỏ ra cái this ngoài nó, this ngoài nó lúc này là outter this.
  arrowSetTimeout() {
    console.log("outter this: ", this);
    setTimeout(() => {
      console.log("inner this in arrowSetTimeout, he is:", this.name);
      console.log("inner this", this);
    });
  },
};

teacher.normal();
teacher.arrow();
teacher.normalSetTimeout();
teacher.arrowSetTimeout();
