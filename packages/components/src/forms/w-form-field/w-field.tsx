import * as React from 'react';
import { Field } from 'formik';

const WField = props => {
  const component = subProps => ( 
    <div style={{marginTop: 5, marginBottom: 5}}>
      <props.component {...subProps}/>
    </div>
  )
  return <Field {...props} component={component}/>
}

export default WField;