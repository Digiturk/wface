import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  textValue: string;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      textValue: ''
    }
  }

  componentWillMount() {
    this.setState({textValue: 'deneme'});
    // this.state = {
    //   textValue: 'alsjdkalskjd'    
    // }
  }

  public render() {
    return (
      <>              
        <WFace.WTextField label="Text" value={this.state.textValue} onChange={event => this.setState({textValue: event.target.value})}/>
      </>
    )
  }
}