import * as React from 'react';
import * as WFace from '@wface/components';

interface StepXState {
}

export default class StepX extends React.Component<WFace.WWizardStepProps, StepXState> {
  constructor(props: WFace.WWizardStepProps) {
    super(props);
  }

  public render() {
    const { data, onDataChanged, onBackward, onForward, activeStep } = this.props;

    return (
      <div>
        <WFace.WBox mb={2}>
          <WFace.WTypography variant="h6">
            Component {activeStep + 1}
          </WFace.WTypography>
        </WFace.WBox>
        <WFace.WBox display="flex" justifyContent="flex-end" mt={2}>
          <WFace.WBox mr={1}>
            <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onBackward}>
              Geri
            </WFace.WButton>
          </WFace.WBox>
          <WFace.WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WFace.WButton>
        </WFace.WBox>
      </div>
    )
  }
}