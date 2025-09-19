import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

const SettingsPanel = () => {
  const user = auth.currentUser;
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
  });

  useEffect(() => {
    if (!user) return;
    const fetchSettings = async () => {
      const docRef = doc(db, 'settings', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setSettings(docSnap.data() as any);
      }
    };
    fetchSettings();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [e.target.name]: e.target.checked });
  };

  const handleSave = async () => {
    if (!user) return;
    await setDoc(doc(db, 'settings', user.uid), settings);
    alert('Settings saved!');
  };

  return (
    <div className="settings-panel card" style={{maxWidth: 420, margin: '2rem auto', boxShadow: '0 8px 32px #FFD60033'}}>
      <h2 style={{fontWeight: 700, color: '#646cff', marginBottom: 24}}>Settings</h2>
      <div style={{display: 'flex', flexDirection: 'column', gap: 18}}>
        <label style={{fontWeight: 600, fontSize: 18, display: 'flex', alignItems: 'center', gap: 10}}>
          <input type="checkbox" name="darkMode" checked={settings.darkMode} onChange={handleChange} style={{transform: 'scale(1.2)'}} />
          Dark Mode
        </label>
        <label style={{fontWeight: 600, fontSize: 18, display: 'flex', alignItems: 'center', gap: 10}}>
          <input type="checkbox" name="notifications" checked={settings.notifications} onChange={handleChange} style={{transform: 'scale(1.2)'}} />
          Enable Notifications
        </label>
        <button onClick={handleSave} style={{marginTop: 18, fontWeight: 700, fontSize: 18, background: 'linear-gradient(90deg,#646cff,#FFD600)', color: '#23272f', boxShadow: '0 2px 8px #FFD60033'}}>
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default SettingsPanel;
