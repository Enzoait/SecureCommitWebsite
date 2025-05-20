"use client";
import Editor from "@monaco-editor/react";
import { MonacoEditorTheme } from "@/constants/ThemeConstants";
import { useTheme } from "next-themes";

export default function MonacoEditor(props: {
  tabTitle: string;
  logoPath: string;
  defaultLangage: string;
  sampleCode: string;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="h-[500px] w-full pr-2 bg-background dark:bg-[#1e1e1e] border-2 border-[#b15efa] rounded-sm overflow-hidden shadow-sm">
      {/* Onglet style VS Code */}
      <div className="bg-background dark:bg-[#1e1e1e] text-[#1e1e1e] dark:text-white text-sm font-mono border-b border-[#333] flex items-center">
        <div className="mt-2 px-2 py-2 border-t-2 border-t-[#b15efa] border-r border-r-[#333] flex items-center gap-2">
          <img src={props.logoPath} alt="icon" className="w-4 h-4" />
          {props.tabTitle}
        </div>
      </div>

      {/* Zone de code */}
      <Editor
        height="100%"
        defaultLanguage={props.defaultLangage}
        defaultValue={props.sampleCode}
        theme={
          resolvedTheme === "light"
            ? MonacoEditorTheme.light
            : MonacoEditorTheme.dark
        }
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
