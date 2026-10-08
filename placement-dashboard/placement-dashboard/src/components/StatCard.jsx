export default function StatCard({ label, value }) {
  return <div className="card stat"><div className="num">{value}</div><div>{label}</div></div>;
}
