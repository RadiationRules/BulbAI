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
    <div className="settings-panel">
      <h2>Settings</h2>
      <label>
        <input type="checkbox" name="darkMode" checked={settings.darkMode} onChange={handleChange} />
        Dark Mode
      </label>
      <label>
        <input type="checkbox" name="notifications" checked={settings.notifications} onChange={handleChange} />
        Enable Notifications
      </label>
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
};

export default SettingsPanel;
