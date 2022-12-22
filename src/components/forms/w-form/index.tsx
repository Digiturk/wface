import * as React from 'react';
import { Formik, Form, FormikHelpers, FormikErrors, FormikProps } from 'formik';
import * as Yup from 'yup';
import { BaseComponentProps } from '../../base/base-component-props';

export interface WFormActions extends FormikHelpers<any> { }
export interface WFormErrors extends FormikErrors<any> { }

export type WFormProps = BaseComponentProps & { 
  initialValues: any;
  onSubmit: (values: any, formikActions?: WFormActions) => void;
  validationSchema?: any | (() => any);
  validate?: ((values: any) => void | object | Promise<WFormErrors>);
  enableReinitialize?: boolean;
  onChange?: (values: any) => void;
  formStyle?: React.CSSProperties; 
  children: React.ReactNode;
}




export const WForm :React.FC<WFormProps>=React.forwardRef((props)=>{
  return (
    <Formik
      {...props}
      validate={values => {
        if(props.onChange) {
          props.onChange(values);
        }

        if(props.validate) { 
          return props.validate(values);
        }
      }}        
      render={(
        formikProps: FormikProps<any>) => {
        return(
          <Form style={props.formStyle}>
            {props.children}
          </Form>
        );
      }
      }
    />
  );
});
export { Yup as WFormValidation }


