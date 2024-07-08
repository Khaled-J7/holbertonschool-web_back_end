export default function getStudentIdsSum(students) {
  return students.reduce((sum, elem) => sum + elem.id, 0);
}
