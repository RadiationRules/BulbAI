import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Workspace from './pages/Workspace';
import Community from './pages/Community';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import Notifications from './components/Notifications';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Notifications />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:uid" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workspace/:projectId" element={<Workspace />} />
        <Route path="/community" element={<Community />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
