import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormField from '../components/FormField';

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [f, setF] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email';
    if (f.password.length < 6) er.password = 'Password must be at least 6 characters';
    if (!Object.keys(er).length) { const m = login(f.email, f.password); if (m) er.form = m; else return nav('/'); }
    setErrors(er);
  };
  return (
    <form className="card auth" onSubmit={submit} noValidate>
      <h2>Student login</h2>
      <p className="hint">Demo: demo@college.edu / demo123</p>
      <FormField label="Email" name="email" value={f.email} onChange={change} error={errors.email} />
      <FormField label="Password" name="password" type="password" value={f.password} onChange={change} error={errors.password} />
      {errors.form && <small className="error">{errors.form}</small>}
      <button className="btn">Log in</button>
      <p>New here? <Link to="/register">Create an account</Link></p>
    </form>
  );
}
