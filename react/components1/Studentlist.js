function StudentList() {
  const students = [
    { id: 1, name: "Jaya" },
    { id: 2, name: "Shree" },
    { id: 3, name: "Ramesh" }
  ];

  return (
    <ul>
      {students.map(student => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}
export default StudentList;