import * as React from 'react';
import Select, { SelectProps } from '@material-ui/core/Select'
import { MenuItem, InputLabel } from '@material-ui/core'
import { WFormControl, WFormControlProps } from '../../forms/w-form-control'

export interface WSelectProps extends SelectProps {
  data: {label?: string, value: any}[];
  label?: string;
  render?: (item:any) => React.ReactNode;
}

export class WSelect extends React.Component<WSelectProps, {}> {
  public render() {
    const children = this.props.data ? 
      this.props.data.map(item => {
        if(this.props.render) {
          this.props.render(item)
        }
        else {
          return <MenuItem value={item.value}>{item.label || item.value}</MenuItem>
        }            
      }) : this.props.children;


    if(this.props.label) {
      return (
        <WFormControl fullWidth={this.props.fullWidth} style={this.props.style}>
          <InputLabel>{this.props.label}</InputLabel>
          <Select {...this.props} style={{}}>
            {children}  
          </Select>
        </WFormControl>
      )
    }
    else {
      return <Select {...this.props} children={children}/>;
    }      
  }
}