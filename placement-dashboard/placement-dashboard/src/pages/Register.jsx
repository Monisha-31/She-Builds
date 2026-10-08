import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FormField from '../components/FormField';

export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [f, setF] = useState({ name: '', email: '', password: '', confirm: '', branch: '', cgpa: '', phone: '' });
  const [errors, setErrors] = useState({});
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 3) er.name = 'Name must be at least 3 characters';
    if (!/^\S+@\S+\.\S+$/.test(f.email)) er.email = 'Enter a valid email';
    if (f.password.length < 6) er.password = 'Password must be at least 6 characters';
    if (f.confirm !== f.password) er.confirm = 'Passwords do not match';
    if (!f.branch.trim()) er.branch = 'Branch is required';
    if (f.cgpa === '' || f.cgpa < 0 || f.cgpa > 10) er.cgpa = 'CGPA must be between 0 and 10';
    if (!/^\d{10}$/.test(f.phone)) er.phone = 'Phone must be 10 digits';
    if (!Object.keys(er).length) { const { confirm, ...u } = f; const m = register(u); if (m) er.email = m; else return nav('/'); }
    setErrors(er);
  };
  return (
    <form className="card auth" onSubmit={submit} noValidate>
      <h2>Create account</h2>
      <FormField label="Full name" name="name" value={f.name} onChange={change} error={errors.name} />
      <FormField label="Email" name="email" value={f.email} onChange={change} error={errors.email} />
      <FormField label="Password" name="password" type="password" value={f.password} onChange={change} error={errors.password} />
      <FormField label="Confirm password" name="confirm" type="password" value={f.confirm} onChange={change} error={errors.confirm} />
      <FormField label="Branch" name="branch" value={f.branch} onChange={change} error={errors.branch} />
      <FormField label="CGPA" name="cgpa" type="number" step="0.1" value={f.cgpa} onChange={change} error={errors.cgpa} />
      <FormField label="Phone" name="phone" value={f.phone} onChange={change} error={errors.phone} />
      <button className="btn">Register</button>
      <p>Already registered? <Link to="/login">Log in</Link></p>
    </form>
  );
}
