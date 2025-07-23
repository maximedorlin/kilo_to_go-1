import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../services/firebaseConfig'; // ✅ Import correct (nommé)

// Création du contexte Auth
const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);

// Composant Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);       // Stocke l'utilisateur connecté
  const [loading, setLoading] = useState(true); // État de chargement

  // Écoute les changements de connexion/déconnexion
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
    });

    return () => unsubscribe(); // Nettoie l'écouteur quand le composant est démonté
  }, []);

  // Fonction de déconnexion
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
