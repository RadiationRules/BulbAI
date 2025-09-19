import React from 'react';
import WorkspaceEditor from '../components/WorkspaceEditor';
import GitPanel from '../components/GitPanel';
import TopRightControls from '../components/TopRightControls';


const Workspace = () => (
  <div className="workspace-page" style={{minHeight: '100vh', background: 'linear-gradient(135deg,#181a2a 0%,#23272f 100%)', padding: 0}}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', maxWidth: 1400, margin: '0 auto', padding: '2rem 0'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24}}>
        <h2 style={{fontWeight: 800, fontSize: 32, color: '#FFD600', letterSpacing: 1}}>Workspace</h2>
        <TopRightControls />
      </div>
      <div style={{display: 'flex', gap: 32, alignItems: 'flex-start'}}>
        <div className="card" style={{flex: 2, minWidth: 0, minHeight: 500, boxShadow: '0 8px 32px #646cff22'}}>
          <WorkspaceEditor />
        </div>
        <div className="card" style={{flex: 1, minWidth: 320, minHeight: 500, boxShadow: '0 8px 32px #FFD60022'}}>
          <GitPanel />
        </div>
      </div>
      <div className="card" style={{marginTop: 40, padding: 0, overflow: 'hidden', boxShadow: '0 8px 32px #FFD60033'}}>
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/W5ZOQa_6wOPIOFFfMXkIY"
          width="100%"
          style={{ height: 500, minHeight: 400, border: 'none', display: 'block' }}
          frameBorder={0}
          title="AI Assistant"
        ></iframe>
      </div>
    </div>
  </div>
);

export default Workspace;
