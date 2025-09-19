import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

const Notifications = () => {
  const user = auth.currentUser;
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    if (!user) return;
    const fetchNotifications = async () => {
      const q = query(collection(db, 'notifications'), where('to', '==', user.uid));
      const querySnapshot = await getDocs(q);
      setNotifications(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchNotifications();
  }, [user]);

  if (!user) return null;

  return (
    <div className="notifications">
      {notifications.length > 0 && (
        <ul>
          {notifications.map((n, i) => (
            <li key={i}>{n.message}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
