import * as React from 'react';
import * as WFace from '@wface/components';
import { Formik } from 'formik';

interface TestScreenState {
  dialogOpen: boolean;
  columns: WFace.WTableColumn[];
  data: object[];
  date: Date;
  serviceList: any[];
  currentCity: number;
}

export class TestScreen extends React.Component<WFace.BaseScreenProps, TestScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenContext.state || {
      currentCity: 27,
      dialogOpen: false,
      serviceList: [
        { label: 'Gaziantep', value: 27 },
        { label: 'İstanbul', value: 34 },
        { label: 'Şanlıurfa', value: 63 }
      ]
    }
  }


  public render() {
    const formControlStyle = {marginTop: 5}
    return this.renderFormik();
    // return this.renderTaskCreateDialog();
  }

  private renderFormik() {
    return (
      <WFace.WCard style={{maxWidth: 300, padding: 30}}>
        <h3>Anywhere in your app!</h3>
        <Formik
          initialValues={{ email: 'mail', password: '' }}
          validate={values => {
            let errors:any = {};
            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 1200);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <WFace.WTextField 
                label="Mail Adresi"
                fullWidth
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={errors.email && touched.email && Boolean(errors.email)}
                helperText={errors.email && touched.email && errors.email}
              />
              <WFace.WTextField 
                label="Şifreniz"
                fullWidth
                type="password" 
                name="password" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}/>
              {errors.password && touched.password && errors.password}
              <WFace.WLoadingButton 
                type="submit" 
                isLoading={isSubmitting} 
                progressType="circular"              
              >
                Submit
              </WFace.WLoadingButton>
              {/* <button type="submit" disabled={isSubmitting}>
                Submit
              </button> */}
            </form>
          )}
        </Formik>
      </WFace.WCard>
    )
  }

  private renderWFaceForm() {
    return (
      <div>        
        {props => (
          <React.Fragment>
            <WFace.WTextField name="email"></WFace.WTextField>
            <WFace.WTextField name="name"></WFace.WTextField>
            <WFace.WTextField name="surname"></WFace.WTextField>
            <WFace.WButton>Deneme</WFace.WButton>
          </React.Fragment>
          )}
      </div>
        
        
    )
  }

  private renderTaskCreateDialog() {
    const formControlStyle = {marginTop: 5};

    return (
      <WFace.WBasicDialog
        open={true}
        title="Create Scheduled Task"
        actions={[
          {
            text: 'Save',
            onClick: () => {
              alert('Save schedule clicked');
            }
          }
        ]}                    
      >
        <WFace.WDropdown style={formControlStyle} label="Service Name" items={[{ label: "Digiturk", value: 'val'}]}/>
        <WFace.WDropdown style={formControlStyle} label="Method Name" items={[{ label: "Digiturk", value: 'val'}]}/>
        <WFace.WCheckbox label="Enabled"/><br/>
        <WFace.WCheckbox label="Allow Multiple"/>
        {/* <WFace.WDateTimePicker style={formControlStyle} label="Start Time" fullWidth/>
        <WFace.WDateTimePicker style={formControlStyle} label="Expire Time" fullWidth/>
        <WFace.WSelect style={formControlStyle} label="Recurring Type" fullWidth data={this.state.recurringTypes}/>
        <WFace.WSelect style={formControlStyle} label="Application" fullWidth data={this.state.applications}/>
        <WFace.WSelect style={formControlStyle} label="Channel" fullWidth data={this.state.channels}/>
        <WFace.WSelect style={formControlStyle} label="Client" fullWidth data={this.state.clients}/> */}
      </WFace.WBasicDialog>
    );
  }
}