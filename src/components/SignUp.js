import React from 'react';
import { useAuth } from './AuthContext';

function SignUp() {
  const { setUser, setIsAuthenticated } = useAuth();

  const handleSignUp = () => {
    // Effectuez l'inscription ici (envoi de données au back-end, etc.)
    setUser({ username: 'nouvel_utilisateur' });
    setIsAuthenticated(true);
  }

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSignUp}>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default SignUp;

