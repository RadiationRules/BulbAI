import React from 'react';
import WorkspaceEditor from '../components/WorkspaceEditor';
import GitPanel from '../components/GitPanel';
import TopRightControls from '../components/TopRightControls';

const Workspace = () => (
  <div className="workspace-page">
    <h2>Workspace</h2>
    <TopRightControls />
    <div style={{ display: 'flex', gap: 24 }}>
      <div style={{ flex: 2 }}>
        <WorkspaceEditor />
      </div>
      <div style={{ flex: 1 }}>
        <GitPanel />
      </div>
    </div>
    <div style={{ marginTop: 32 }}>
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/W5ZOQa_6wOPIOFFfMXkIY"
        width="100%"
        style={{ height: '100%', minHeight: 700 }}
        frameBorder={0}
        title="AI Assistant"
      ></iframe>
    </div>
  </div>
);

export default Workspace;
