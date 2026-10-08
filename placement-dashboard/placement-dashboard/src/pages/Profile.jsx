import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import FormField from '../components/FormField';

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [f, setF] = useState({ name: user.name, branch: user.branch, cgpa: user.cgpa, phone: user.phone });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);
  const change = (e) => { setF({ ...f, [e.target.name]: e.target.value }); setSaved(false); };
  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (f.name.trim().length < 3) er.name = 'Name must be at least 3 characters';
    if (!f.branch.trim()) er.branch = 'Branch is required';
    if (f.cgpa === '' || f.cgpa < 0 || f.cgpa > 10) er.cgpa = 'CGPA must be between 0 and 10';
    if (!/^\d{10}$/.test(f.phone)) er.phone = 'Phone must be 10 digits';
    setErrors(er);
    if (!Object.keys(er).length) { updateProfile(f); setSaved(true); }
  };
  return (
    <form className="card auth" onSubmit={submit} noValidate>
      <h2>My profile</h2>
      <p className="hint">{user.email}</p>
      <FormField label="Full name" name="name" value={f.name} onChange={change} error={errors.name} />
      <FormField label="Branch" name="branch" value={f.branch} onChange={change} error={errors.branch} />
      <FormField label="CGPA" name="cgpa" type="number" step="0.1" value={f.cgpa} onChange={change} error={errors.cgpa} />
      <FormField label="Phone" name="phone" value={f.phone} onChange={change} error={errors.phone} />
      <button className="btn">Save changes</button>
      {saved && <small className="ok">Profile saved</small>}
    </form>
  );
}
