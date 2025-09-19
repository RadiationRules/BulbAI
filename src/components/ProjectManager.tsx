import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc, query, where, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

const ProjectManager = () => {
  const user = auth.currentUser;
  const [projects, setProjects] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [loading, setLoading] = useState(false);

  const fetchProjects = async () => {
    if (!user) return;
    const q = query(collection(db, 'projects'), where('owner', '==', user.uid));
    const querySnapshot = await getDocs(q);
    setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchProjects();
    // eslint-disable-next-line
  }, [user]);

  const handleCreate = async () => {
    if (!user || !name) return;
    setLoading(true);
    await addDoc(collection(db, 'projects'), {
      name,
      isPublic,
      owner: user.uid,
      created: new Date(),
    });
    setName('');
    setIsPublic(true);
    setLoading(false);
    fetchProjects();
  };

  const handleDelete = async (id: string) => {
    await deleteDoc(doc(db, 'projects', id));
    fetchProjects();
  };

  const handleTogglePublic = async (id: string, current: boolean) => {
    await updateDoc(doc(db, 'projects', id), { isPublic: !current });
    fetchProjects();
  };

  return (
    <div className="project-manager">
      <h2>My Projects</h2>
      <div>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Project name" />
        <label>
          <input type="checkbox" checked={isPublic} onChange={e => setIsPublic(e.target.checked)} /> Public
        </label>
        <button onClick={handleCreate} disabled={loading || !name}>{loading ? 'Creating...' : 'Create Project'}</button>
      </div>
      <ul>
        {projects.map(p => (
          <li key={p.id}>
            {p.name} [{p.isPublic ? 'Public' : 'Private'}]
            <button onClick={() => handleTogglePublic(p.id, p.isPublic)}>Toggle</button>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectManager;
