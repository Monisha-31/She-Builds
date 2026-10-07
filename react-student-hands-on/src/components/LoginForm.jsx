import React, { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (username && password) {
      setMessage("Login Successful");
    } else {
      setMessage("Please enter username and password");
    }
  };

  return (
    <div className="card login-card">
      <label>Username:</label>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />

      <button onClick={handleLogin}>Login</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default LoginForm;