import * as React from 'react';
import { WCheckbox } from '../../inputs/w-checkbox';
import { WTextField } from '../../inputs/w-text-field';
import { WButton } from '../../buttons/w-button';
import { Field } from 'formik';
import { WDatePicker } from '../../inputs/w-date-picker';

export const WFormField = {
  WCheckbox: (fieldProps: any) => (
    <WField 
      component={props => (
        <WCheckbox 
          label={fieldProps.label}
          checked={props.field.value[fieldProps.name]}
          onChange={event =>          
            props.form.setFieldValue(fieldProps.name, event.target.checked)
          }
        />        
      )}
    />
  ),
  WDatePicker: (fieldProps: any) => (
    <WField
      name={fieldProps.name} 
      component={props => (
        <WDatePicker
          emptyLabel={fieldProps.label}          
        />
      )}
    />
  ),
  WTextField: (fieldProps: any) => (
    <WField
      name={fieldProps.name}      
      component={props => (
        <WTextField
          label={fieldProps.label}
          {...props.field}          
          fullWidth
        />
      )}
    />
  ),
  Submit: (fieldProps: any) => (
    <WField
      component={props => (
        <WButton          
          onClick={props.form.handleSubmit}          
        >
          {fieldProps.children}
        </WButton>
      )}
    />
  )
} as {
  WCheckbox: any,
  WDatePicker: any,
  WTextField: any,
  Submit: any,
}

const WField = props => {
  const component = subProps => <div style={{marginTop: 5, marginBottom: 5}}><props.component {...subProps}/></div>
  return <Field {...props} component={component}/>
}