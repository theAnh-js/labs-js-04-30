//v1
export function hasStudent(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  if (typeof studentId !== "number") return false;

  return studentList.some((student) => student.id === studentId);
}

/**v2: lính canh, forEach */
/**v3: for */
/**v2: findIndex -> !== -1 return true, < 0 return false */

// Greatest common divisor
function findGCD(a, b) {
  while (a != b) {
    if (a > b) a = a - b;
    if (a < b) b = b - a;
  }
  console.log(a, b);
}
findGCD(12, 30);
findGCD(5414, 5903);
findGCD(16342, 525684);
