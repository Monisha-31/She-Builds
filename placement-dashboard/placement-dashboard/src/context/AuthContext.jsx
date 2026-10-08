import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
const demo = { name: 'Demo Student', email: 'demo@college.edu', password: 'demo123', branch: 'CSE (AI&DS)', cgpa: '8.2', phone: '9876543210' };

export function AuthProvider({ children }) {
  const [users, setUsers] = useLocalStorage('pd_users', [demo]);
  const [user, setUser] = useLocalStorage('pd_current', null);

  const register = (u) => {
    if (users.some((x) => x.email === u.email)) return 'Email is already registered';
    setUsers([...users, u]); setUser(u); return null;
  };
  const login = (email, password) => {
    const f = users.find((x) => x.email === email && x.password === password);
    if (!f) return 'Invalid email or password';
    setUser(f); return null;
  };
  const logout = () => setUser(null);
  const updateProfile = (data) => {
    const updated = { ...user, ...data };
    setUser(updated); setUsers(users.map((x) => (x.email === user.email ? updated : x)));
  };
  return <AuthContext.Provider value={{ user, register, login, logout, updateProfile }}>{children}</AuthContext.Provider>;
}
