import React, { createContext, useContext, useState } from 'react';
import { MoodleService } from '../services/moodle';

interface AuthContextType {
  user: any | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
const moodleService = new MoodleService();

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any | null>(null);

  const login = async (email: string, password: string) => {
    try {
      const userData = await moodleService.login(email, password);
      if (userData) {
        setUser(userData);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};