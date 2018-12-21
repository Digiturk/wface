import * as React from 'react';
import { Formik, Form, FormikActions, FormikErrors, FormikProps } from 'formik';
import * as Yup from 'yup';
import { WFormPersist } from '../w-form-persist';

export interface WFormActions extends FormikActions<any> { }
export interface WFormErrors extends FormikErrors<any> { }

export interface WFormProps {
  initialValues: any;
  onSubmit: (values: any, formikActions?: WFormActions) => void;
  validationSchema?: any | (() => any);
  validate?: ((values: any) => void | object | Promise<WFormErrors>);
  enableReinitialize?: boolean;
}

export class WForm extends React.Component<WFormProps, {}> {
  public render() {
    return (
      <Formik
        {...this.props}        
        render={(formikProps: FormikProps<any>) => {          
          return(
            <Form>
              {this.props.children}
              {/* <WFormPersist onChange={this.props.onChange} data={this.props.data}/> */}
            </Form>
          );
        }
        }
      />
    );
  }
}

export { Yup as WFormValidation }