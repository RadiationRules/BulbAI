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
  const [code, setCode] = useState('// Start coding!');
  const [language, setLanguage] = useState<'javascript' | 'python' | 'markdown'>('javascript');

  return (
    <div className="workspace-editor">
      <div className="editor-toolbar">
        <select value={language} onChange={e => setLanguage(e.target.value as any)}>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="markdown">Markdown</option>
        </select>
      </div>
      <CodeMirror
        value={code}
        height="400px"
        extensions={[languageExtensions[language], oneDark]}
        onChange={setCode}
        theme="dark"
      />
    </div>
  );
};

export default WorkspaceEditor;
