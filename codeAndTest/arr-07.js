//v1
/**
 * 
 export function hasAlice(studentList) {
   // get alice
   let aliceList = [];
   studentList.forEach((student) => {
     if (student.name.toLowerCase() === "alice") aliceList.push(student);
   });
 
   return aliceList.some((alice) => alice.gender === "female");
 }
*/

//v2
/**
 * 
 export function hasAlice(studentList) {
 
     let aliceList = [];
   studentList.forEach((student) => {
     if (student.name.toUpperCase() === "ALICE") aliceList.push(student);
   });
 
   return aliceList.some((alice) => alice.gender === "female");
 }
*/

//v3
export function hasAlice(studentList) {
  return studentList.some((student) => {
    return (
      student.name.toUpperCase() === "ALICE" && student.gender === "female"
    );
  });
}
