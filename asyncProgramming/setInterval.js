//
function countdown(seconds) {
  let currentSecond = seconds;
  let intervalId = setInterval(() => {
    console.log(currentSecond);
    if (currentSecond <= 0) clearInterval(intervalId);
    currentSecond--;
  }, 1000);
}
countdown(5);
