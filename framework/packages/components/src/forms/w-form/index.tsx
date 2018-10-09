import * as React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import { Provider } from 'react-redux';
import { createFormStore } from '../w-form-store';

export interface WFormProps {
  initialValues: object;
  onSubmit: (values: object) => void;
}

export class WForm extends React.Component<WFormProps, {}> {
  public render() {    
    return (
      <Formik 
        {...this.props} 
        render={formikProps => 
          <Provider store={createFormStore({projectName: 'WFace'})}>
            <Form>
              {this.props.children}
            </Form>
          </Provider>
        }
      />
    );
  }
}
