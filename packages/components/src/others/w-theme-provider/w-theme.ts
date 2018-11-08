import { Theme } from '@material-ui/core/styles';
import { WPalette } from './w-palette';

export interface WTheme extends Theme {
  palette: WPalette;  
}