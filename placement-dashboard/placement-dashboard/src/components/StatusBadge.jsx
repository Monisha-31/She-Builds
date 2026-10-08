export default function StatusBadge({ status }) {
  return <span className={`pill ${status.replace(/\s/g, '-').toLowerCase()}`}>{status}</span>;
}
