// async function LUÔN trả về 1 Promise dù ta có
// chỉ định Promise hay không.
async function getNumber() {
  return 10;
}
console.log(getNumber()); // return a Promise

async function getNumber() {
  return 10;
}
getNumber().then((data) => console.log(data)); // can .then

// và tất nhiên nếu return Promise thì nó cũng sẽ trả về a Promist
async function getNumber() {
  return Promise.resolve(10);
}
getNumber().then((data) => console.log(data)); // can .then

// fetch API and handle errors
async function getCourse() {
  try {
    const url = "http://localhost:3000/courses";
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log("catch error: ", error);
  }
}
getCourse();
