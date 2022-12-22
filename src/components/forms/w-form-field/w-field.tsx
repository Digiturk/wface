import * as React from 'react';
import { Field, FastField } from 'formik';

const WField = (props: any) => {
  const Component = (subProps: any) => (
    <div style={{ marginTop: 5, marginBottom: 5 }} {...subProps}>
      {props.component(subProps)}
    </div>
  )

  if (props.useFastField === false) {
    return (
      <Field
        {...props}
        render={Component}
      />
    );
  }
  else {
    return (
      // @ts-ignore
      <FastField
        {...props}
        render={Component}
      />
    );
  }


}

export default WField;