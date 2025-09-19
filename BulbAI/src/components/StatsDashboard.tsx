import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const StatsDashboard = () => {
  const [userCount, setUserCount] = useState(0);
  const [projectCount, setProjectCount] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      const users = await getDocs(collection(db, 'profiles'));
      const projects = await getDocs(collection(db, 'projects'));
      setUserCount(users.size);
      setProjectCount(projects.size);
    };
    fetchStats();
  }, []);

  return (
    <div className="stats-dashboard">
      <h3>Live Statistics</h3>
      <div>Users: {userCount}</div>
      <div>Projects: {projectCount}</div>
    </div>
  );
};

export default StatsDashboard;
