import { useContext } from "react";
import { IThemeSetModeContext } from "../utils/types";
import { ThemeSetModeContext } from "../context/ThemeProviderCustom";

function useThemeSetMode(): IThemeSetModeContext {
  const currentThemeSetMode = useContext(ThemeSetModeContext);
  if (!currentThemeSetMode)
    throw new Error(
      "useThemeSetMode should be used within <ThemeSetModeContext.Provider>"
    );
  return currentThemeSetMode;
}

export default useThemeSetMode;
