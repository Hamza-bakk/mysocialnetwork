import React from 'react';
import { useAuth } from './AuthContext';

function LogOut() {
  const { setUser, setIsAuthenticated } = useAuth();

  const handleLogOut = () => {
    setUser(null);
    setIsAuthenticated(false);
  }

  return (
    <div>
      <h2>Déconnexion</h2>
      <button onClick={handleLogOut}>Se déconnecter</button>
    </div>
  );
}

export default LogOut;