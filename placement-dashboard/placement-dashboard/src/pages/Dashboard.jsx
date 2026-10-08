import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import { jobs, trends, companyStats } from '../data/mockData';
import StatCard from '../components/StatCard';
import BarChart from '../components/BarChart';

export default function Dashboard() {
  const { user } = useAuth();
  const { applications } = useApp();
  const count = (s) => applications.filter((a) => a.status === s).length;
  const deadlines = jobs.filter((j) => !applications.some((a) => a.jobId === j.id)).sort((a, b) => a.deadline.localeCompare(b.deadline)).slice(0, 4);
  return (
    <>
      <h2>Welcome, {user.name}</h2>
      <section className="grid stats">
        <StatCard label="Jobs applied" value={applications.length} />
        <StatCard label="Under review" value={count('Under Review')} />
        <StatCard label="Interviews scheduled" value={count('Interview Scheduled')} />
        <StatCard label="Selected" value={count('Selected')} />
      </section>
      <section className="grid two">
        <BarChart title="Placement trend by month (students placed)" data={trends} />
        <BarChart title="Company-wise placements" data={companyStats} />
      </section>
      <section className="card">
        <h3>Upcoming deadlines</h3>
        {deadlines.length === 0 ? <p>You have applied to every open job.</p> : (
          <ul className="list">{deadlines.map((j) => <li key={j.id}><span><b>{j.company}</b> — {j.role}</span><span>{j.deadline}</span></li>)}</ul>
        )}
      </section>
    </>
  );
}
