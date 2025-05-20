"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("light");

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <Button
        onClick={toggleTheme}
        variant="outline"
        size="icon"
        className="relative h-10 w-10 rounded-full border-2 transition-colors cursor-pointer"
      >
        {currentTheme === "dark" ? (
          <Sun className="h-5 w-5 text-slate-100" />
        ) : (
          <Moon className="h-5 w-5 text-slate-700" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  );
}
