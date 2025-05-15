"use client";
import Editor from "@monaco-editor/react";
import { sampleCode } from "@/utils/sampleCode";

export default function MonacoEditor() {
  return (
    <div className="h-[500px] w-full border-2 border-[#b15efa] rounded-sm overflow-hidden shadow-sm">
      {/* Onglet style VS Code */}
      <div className="bg-[#1e1e1e] text-white text-sm font-mono border-b border-[#333] flex items-center">
        <div className="mt-2 px-2 py-2 border-t-2 border-t-[#b15efa] border-r border-r-[#333] flex items-center gap-2">
          <img src="js.png" alt="JS icon" className="w-4 h-4" />
          youtubeApi.js
        </div>
      </div>

      {/* Zone de code */}
      <Editor
        height="100%"
        defaultLanguage="javascript"
        defaultValue={sampleCode}
        theme="vs-dark"
        options={{
          readOnly: true,
          domReadOnly: true,
          minimap: { enabled: false },
          scrollbar: {
            vertical: "hidden",
            horizontal: "hidden",
            handleMouseWheel: false,
            alwaysConsumeMouseWheel: false,
          },
          scrollBeyondLastLine: false,
          lineNumbers: "off",
          overviewRulerLanes: 0,
          renderLineHighlight: "none",
          cursorStyle: "line",
          cursorBlinking: "solid",
        }}
      />
    </div>
  );
}
