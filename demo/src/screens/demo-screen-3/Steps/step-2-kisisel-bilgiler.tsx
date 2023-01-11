import * as React from 'react';
import {
  WWizardStepProps, WBox, WTextField,
  WButton
} from 'wface';

interface Step2KisiselBilgilerState {
}

export default class Step2KisiselBilgiler extends React.Component<WWizardStepProps, Step2KisiselBilgilerState> {
  constructor(props: WWizardStepProps) {
    super(props);
  }

  public render() {
    const { data, onDataChanged, onBackward, onForward } = this.props;

    return (
      <div>
        <WBox>
          <WTextField
            id="name"
            label="Adı"
            fullWidth
            value={data.name}
            onChange={e => onDataChanged({ ...data, name: e.target.value })}
          />
        </WBox>
        <WBox mt={1}>
          <WTextField
            id="lastname"
            label="Soyadı"
            fullWidth
            value={data.lastname}
            onChange={e => onDataChanged({ ...data, lastname: e.target.value })}
          />
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