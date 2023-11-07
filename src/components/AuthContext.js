import React, { createContext, useContext } from 'react';
import { userAtom, isAuthenticatedAtom } from './Auth';
import { useAtom } from 'jotai';


const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useAtom(userAtom);
  const [isAuthenticated, setIsAuthenticated] = useAtom(isAuthenticatedAtom);

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

