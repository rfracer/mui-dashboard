import { User } from 'firebase/auth';
import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext<User | null>(null);

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: JSX.Element }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
