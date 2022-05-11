export function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return null;

  let mathList = [];
  studentList.forEach((student) => mathList.push(student.math));

  let maxMark = mathList[0];
  mathList.forEach((mark) => {
    if (maxMark < mark) maxMark = mark;
  });

  return studentList.find((student) => student.math === maxMark);
}
