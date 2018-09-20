import * as React from 'react';
import { WTextField } from '../../inputs/w-text-field';

// Burda componenti IFormField interface olarak alabiliriz. 
const formField = (WrappedComponent: any) => {
  return class Field extends React.Component<{}, {}> {
    public render() {
      return <WrappedComponent/>
    }
  }
}

export const WFormField = {
   WTextField: formField(WTextField)
}