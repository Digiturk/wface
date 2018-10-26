import * as React from 'react';
import { Formik, Form } from 'formik';

export interface WFormProps {
  initialValues: any;
  onSubmit: (values: object) => void;
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
