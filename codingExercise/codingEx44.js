function isValidBracketPairs(str) {
  if (str === "") return true;

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let char = stack[stack.length - 1];

    if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
      stack.push(str[i]);
    } else if (
      (char === "(" && str[i] === ")") ||
      (char === "{" && str[i] === "}") ||
      (char === "[" && str[i] === "]")
    ) {
      stack.pop();
    } else return false;
  }
  return stack.length === 0 ? true : false;
}
console.log(isValidBracketPairs("(a + b)([()]) ? ][a * d]"));
console.log(isValidBracketPairs("(a + b)([)] ? [a * d]"));
