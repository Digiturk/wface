import * as React from 'react';
import * as WFace from '@wface/components';
import IOC from '@wface/ioc';

interface DemoScreen2State {
  data: any;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      data: ''
    }
  }

  public render() {
    return (
      <>
        <WFace.WTextField type="number" value={this.state.data} onChange={e => this.setState({ data: e.target.value })} />
      </>
    )
  }
}
