import { PaletteMode } from "@mui/material";

export type IThemeModeContext = PaletteMode;

export type IThemeSetModeContext = React.Dispatch<
  React.SetStateAction<PaletteMode>
>;

export interface IChildProps {
  children: React.ReactNode;
}
