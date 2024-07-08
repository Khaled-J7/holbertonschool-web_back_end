export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((elem) => elem.location === city)
    .map((elem) => {
      const findGrade = newGrades.find((grade) => grade.studentId === elem.id);
      return { ...elem, grade: findGrade ? findGrade.grade : 'N/A' };
    });
}
