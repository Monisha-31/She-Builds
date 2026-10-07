import React from "react";

function StudentProfile({ name, rollNo, course, college }) {
  return (
    <div className="card">
      <h3>Student Profile</h3>
      <p><strong>Name :</strong> {name}</p>
      <p><strong>Roll No :</strong> {rollNo}</p>
      <p><strong>Course :</strong> {course}</p>
      <p><strong>College :</strong> {college}</p>
    </div>
  );
}

export default StudentProfile;