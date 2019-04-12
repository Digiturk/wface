import * as React from 'react';
import * as WFace from '@wface/components';
import IOC from '@wface/ioc';

interface DemoScreen2State {
  data: any;
  open: boolean;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      open: false,
      data: [
        { label: 'A1', value: 'A1', icon: 'save' },
        { label: 'B1', value: 'B1', icon: <WFace.WIcon icon="refresh"/> },
        { label: 'C1', value: 'C1', icon: 'fas fa-blog', iconSource: 'fontawesome' },
        { label: 'D1', value: 'D1', icon: 'fas fa-save', iconSource: 'fontawesome'  },
        { label: 'E1', value: 'E1' },
        { label: 'F1', value: 'F1' },
        { label: 'G1', value: 'G1' },
        { label: 'H1', value: 'H1' },
        { label: 'I1', value: 'I1' },
        { label: 'A2', value: 'A2' },
        { label: 'B2', value: 'B2' },
        { label: 'C2', value: 'C2' },
        { label: 'D2', value: 'D2' },
        { label: 'E2', value: 'E2' },
        { label: 'F2', value: 'F2' },
        { label: 'G2', value: 'G2' },
        { label: 'H2', value: 'H2' },
        { label: 'I2', value: 'I2' },
        { label: 'A3', value: 'A3' },
        { label: 'B3', value: 'B3' },
        { label: 'C3', value: 'C3' },
        { label: 'D3', value: 'D3' },
        { label: 'E3', value: 'E3' },
        { label: 'F3', value: 'F3' },
        { label: 'G3', value: 'G3' },
        { label: 'H3', value: 'H3' },
        { label: 'I3', value: 'I3' },
        { label: 'A4', value: 'A4' },
        { label: 'B4', value: 'B4' },
        { label: 'C4', value: 'C4' },
        { label: 'D4', value: 'D4' },
        { label: 'E4', value: 'E4' },
        { label: 'F4', value: 'F4' },
        { label: 'G4', value: 'G4' },
        { label: 'H4', value: 'H4' },
        { label: 'I4', value: 'I4' },
      ],
    }
  }

  public render() {
    return (
      <>
        <WFace.WButton onClick={() => this.setState({ open: true })}>Open</WFace.WButton>
        <WFace.WSelect options={this.state.data}>
        </WFace.WSelect>
        <WFace.WTextField name="deneme"/>
        <WFace.WDialog open={this.state.open} fullWidth>
          <WFace.WDialogContent>
            <WFace.WSelect options={this.state.data}>

            </WFace.WSelect>
          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WButton onClick={() => this.setState({ open: false })}>Open</WFace.WButton>

          </WFace.WDialogActions>
        </WFace.WDialog>
      </>
    )
  }
}
