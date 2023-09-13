/**
 * custom context to provide and consume 'theme', 'mode' and 'setMode'.
 * they are used to toggle between 'light' and 'dark' theme.
 */

import { useState, createContext, useMemo } from "react";
import { ThemeProvider, createTheme, PaletteMode } from "@mui/material";
import {
  IChildProps,
  IThemeModeContext,
  IThemeSetModeContext,
} from "../types";

export const ThemeModeContext = createContext<IThemeModeContext | null>(null);
export const ThemeSetModeContext = createContext<IThemeSetModeContext | null>(
  null
);

export function ThemeProviderCustom({ children }: IChildProps) {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={mode}>
      <ThemeSetModeContext.Provider value={setMode}>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </ThemeSetModeContext.Provider>
    </ThemeModeContext.Provider>
  );
}
