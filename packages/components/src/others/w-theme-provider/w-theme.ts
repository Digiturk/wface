import { Theme } from '@material-ui/core/styles';
import { WPalette } from './w-palette';
import { WDesignDetails } from './w-design-details';
import { WComponentsProps } from './w-component-props';

export type WTheme = Theme & {
  designDetails?: WDesignDetails; 
  palette: WPalette;
  props?: WComponentsProps;
}