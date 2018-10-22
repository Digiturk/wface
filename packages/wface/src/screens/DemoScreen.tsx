import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  inputValue?: string,
  city1?: string;
  city2?: string;
  options: any;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
    }
  }

  public render() {    
    return (
      <div>     
        <WFace.WCard>     
          <WFace.WButton onClick={() => this.props.showSnackbar('Successfully fetched the data.', 'success')}>Show</WFace.WButton>
          <WFace.WButton onClick={() => this.props.showSnackbar('Successfully fetched the data.', 'error')}>Show</WFace.WButton>
          <WFace.WButton onClick={() => this.props.showSnackbar('Successfully fetched the data.', 'info')}>Show</WFace.WButton>
          <WFace.WButton onClick={() => this.props.showSnackbar('Successfully fetched the data.', 'warning')}>Show</WFace.WButton>
        </WFace.WCard>      
      </div>
    )
  }
}