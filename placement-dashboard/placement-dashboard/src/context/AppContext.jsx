import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { seedApplications, seedNotifications } from '../data/mockData';
import { useAuth } from './AuthContext';

const AppContext = createContext(null);
export const useApp = () => useContext(AppContext);

export function AppProvider({ children }) {
  const { user } = useAuth();
  const [applications, setApplications] = useLocalStorage(`pd_apps_${user.email}`, seedApplications);
  const [notifications, setNotifications] = useLocalStorage(`pd_notes_${user.email}`, seedNotifications);

  const apply = (job) => {
    setApplications([...applications, { jobId: job.id, status: 'Under Review', appliedOn: new Date().toISOString().slice(0, 10), interview: null }]);
    setNotifications([{ id: Date.now(), type: 'Company Update', text: `Application submitted to ${job.company}.`, read: false }, ...notifications]);
  };
  const markRead = (id) => setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const hasApplied = (id) => applications.some((a) => a.jobId === id);

  return <AppContext.Provider value={{ applications, notifications, apply, markRead, hasApplied }}>{children}</AppContext.Provider>;
}
