export default function BarChart({ title, data }) {
  const max = Math.max(...data.map((d) => d.value));
  return (
    <div className="card">
      <h3>{title}</h3>
      <div className="bars">
        {data.map((d) => (
          <div key={d.label} className="bar-col">
            <span>{d.value}</span>
            <div className="bar" style={{ height: `${(d.value / max) * 100}%` }} />
            <small>{d.label}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
