import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
    }
  }

  public render() {
    return (
      <>              
        This is demo screen
      </>
    )
  }
}