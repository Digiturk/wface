import * as React from 'react';
import Slider, { SliderProps } from '@mui/material/Slider';
import { BaseComponentProps } from '../../base/base-component-props';

export type WSliderProps = BaseComponentProps & SliderProps & {  
}

export const  WSlider: React.FC<WSliderProps> = React.forwardRef((props) => {
  return (
    <Slider {...props}/>
  );
});

