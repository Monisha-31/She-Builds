export default function FormField({ label, error, textarea, ...props }) {
  return (
    <label className="field">
      <span>{label}</span>
      {textarea ? <textarea {...props} /> : <input {...props} />}
      {error && <small className="error">{error}</small>}
    </label>
  );
}
