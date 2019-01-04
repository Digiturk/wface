import * as React from 'react';
import { Formik, Form, FormikActions, FormikErrors, FormikProps } from 'formik';
import * as Yup from 'yup';

export interface WFormActions extends FormikActions<any> { }
export interface WFormErrors extends FormikErrors<any> { }

export interface WFormProps {
  initialValues: any;
  onSubmit: (values: any, formikActions?: WFormActions) => void;
  validationSchema?: any | (() => any);
  validate?: ((values: any) => void | object | Promise<WFormErrors>);
  enableReinitialize?: boolean;
  onChange?: (values: any) => void;
}

export class WForm extends React.Component<WFormProps, {}> {
  public render() {
    return (
      <Formik
        {...this.props}
        validate={values => {
          if(this.props.onChange) {
            this.props.onChange(values);
          }

          if(this.props.validate) { 
            this.props.validate(values);
          }
        }}        
        render={(
          formikProps: FormikProps<any>) => {
          return(
            <Form>
              {this.props.children}
            </Form>
          );
        }
        }
      />
    );
  }
}

export { Yup as WFormValidation }