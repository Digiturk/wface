import * as React from 'react';
import * as WFace from '@wface/components';
import { WFormValidation } from '@wface/components';

interface DemoScreenState {
  userData: any,
  lookup: any,
  textValue: string
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
      userData: {},
      lookup: [
        // {label: 'Adana', value: '01'},
        // {label: 'Adıyaman', value: '03'},
        // {label: 'Ankara', value: '06'},
        // {label: 'Antalya', value: '07'},
        { label: 'Gaziantep', value: '27' },
        { label: 'İstanbul', value: '34' },
        { label: 'İzmir', value: '35' },
        { label: 'Şanlıurfa', value: '63' },
      ],
      textValue: ''
    }
  }

  tryGet = () => {
    this.props.httpService.get<RootObject>('https://reqres.in/api/users', { page: '2' })
      .then(response => {
        alert(response.page);
      })
      .catch(error => {

      })
      .finally(() => {

      });
  }

  public render() {
    return this.renderForm();
  }

  public renderDialog() {
    return (
      <WFace.WDialog open={true}>
        <WFace.WForm
          initialValues={{
            checkbox: false,
            date: new Date(1987, 3, 21),
            dateTime: new Date(),
            radio: '63',
            select: '34',
            selectMulti: ['27'],
            switch: true,
            text: 'some text',
            time: new Date(),
          }}
          onSubmit={(val) => this.setState({ userData: val })}
        >
          <WFace.WDialogTitle>Deneme</WFace.WDialogTitle>
          <WFace.WDialogContent>
            <WFace.WFormField.Checkbox name="checkbox" label="Form Checkbox" />
            <WFace.WFormField.DatePicker name="date" label="Form Date" />
            <WFace.WFormField.DateTimePicker name="dateTime" label="Form DateTime" />
            <WFace.WFormField.RadioGroup name="radio" label="Form Radio" options={this.state.lookup} />
            <WFace.WFormField.Select name="select" label="Form Select" options={this.state.lookup} />
            <WFace.WFormField.Select name="selectMulti" label="Form Select Multi" options={this.state.lookup} isMulti />
            <WFace.WFormField.Switch name="switch" label="Form Switch" />
            <WFace.WFormField.TextField name="text" label="Form TextField" />
            <WFace.WFormField.TimePicker name="time" label="Form Time" />
          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WFormField.Submit>Gönder</WFace.WFormField.Submit>
          </WFace.WDialogActions>
        </WFace.WForm>
      </WFace.WDialog>
    );
  }


  public renderHttpGet() {
    return (
      <React.Fragment>
        <WFace.WButton onClick={this.tryGet}>Req</WFace.WButton>
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
          validationSchema={
            WFormValidation.object().shape({
              text: WFormValidation.string().required(),
              selectMulti: WFormValidation.array().min(2),
              date: WFormValidation.date().min(new Date()),     
            })
          }
          // validate={values => {
          //   return {
          //     checkbox: 'error text',
          //     date: 'error text',
          //     dateTime: 'error text',
          //     radio: 'error text',
          //     select: 'error text',
          //     selectMulti: 'error text',
          //     switch: 'error text',
          //     text: 'error text',
          //     time: 'error text'
          //   }

          //   let errors = {} as any;
          //   console.log(values);

          //   if(values.text.length < 3) {
          //     errors.text = "Text should be 3 character at least";
          //   }

          //   return errors;
          // }}
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


export interface Datum {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface RootObject {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Datum[];
}
