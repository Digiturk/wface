import { Palette, PaletteColor } from '@mui/material/styles';

export interface WPalette extends Partial<Palette> {
  info: PaletteColor;
  success: PaletteColor;
  warning: PaletteColor;
}
