import React from "react";
import StudentProfile from "./components/StudentProfile";
import StudentMarks from "./components/StudentMarks";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="app">
      <h1>React Hands-On Programs</h1>

      <section>
        <h2>Hands-On 1: Student Profile Using Props</h2>
        <StudentProfile
          name="Rahul"
          rollNo="101"
          course="BCA"
          college="ABC College"
        />
      </section>

      <section>
        <h2>Hands-On 2: Student Marks Using Props + State</h2>
        <StudentMarks name="Rahul" subject="Java" />
      </section>

      <section>
        <h2>Hands-On 3: Login Form Using State</h2>
        <LoginForm />
      </section>
    </div>
  );
}

export default App;