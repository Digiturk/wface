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
}

export class WForm extends React.Component<WFormProps, {}> {
  state = {}
  public render() {
    return (
      <Formik
        {...this.props}
        render={(formikProps: FormikProps<any>) => {
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