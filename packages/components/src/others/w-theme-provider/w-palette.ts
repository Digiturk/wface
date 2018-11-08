import { Palette, PaletteColor } from "@material-ui/core/styles/createPalette";

export interface WPalette extends Palette {
  info: PaletteColor;
  success: PaletteColor;
  warning: PaletteColor;
}