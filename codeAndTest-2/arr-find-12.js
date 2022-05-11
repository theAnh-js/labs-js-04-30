export function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return null;

  let averageList = [];
  studentList.forEach((student) => {
    averageList.push((student.math + student.english) / 2);
  });

  let minAverage = averageList[0];
  averageList.forEach((aver) => {
    if (minAverage > aver) minAverage = aver;
  });

  let output = studentList.filter((student) => {
    let average = (student.math + student.english) / 2;
    return average === minAverage;
  });

  return output[output.length - 1];
}
