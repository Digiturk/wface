import * as React from 'react';
import { Formik, Form, FormikActions, FormikErrors } from 'formik';

export interface WFormActions extends FormikActions<any> { }
export interface WFormErrors extends FormikErrors<any> { }

export interface WFormProps {
  initialValues: any;
  onSubmit: (values: any, formikActions?: WFormActions) => void;
  validationSchema?: any | (() => any);
  validate?: ((values: any) => void | object | Promise<WFormErrors>);
}

export class WForm extends React.Component<WFormProps, {}> {
  public render() {    
    return (
      <Formik 
        {...this.props} 
        render={formikProps =>           
          <Form>
            {this.props.children}
          </Form>
        }
      />
    );
  }
}
