import * as React from 'react';
import * as WFace from '@wface/components';
import { WFormValidation } from '@wface/components';

interface DemoScreenState {
  userData: any,
  lookup: any,
  textValue: string,
  selectValue: number,
  selectObject: any
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
      userData: {},
      lookup: [
        { label: 'Gaziantep', value: 27 },
        { label: 'İstanbul', value: '34' },
        { label: 'İzmir', value: 35 },
        { label: 'Şanlıurfa', value: 63 },
      ],
      selectValue: 35,
      selectObject: {}
    }
  }

  public render() {
    const size = 'small'
    const value = this.props.appContext.cache["key1"];

    return (
      <React.Fragment>
        <WFace.WCard >
          <WFace.WCardHeader title="Select Deneme" />
          <WFace.WCardContent>
            <WFace.WForm onSubmit={(obj) => alert(JSON.stringify(obj)) } initialValues={{c: true, d: '2'}}> 
              <WFace.WFormField.Checkbox name="c" label="deneme"/>
              <WFace.WFormField.RadioGroup name="d" label="2asdlkjlkj" options={[                
                {label:'a', value: '1'},
                {label:'v', value: '2'},
                {label:'c', value: '3'},
                {label:'a', value: '4'},
              ]}/>
              <WFace.WFormField.Submit>Deneme</WFace.WFormField.Submit>
            </WFace.WForm>
          </WFace.WCardContent>
        </WFace.WCard>

        
      </React.Fragment>
    )
  }

  public renderForm() {
    return (
      <div>
        <WFace.WForm
          initialValues={{
            checkbox: false,
            date: new Date(1987, 2, 21),
            dateTime: new Date(),
            radio: '63',
            select: '34',
            selectMulti: ['27'],
            switch: true,
            text: 'text',
            time: new Date(),
          }}
          onSubmit={val => this.setState({ userData: val })}
        >
          <WFace.WGrid container>
            <WFace.WGrid item xs={6}>
              <WFace.WCard>
                <WFace.WCardHeader title="Kullanıcı Bilgileri" />
                <WFace.WCardContent>
                  <WFace.WFormField.Checkbox name="checkbox" label="Form Checkbox" />
                  <WFace.WFormField.DatePicker name="date" label="Form Date" />
                  <WFace.WFormField.DateTimePicker name="dateTime" label="Form DateTime" />
                  <WFace.WFormField.RadioGroup name="radio" label="Form Radio" options={this.state.lookup} />
                  <WFace.WFormField.Select name="select" label="Form Select" options={this.state.lookup} />
                  <WFace.WFormField.Select name="selectMulti" label="Form Select Multi" options={this.state.lookup} isMulti />
                  <WFace.WFormField.Switch name="switch" label="Form Switch" />
                  <WFace.WFormField.TextField name="text" label="Form TextField" />
                  <WFace.WFormField.TimePicker name="time" label="Form Time" />
                </WFace.WCardContent>
                <WFace.WCardActions>
                  <WFace.WFormField.Submit>Gönder</WFace.WFormField.Submit>
                </WFace.WCardActions>
              </WFace.WCard>
            </WFace.WGrid>
            <WFace.WGrid item xs={6}>
              <WFace.WCard>
                <WFace.WCardHeader title="Kullanıcı Bilgileri" />
                <WFace.WCardContent>
                  {JSON.stringify(this.state.userData, null, "\t")}
                  <br />
                  {this.state.textValue}
                </WFace.WCardContent>
              </WFace.WCard>
            </WFace.WGrid>
          </WFace.WGrid>
        </WFace.WForm>
      </div >
    )
  }
}