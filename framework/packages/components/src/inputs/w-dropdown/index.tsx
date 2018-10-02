import * as React from 'react';
import MuiDownshift from 'mui-downshift'

export interface WDropdownProps { 
  items?: {label: string | React.ReactNode, value: any}[];
  label?: string;
  onChange?: (event:any, newValue:any) => void;
  style?: any;
}

export class WDropdown extends React.Component<WDropdownProps, {}> {
  public render() {
    return (
      <span style={this.props.style}>
        <MuiDownshift 
          items={this.props.items}
          getInputProps={() => ({
            label: this.props.label,          
          })}
          onStateChange={this.props.onChange}        
        />
      </span>
    );
  }
}