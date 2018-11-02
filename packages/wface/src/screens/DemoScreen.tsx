import * as React from 'react';
import * as WFace from '@wface/components';
// import { Formik, Form, Field } from 'formik';
import * as Mat from '@material-ui/core';
import DefaultHttpService from '@wface/ioc/src/implementations/DefaultHttpService'
import { DateTimePicker } from '@wface/components/src/forms/w-form-field/date-time-picker';

interface DemoScreenState {
  userData: any
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
      userData: { }
    }
  }

  tryGet = () => {
    this.props.httpService.get<RootObject>('https://reqres.in/api/users', {page: '2'})
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
            text: 'some text',
            date: new Date(1987, 3, 21),
            dateTime: new Date(),
            time: new Date(),          
          }} 
          onSubmit={(val) => this.setState({userData: val})}
        >
          <WFace.WGrid container>
            <WFace.WGrid item xs={6}>
              <WFace.WCard>
                <WFace.WCardHeader title="Kullanıcı Bilgileri"/>
                <WFace.WCardContent>                  
                  <WFace.WFormField.Checkbox name="checkbox" label="Form Checkbox"/>    
                  <WFace.WFormField.TextField name="text" label="Form TextField" />                  
                  <WFace.WFormField.DatePicker name="date" label="Form Date"/>
                  <WFace.WFormField.TextField name="text2" label="Form TextField2" />                  
                  <WFace.WFormField.DateTimePicker name="dateTime" label="Form DateTime"/>                  
                  <WFace.WFormField.TimePicker name="time" label="Form Time"/>
                </WFace.WCardContent>
                <WFace.WCardActions>
                  <WFace.WFormField.Submit>Gönder</WFace.WFormField.Submit>             
                </WFace.WCardActions>
              </WFace.WCard>
            </WFace.WGrid>
            <WFace.WGrid item xs={6}>
              {JSON.stringify(this.state.userData, null, "\t")}
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
