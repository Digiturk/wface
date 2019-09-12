import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreen2State {
  data: any;
  open: boolean;
  nestedPageState: any;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      open: false,
      data: [
      ],
      nestedPageState: null
    }
  }

  public render() {
    return (
      <>
        <WFace.WGrid container>
          <WFace.WGrid item lg={6}>
            <WFace.WCard>
              <WFace.WCardHeader title="Card" />
              <WFace.WCardContent>

                <WFace.WSelect id="cmbCity"
                  label="Şehir"
                  options={[
                    { label: 'Adana', value: '1' },
                    { label: 'Gaziantep', value: '27' },
                    { label: 'İstanbul', value: '34' },
                    { label: 'Şanlıurfa', value: '63' }
                  ]}
                />

              </WFace.WCardContent>
              <WFace.WCardActions>
                <WFace.WButton id="btn">
                  Save
            </WFace.WButton>
              </WFace.WCardActions>
            </WFace.WCard>
          </WFace.WGrid>
        </WFace.WGrid>
      </>
    )
  }
}