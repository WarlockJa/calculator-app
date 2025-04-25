"use client";

import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider/theme-provider";

export default function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const themeClass =
    theme === "theme3"
      ? "translate-x-5"
      : theme === "theme1"
        ? "-translate-x-5"
        : undefined;

  function handleThemeSwitch() {
    switch (theme) {
      case "theme1":
        setTheme("theme2");
        break;

      case "theme2":
        setTheme("theme3");
        break;

      case "theme3":
        setTheme("theme1");
        break;

      default:
        setTheme("theme1");
    }
  }

  function handleArrowThemeSwitch(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.code !== "ArrowLeft" && e.code !== "ArrowRight") return;
    switch (theme) {
      case "theme1":
        setTheme(e.code === "ArrowLeft" ? "theme3" : "theme2");
        break;
      case "theme2":
        setTheme(e.code === "ArrowLeft" ? "theme1" : "theme3");
        break;
      case "theme3":
        setTheme(e.code === "ArrowLeft" ? "theme2" : "theme1");
        break;
    }
  }

  return (
    <div className={cn("flex w-[4.5em] cursor-pointer flex-col", className)}>
      <div className="text-custom-text-offhand flex justify-around pr-1 pl-1.5 text-sm font-semibold">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
      <div
        className={
          "bg-custom-bg-keypad group flex w-full justify-center rounded-3xl p-1"
        }
        tabIndex={0}
        onClick={handleThemeSwitch}
        onKeyDownCapture={handleArrowThemeSwitch}
      >
        <div
          className={cn(
            "bg-custom-keys-bg-secondary group-hover:bg-custom-keys-bg-secondary-hover aspect-square w-4 rounded-full transition-transform",
            themeClass,
          )}
        ></div>
      </div>
    </div>
  );
}
