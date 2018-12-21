import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  formData: any;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      formData: undefined
    }
  }

  onSubmit = (values) => {
    alert(values.name);
  }

  public render() {
    return (
      <WFace.WTabContainer>
        <WFace.WTabPage label="t1">
          <WFace.WForm onSubmit={this.onSubmit} initialValues={{ name: 'abc' }}>
            <WFace.WCard>
              <WFace.WCardContent>
                <WFace.WFormField.TextField label="Adı" name="name" />
              </WFace.WCardContent>
              <WFace.WCardActions>
                <WFace.WFormField.Submit>Kaydet</WFace.WFormField.Submit>
              </WFace.WCardActions>
            </WFace.WCard >
          </WFace.WForm>
          {JSON.stringify(this.state.formData)}
        </WFace.WTabPage>
        <WFace.WTabPage label="t2">
          {JSON.stringify(this.state.formData)}
        </WFace.WTabPage>
      </WFace.WTabContainer>
    )
  }
}