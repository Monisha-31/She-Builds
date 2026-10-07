import React, { useState } from "react";

function StudentMarks({ name, subject }) {
  const [marks, setMarks] = useState(50);

  const increaseMarks = () => {
    setMarks(marks + 1);
  };

  const decreaseMarks = () => {
    setMarks(marks - 1);
  };

  return (
    <div className="card">
      <p><strong>Student Name:</strong> {name}</p>
      <p><strong>Subject:</strong> {subject}</p>
      <p><strong>Marks:</strong> {marks}</p>

      <button onClick={increaseMarks}>Increase Marks</button>
      <button onClick={decreaseMarks}>Decrease Marks</button>
    </div>
  );
}

export default StudentMarks;