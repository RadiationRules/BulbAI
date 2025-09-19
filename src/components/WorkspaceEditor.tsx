import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { python } from '@codemirror/lang-python';
import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';

const languageExtensions: any = {
  javascript: javascript(),
  python: python(),
  markdown: markdown(),
};


const WorkspaceEditor = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState<'javascript' | 'python' | 'markdown'>('javascript');

  return (
    <div className="workspace-editor" style={{
      background: 'rgba(36,40,60,0.85)',
      borderRadius: 18,
      boxShadow: '0 8px 32px #646cff33, 0 2px 8px #FFD60022',
      padding: '2rem',
      backdropFilter: 'blur(12px)',
      border: '1.5px solid #646cff33',
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }}>
      <div className="editor-toolbar" style={{display: 'flex', alignItems: 'center', gap: 18, marginBottom: 12}}>
        <span style={{fontWeight: 700, fontSize: 18, color: '#FFD600'}}>Language:</span>
        <select value={language} onChange={e => setLanguage(e.target.value as any)} style={{fontWeight: 600, fontSize: 16, borderRadius: 8, padding: '0.4em 1em', border: '1.5px solid #FFD600', background: '#23272f', color: '#FFD600'}}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="markdown">Markdown</option>
        </select>
      </div>
      <div style={{flex: 1, minHeight: 320, borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 12px #FFD60022'}}>
        <CodeMirror
          value={code}
          height="320px"
          extensions={[languageExtensions[language], oneDark]}
          onChange={setCode}
          theme="dark"
        />
      </div>
    </div>
  );
};

export default WorkspaceEditor;
