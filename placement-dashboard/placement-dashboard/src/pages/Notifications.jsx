import { useApp } from '../context/AppContext';

export default function Notifications() {
  const { notifications, markRead } = useApp();
  return (
    <>
      <h2>Notifications</h2>
      {notifications.length === 0 && <p>You're all caught up.</p>}
      <ul className="list card">
        {notifications.map((n) => (
          <li key={n.id} className={n.read ? '' : 'unread'}>
            <span><b>{n.type}</b> — {n.text}</span>
            {!n.read && <button className="btn ghost" onClick={() => markRead(n.id)}>Mark as read</button>}
          </li>
        ))}
      </ul>
    </>
  );
}
