import { Theme } from '@material-ui/core/styles';
import { WPalette } from './w-palette';
import { WDesignDetails } from './w-design-details';

export interface WTheme extends Theme {
  palette: WPalette;
  designDetails?: WDesignDetails; 
}