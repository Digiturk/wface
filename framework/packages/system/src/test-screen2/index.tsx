import * as React from 'react';
import * as WFace from '@wface/components';
import { Formik } from 'formik';
import { Link } from 'react-router-dom'

interface TestScreen2State {
}

export class TestScreen2 extends React.Component<WFace.BaseScreenProps, TestScreen2State> {
  constructor(props) {
    super(props);

    this.state = this.props.screenContext.state || {
    }
  }

  public render() {
    return <Link to="TestScreen">Test Screen</Link>;
  }
}