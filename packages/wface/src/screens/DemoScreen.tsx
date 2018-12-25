import * as React from 'react';
import * as WFace from '@wface/components';
import { noop } from 'react-select/lib/utils';

interface DemoScreenState {
  textValue: string;
  textValue2: string;
  isDialogOpen: boolean;
  formData: any;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      textValue: '',
      isDialogOpen: false,
      formData: {
        name: ''
      }
    }
  }

  componentWillMount() {
    // setTimeout(() => this.setState({ formData: { name: 'deneme' } }), 2000);
    setTimeout(() => this.setState({ textValue: 'deneme', textValue2: 'sadsad' }), 300);
  }

  public render() {
    return (
      <>        
        <WFace.WTextField label="Değer" value={this.state.textValue} onChange={event => this.setState({textValue: event.target.value})}/>
        <br/>
        <WFace.WTextField label="Değer2" value={this.state.textValue2} onChange={event => this.setState({textValue: event.target.value})}/>
        <WFace.WDialog title="Deneme" open={this.state.isDialogOpen}>
          <WFace.WDialogContent>
            <WFace.WForm initialValues={this.state.formData} onSubmit={() => noop} enableReinitialize>
              <WFace.WFormField.TextField label="Adı" name="name"/>
              {/* <WFace.WTextField label="Text" value={this.state.textValue} onChange={event => this.setState({ textValue: event.target.value })} /> */}
            </WFace.WForm>
          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WButton onClick={() => this.setState({ isDialogOpen: false })}>Kapat</WFace.WButton>
          </WFace.WDialogActions>
        </WFace.WDialog>
      </>
    )
  }
}