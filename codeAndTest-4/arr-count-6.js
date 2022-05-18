export function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  if (avgMark < 0 || avgMark > 10) return 0;

  let targetStudentList = studentList.filter((student) => {
    let keyMarkList = Object.keys(student.marks);
    let mark = 0;
    keyMarkList.forEach((keyMark) => {
      mark += student.marks[keyMark];
    });
    let average = mark / keyMarkList.length;

    return average >= avgMark;
  });
  return targetStudentList.length;
}
