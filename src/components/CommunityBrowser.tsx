import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const CommunityBrowser = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const querySnapshot = await getDocs(collection(db, 'profiles'));
      setUsers(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchUsers();
    fetchProjects();
  }, []);

  return (
    <div className="community-browser">
      <h2>Discover Developers</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>
            <img src={u.imageUrl} alt="Profile" style={{ width: 40, borderRadius: '50%' }} />
            {u.id} - {u.skills}
            {/* Follow, message, collaborate buttons would go here */}
          </li>
        ))}
      </ul>
      <h2>Public Projects</h2>
      <ul>
        {projects.filter(p => p.isPublic).map(p => (
          <li key={p.id}>
            {p.name} by {p.owner}
            {/* View, fork, collaborate buttons would go here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityBrowser;
