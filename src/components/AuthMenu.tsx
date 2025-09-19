import React, { useState } from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

const AuthMenu = () => {
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut(auth);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {user ? (
        <>
          <img src={user.photoURL || ''} alt="Profile" style={{ width: 32, height: 32, borderRadius: '50%' }} />
          <span style={{ color: '#FFD600', fontWeight: 500 }}>{user.displayName}</span>
          <button onClick={handleSignOut} className="dark-mode-toggle">Sign Out</button>
        </>
      ) : (
        <button onClick={handleGoogleSignIn} className="dark-mode-toggle" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      )}
    </div>
  );
};

export default AuthMenu;
