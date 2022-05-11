export function findStudent(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return null;

  return (
    studentList.find((student) => {
      let lessThan5 = [];
      let greaterThan5 = [];
      ["math", "english", "programming"].forEach((subject) => {
        if (student.marks[subject] < 5) lessThan5.push(subject);
        if (student.marks[subject] >= 5) greaterThan5.push(subject);
      });
      return lessThan5.length === 1 && greaterThan5.length === 2;
    }) || null
  );
}
