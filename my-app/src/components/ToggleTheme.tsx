"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("light");

  // Only show after first render to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
    console.log("Theme changed to:", newTheme); // Debug log

    // Add a visual indicator that the button was clicked
    document.body.classList.add("theme-changing");
    setTimeout(() => {
      document.body.classList.remove("theme-changing");
    }, 500);
  };

  if (!mounted) {
    return <div className="w-9 h-9"></div>;
  }

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
