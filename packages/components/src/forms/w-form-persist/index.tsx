import * as React from 'react';
import { FormikProps, connect } from 'formik';
import debounce from 'lodash.debounce';
import isEqual from 'react-fast-compare';

export interface WFormPersistProps {
  debounce?: number;
  data: any;
  onChange: (data:any) => void;
}

class WFormPersistImpl extends React.Component< WFormPersistProps & { formik: FormikProps<any> }, {}> {
  static defaultProps = {
    debounce: 50,
  };

  saveForm = debounce((data: FormikProps<{}>) => {
    this.props.onChange(data.values);
    // window.localStorage.setItem(this.props.name, JSON.stringify(data));
  }, this.props.debounce);

  componentDidUpdate(prevProps: WFormPersistProps & { formik: FormikProps<any> }) {
    if (!isEqual(prevProps.formik.values, this.props.data)) {
      this.saveForm(prevProps.formik);      
    }
  }

  componentDidMount() {
    const maybeState = this.props.data;
    if (maybeState && maybeState !== null) {
      this.props.formik.setValues(maybeState);
    }
  }

  render() {
    return null;
  }
}

export const WFormPersist = connect<WFormPersistProps, any>(WFormPersistImpl);