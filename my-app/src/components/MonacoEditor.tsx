"use client";
import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

export default function MonacoEditor() {
  const editorContainer = useRef(null); 

  useEffect(() => {
    if (editorContainer.current) {
      // Crée l'éditeur Monaco
      monaco.editor.create(editorContainer.current, {
        value: [
          'function helloMonaco() {',
          '  console.log("Hello, Monaco Editor!");',
          '}'
        ].join('\n'),
        language: 'javascript',  
        theme: 'vs-dark',        
        automaticLayout: true    
      });
    }

    return () => {
      // Nettoyage quand le composant est démonté
      if (editorContainer.current) {
        monaco.editor.getModels().forEach(model => model.dispose());
      }
    };
  }, []);

  return (
    <div
      ref={editorContainer}
      style={{
        height: '500px', 
        width: '100%',
        border: '1px solid #ccc',
      }}
    ></div>
  );
};
