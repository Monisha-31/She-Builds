import { useApp } from '../context/AppContext';
import { jobs } from '../data/mockData';
import StatusBadge from '../components/StatusBadge';

export default function Applications() {
  const { applications } = useApp();
  return (
    <>
      <h2>My applications</h2>
      {applications.length === 0 ? <p>No applications yet. Open Jobs to apply.</p> : (
        <div className="table-wrap"><table>
          <thead><tr><th>Company</th><th>Role</th><th>Applied on</th><th>Status</th></tr></thead>
          <tbody>{applications.map((a) => { const j = jobs.find((x) => x.id === a.jobId); return (
            <tr key={a.jobId}><td>{j.company}</td><td>{j.role}</td><td>{a.appliedOn}</td><td><StatusBadge status={a.status} /></td></tr>); })}
          </tbody></table></div>
      )}
    </>
  );
}
