import { useApp } from '../context/AppContext';
import { jobs } from '../data/mockData';

export default function Interviews() {
  const { applications } = useApp();
  const list = applications.filter((a) => a.interview).sort((a, b) => a.interview.date.localeCompare(b.interview.date));
  return (
    <>
      <h2>Interview schedule</h2>
      {list.length === 0 ? <p>No interviews scheduled yet.</p> : (
        <section className="grid jobs">{list.map((a) => { const j = jobs.find((x) => x.id === a.jobId); return (
          <div className="card" key={a.jobId}>
            <h3>{j.company}</h3><p>{a.interview.round}</p>
            <p>{a.interview.date} at {a.interview.time}</p><p>{a.interview.mode}</p>
          </div>); })}
        </section>
      )}
    </>
  );
}
