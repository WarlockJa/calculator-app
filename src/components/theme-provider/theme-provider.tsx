"use client";

import { createContext, ReactNode, useContext, useState } from "react";

const CalculatorThemeContext = createContext<{
  theme: CalculatorTheme;
  setTheme: (theme: CalculatorTheme) => void;
} | null>(null);

export function ThemeProvider({
  children,
  initTheme,
  setNewTheme,
}: {
  children: ReactNode;
  initTheme: CalculatorTheme;
  setNewTheme: (theme: CalculatorTheme) => void;
}) {
  const [theme, setTheme] = useState<CalculatorTheme>(initTheme);

  return (
    <CalculatorThemeContext.Provider
      value={{
        theme,
        setTheme: (theme: CalculatorTheme) => {
          setNewTheme(theme);
          setTheme(theme);
        },
      }}
    >
      {children}
    </CalculatorThemeContext.Provider>
  );
}

export function useTheme() {
  const themeData = useContext(CalculatorThemeContext);

  if (!themeData) throw "Should be used inside CalculatorThemeContext.Provider";

  return themeData;
}
