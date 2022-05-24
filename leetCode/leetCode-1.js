//leetCode

/**Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1] */

const addTwoNumbers = function (l1, l2) {
  let reversedL1 = [];
  for (let i = 0; i < l1.length; i++) {
    reversedL1.unshift(l1[i]);
  }
  let strL1 = reversedL1.join("");

  let reversedL2 = [];
  for (let i = 0; i < l2.length; i++) {
    reversedL2.unshift(l2[i]);
  }
  let strL2 = reversedL2.join("");

  let sum = Number(strL1) + Number(strL2);
  let result = [];
  sum
    .toString()
    .split("")
    .forEach((char) => {
      result.unshift(Number(char));
    });
  return result;
};

console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
