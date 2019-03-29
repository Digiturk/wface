import * as React from 'react'
import { RadioGroup } from '@material-ui/core'
import { RadioGroupProps } from '@material-ui/core/RadioGroup'
import { WRadio } from './w-radio';
import { WTypography } from '../../others/w-typography';

export interface WRadioGroupOption {
  label: string; 
  value: any;
  disabled?: boolean;
}

export interface WRadioGroupProps extends RadioGroupProps { 
  axis?: 'horizontal' | 'vertical';
  label: string;
  options?: WRadioGroupOption[];
}

export class WRadioGroup extends React.Component<WRadioGroupProps, {}> {
  static defaultProps: WRadioGroupProps = {
    axis: 'horizontal',
    label: ''
  }

  public render() {
    let { children } = this.props; 
    if (this.props.options) {
      children = this.props.options.map(option => <WRadio {...option}/>)
    }

    const style = { 
      flexDirection: this.props.axis == "horizontal" ? "row" : "column"
    }

    const labelStyle = {
      marginRight: 15, 
      alignSelf: this.props.axis == "horizontal" ? "center" : "left"
    }

    return (
      <RadioGroup {...this.props} style={style as any}>
        <WTypography style={labelStyle}>{this.props.label}</WTypography>
        {children}
      </RadioGroup>
    );
  }
}