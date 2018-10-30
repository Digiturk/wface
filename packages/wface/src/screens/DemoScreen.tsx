import * as React from 'react';
import * as WFace from '@wface/components';
// import { Formik, Form, Field } from 'formik';
import * as Mat from '@material-ui/core';

interface DemoScreenState {
  userData: any
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
      userData: { name: '', surname: '', isMarried: false }
    }
  }


  public render() {
    return (
      <React.Fragment>       
        <WFace.WExpansionPanel title="Panel"
          actions={[
            {text: "Gönder", onClick: () => { alert('ok')}}
          ]}
        >
          deneme
        </WFace.WExpansionPanel>        
      </React.Fragment>
    )
  }

  public renderForm() {
    return (
      <div>
        <WFace.WForm 
          initialValues={{ name: 'mehmet', surname: 'baran', isMarried: false }} 
          onSubmit={(val) => this.setState({userData: val})}
        >
          <WFace.WGrid container>
            <WFace.WGrid item xs={6}>
              <WFace.WCard>
                <WFace.WCardHeader title="Kullanıcı Bilgileri"/>
                <WFace.WCardContent>
                  <WFace.WFormField.WTextField name="name" label="Adı" />
                  <WFace.WFormField.WTextField name="surname" label="Soyadı" />
                  <WFace.WFormField.WDatePicker name="birthDate" label="Doğum Tarihi"/>
                  <WFace.WFormField.WCheckbox name="isMarried" label="Evli" />
                </WFace.WCardContent>
                <WFace.WCardActions>
                  <WFace.WFormField.Submit>Gönder</WFace.WFormField.Submit>             
                </WFace.WCardActions>
              </WFace.WCard>
            </WFace.WGrid>
            <WFace.WGrid item xs={6}>
              {JSON.stringify(this.state.userData)}
            </WFace.WGrid>
          </WFace.WGrid>                    
        </WFace.WForm>   
      </div >
    )
  }
}