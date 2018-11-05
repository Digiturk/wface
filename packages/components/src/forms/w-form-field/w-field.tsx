import * as React from 'react';
import { Field, FastField } from 'formik';

const WField = props => {
  const component = subProps => ( 
    <div style={{marginTop: 5, marginBottom: 5}}>
      <props.component {...subProps}/>
    </div>
  )
  return <FastField {...props} component={component}/>
}

export default WField;