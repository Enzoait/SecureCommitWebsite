import { Input } from "./ui/input";

export default function CommandPalette() {

  const sampleCommands = [
    "File: Open Recent",
    "Go to Symbol in Workspace...",
    "Git: Clone",
    "View: Toggle Terminal",
    "Debug: Start Debugging",
    "Preferences: Open Settings (UI)",
    "Extensions: Install Extensions",
    "Markdown: Preview",
    "Explorer: Focus on Explorer View",
    "Search: Find in Files",
    "Tasks: Run Build Task",
    "Terminal: Create New Integrated Terminal",
    "Help: About",
  ];

  return (
    <div className="flex flex-col items-center p-2 gap-2 bg-white dark:bg-[#1e1e1e] h-[500px] w-full border-2 border-[#b15efa] rounded-sm overflow-hidden shadow-sm">
      <Input placeholder=">SecureCommit : ScanWorkspace" disabled />
      <div className="flex flex-col border-2 border-[#ededed] rounded-md w-full h-full dark:border-[#333]">
        <div className="p-0.5 rounded-t-sm bg-[#CBE8F6] dark:bg-[#094771] hover:bg-[#ededed] dark:hover:bg-[#333]">
          SecureCommit : ScanWorkspace
        </div>
        <div className="p-0.5 hover:bg-[#ededed] dark:hover:bg-[#333]">
          SecureCommit : Version
        </div>
        <div className="border-b-2 border-b-[#ededed] dark:border-b-[#333]"></div>
        {sampleCommands.map((command) => (
          <div
            className="p-0.5 hover:bg-[#ededed] dark:hover:bg-[#333]"
            key={command}
          >
            {command}
          </div>
        ))}
      </div>
    </div>
  );
}
