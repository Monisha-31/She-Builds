import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useApp } from '../context/AppContext';

const links = [['/', 'Dashboard'], ['/jobs', 'Jobs'], ['/applications', 'Applications'], ['/interviews', 'Interviews'], ['/notifications', 'Notifications'], ['/profile', 'Profile']];
export default function Navbar() {
  const { user, logout } = useAuth();
  const { notifications } = useApp();
  const unread = notifications.filter((n) => !n.read).length;
  return (
    <header className="nav">
      <strong className="brand">PlaceTrack</strong>
      <nav>
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} end={to === '/'}>
            {label}{label === 'Notifications' && unread > 0 && <b className="badge">{unread}</b>}
          </NavLink>
        ))}
      </nav>
      <button className="btn ghost" onClick={logout}>Log out ({user.name.split(' ')[0]})</button>
    </header>
  );
}
