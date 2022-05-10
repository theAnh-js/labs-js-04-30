//v1
export function findStudentById(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    !Number(studentId)
  )
    return -1;

  return studentList.findIndex((student) => student.id === studentId);
}
//V2
export function findStudentByIdV2(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    !Number(studentId)
  )
    return -1;

  for (let i = 0; i < studentList.length; i++) {
    if (studentList[i].id === studentId) return i;
  }
  return -1;
}

//V3
/**
 * 
 export function findStudentByIdV2(studentList, studentId) {
   if (
     !Array.isArray(studentList) ||
     studentList.length === 0 ||
     !Number(studentId)
   )
     return -1;
 
   for (let i = 0; i < studentList.length; i++) {
     if (studentList[i].id.toString().indexOf(studentId.toString()) !== -1)
       return i;
   }
   return -1;
 }
 * 
 */
