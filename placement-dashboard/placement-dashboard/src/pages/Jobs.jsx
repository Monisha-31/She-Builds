import { useEffect, useRef, useState } from 'react';
import { getJobs } from '../services/api';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import FormField from '../components/FormField';

export default function Jobs() {
  const { user } = useAuth();
  const { apply, hasApplied } = useApp();
  const [jobs, setJobs] = useState([]);
  const [q, setQ] = useState('');
  const [type, setType] = useState('All');
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState('');
  const [err, setErr] = useState('');
  const searchRef = useRef(null);

  useEffect(() => { getJobs().then(setJobs); searchRef.current?.focus(); }, []);
  const shown = jobs.filter((j) =>
    (type === 'All' || j.type === type) &&
    `${j.company} ${j.role} ${j.location}`.toLowerCase().includes(q.toLowerCase()));

  const submit = (e) => {
    e.preventDefault();
    if (Number(user.cgpa) < selected.minCgpa) return setErr(`Minimum CGPA ${selected.minCgpa} required (yours: ${user.cgpa})`);
    if (note.trim().length < 20) return setErr('Cover note must be at least 20 characters');
    apply(selected); setSelected(null); setNote(''); setErr('');
  };

  return (
    <>
      <h2>Job openings</h2>
      <div className="toolbar">
        <input ref={searchRef} placeholder="Search company, role or location" value={q} onChange={(e) => setQ(e.target.value)} />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>All</option><option>Full-time</option><option>Internship</option>
        </select>
      </div>
      {shown.length === 0 && <p>No jobs match your search. Try clearing the filters.</p>}
      <section className="grid jobs">
        {shown.map((j) => (
          <div className="card" key={j.id}>
            <h3>{j.role}</h3>
            <p><b>{j.company}</b> · {j.location}</p>
            <p>{j.type} · {j.package} · Min CGPA {j.minCgpa}</p>
            <p className="hint">Apply by {j.deadline}</p>
            <button className="btn" disabled={hasApplied(j.id)} onClick={() => { setSelected(j); setErr(''); }}>
              {hasApplied(j.id) ? 'Applied' : 'Apply'}
            </button>
          </div>
        ))}
      </section>
      {selected && (
        <div className="modal">
          <form className="card" onSubmit={submit} noValidate>
            <h3>Apply to {selected.company} — {selected.role}</h3>
            <FormField textarea rows="4" label="Cover note" value={note} onChange={(e) => setNote(e.target.value)} />
            {err && <small className="error">{err}</small>}
            <div className="row"><button className="btn">Submit application</button>
              <button type="button" className="btn ghost" onClick={() => setSelected(null)}>Cancel</button></div>
          </form>
        </div>
      )}
    </>
  );
}
