(() => {
  const ulElement = document.getElementById("ulId");
  if (ulElement) {
    const liElements = ulElement.querySelectorAll(".liClass");
    for (let liElement of liElements) {
      console.log(liElement);
    }
  }
})();
