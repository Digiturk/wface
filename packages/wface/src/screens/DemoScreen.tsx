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
        <WFace.WTabContainer
          centered
          defaultValue={0}
          indicatorColor="primary"
          title="T1"
          textColor="primary">
          <WFace.WTabPage label="SUB1">            
            <WFace.WTabContainer
              centered
              defaultValue={0}
              indicatorColor="primary"
              textColor="primary"
              title="T1.1">
              <WFace.WTabPage label="sub1 tab 1">sub1 1</WFace.WTabPage>
              <WFace.WTabPage label="sub1 tab 2">sub1 2</WFace.WTabPage>
            </WFace.WTabContainer>
          </WFace.WTabPage>
          <WFace.WTabPage label="SUB2">
            <WFace.WTabContainer
              centered
              defaultValue={0}
              indicatorColor="primary"
              textColor="primary"
              title="T1.2">
              <WFace.WTabPage label="sub2 tab 1">sub2 1</WFace.WTabPage>
              <WFace.WTabPage label="sub2 tab 2">sub2 2</WFace.WTabPage>
              <WFace.WTabPage label="sub2 tab 3">sub2 3</WFace.WTabPage>
            </WFace.WTabContainer>
          </WFace.WTabPage>
        </WFace.WTabContainer>
      </>
    )
  }
}