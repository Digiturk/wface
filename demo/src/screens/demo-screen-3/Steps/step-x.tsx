import * as React from 'react';
import {
  WWizardStepProps, WBox, WTypography,
  WButton
} from 'wface';

interface StepXState {
}

export default class StepX extends React.Component<WWizardStepProps, StepXState> {
  constructor(props: WWizardStepProps) {
    super(props);
  }

  public render() {
    const { data, onDataChanged, onBackward, onForward, activeStep } = this.props;

    return (
      <div>
        <WBox mb={2}>
          <WTypography variant="h6">
            Component {activeStep + 1}
          </WTypography>
        </WBox>
        <WBox display="flex" justifyContent="flex-end" mt={2}>
          <WBox mr={1}>
            <WButton id="btnStep1" color="primary" variant="contained" onClick={onBackward}>
              Geri
            </WButton>
          </WBox>
          <WButton id="btnStep1" color="primary" variant="contained" onClick={onForward}>
            İleri
          </WButton>
        </WBox>
      </div>
    )
  }
}