import * as React from 'react';
import * as WFace from '@wface/components';

interface Step2KisiselBilgilerState {
}

export default class Step2KisiselBilgiler extends React.Component<WFace.WWizardStepProps, Step2KisiselBilgilerState> {
  constructor(props: WFace.WWizardStepProps) {
    super(props);
  }

  public render() {
    const { data, onDataChanged, onBackward, onForward } = this.props;

    return (
      <div>
        <WFace.WBox>
          <WFace.WTextField
            id="name"
            label="Adı"
            fullWidth
            value={data.name}
            onChange={e => onDataChanged({ ...data, name: e.target.value })}
          />
        </WFace.WBox>
        <WFace.WBox mt={1}>
          <WFace.WTextField
            id="lastname"
            label="Soyadı"
            fullWidth
            value={data.lastname}
            onChange={e => onDataChanged({ ...data, lastname: e.target.value })}
          />
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