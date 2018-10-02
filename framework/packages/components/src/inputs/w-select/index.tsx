import * as React from 'react';
import Select, { SelectProps } from '@material-ui/core/Select'
import { MenuItem, InputLabel, FormControl } from '@material-ui/core'

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
          return this.props.render(item);
        }
        else {
          return <MenuItem value={item.value}>{item.label || item.value}</MenuItem>
        }            
      }) : this.props.children;


    if(this.props.label) {
      return (
        <FormControl fullWidth={this.props.fullWidth} style={this.props.style}>
          <InputLabel>{this.props.label}</InputLabel>
          <Select {...this.props} style={{}}>
            {children}  
          </Select>
        </FormControl>
      )
    }
    else {
      return <Select {...this.props} children={children}/>;
    }      
  }
}