import React, { useState, useEffect } from 'react';
import { auth, db, storage } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const ProfileEditor = () => {
  const user = auth.currentUser;
  const [profile, setProfile] = useState({
    bio: '',
    skills: '',
    github: '',
    portfolio: '',
    imageUrl: '',
  });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!user) return;
    const fetchProfile = async () => {
      const docRef = doc(db, 'profiles', user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfile(docSnap.data() as any);
      }
    };
    fetchProfile();
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSave = async () => {
    if (!user) return;
    setLoading(true);
    let imageUrl = profile.imageUrl;
    if (image) {
      const imageRef = ref(storage, `profiles/${user.uid}/profile.jpg`);
      await uploadBytes(imageRef, image);
      imageUrl = await getDownloadURL(imageRef);
    }
    await setDoc(doc(db, 'profiles', user.uid), {
      ...profile,
      imageUrl,
    });
    setProfile((p) => ({ ...p, imageUrl }));
    setLoading(false);
    alert('Profile saved!');
  };

  return (
    <div className="profile-editor">
      <h2>Edit Profile</h2>
      <div>
        <label>Profile Image:</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {profile.imageUrl && <img src={profile.imageUrl} alt="Profile" style={{ width: 100, borderRadius: '50%' }} />}
      </div>
      <div>
        <label>Bio:</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange} />
      </div>
      <div>
        <label>Skills:</label>
        <input name="skills" value={profile.skills} onChange={handleChange} />
      </div>
      <div>
        <label>GitHub:</label>
        <input name="github" value={profile.github} onChange={handleChange} />
      </div>
      <div>
        <label>Portfolio:</label>
        <input name="portfolio" value={profile.portfolio} onChange={handleChange} />
      </div>
      <button onClick={handleSave} disabled={loading}>{loading ? 'Saving...' : 'Save Profile'}</button>
    </div>
  );
};

export default ProfileEditor;
