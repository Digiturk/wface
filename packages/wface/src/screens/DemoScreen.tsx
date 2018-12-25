import * as React from 'react';
import * as WFace from '@wface/components';
import { WFormValidation } from '@wface/components';

interface DemoScreenState {
  formData: any;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
    }
  }

  public render() {
    return (
      <div>This is demo screen</div>
    )
  }
}