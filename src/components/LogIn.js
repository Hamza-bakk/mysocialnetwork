import React from 'react';
import { useAuth } from './AuthContext';


function LogIn() {
  const { setUser, setIsAuthenticated } = useAuth();

  const handleLogIn = () => {
    // Effectuez la connexion ici (vérification des informations, etc.)
    setUser({ username: 'utilisateur_connecté' });
    setIsAuthenticated(true);
  }

  return (
    <div>
      <h2>Connexion</h2>
      <button onClick={handleLogIn}>Se connecter</button>
    </div>
  );
}

export default LogIn;

