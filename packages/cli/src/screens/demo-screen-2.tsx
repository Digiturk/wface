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
        <WFace.WForm onSubmit={() => {}} initialValues={{}}>
          <WFace.WFormField.Select useFastField={false} label="lbl" name="lbl" options={[{ label: 'A', value: 'A' }, { label: 'B', value: 'B' }]} isClearable/>
          <WFace.WFormField.Submit>asd</WFace.WFormField.Submit>
        </WFace.WForm>        
      </>
    )
  }
}
