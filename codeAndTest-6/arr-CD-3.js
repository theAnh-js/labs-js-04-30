export function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];
  if (typeof studentId !== "number") return [];

  let removeId = studentList.findIndex((student) => student.id === studentId);
  if (removeId < 0) return studentList;

  studentList.splice(removeId, 1);
  return studentList;
}
