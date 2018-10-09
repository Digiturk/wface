import * as React from 'react';
import * as WFace from '@wface/components';
import { Formik } from 'formik';
import { Link } from 'react-router-dom'

interface TestScreen2State {
  inputValue?: string
}

export class TestScreen2 extends React.Component<WFace.BaseScreenProps, TestScreen2State> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
      inputValue: 'a'
    }
  }

  public render() {    
    return (
      <div>            
        <WFace.WTextField value={this.state.inputValue} onChange={(event:any) => this.setState({inputValue: event.target.value})}/>
        <WFace.WButton onClick={() => alert(this.state.inputValue + '222')}>DENEME</WFace.WButton>
      </div>
    )
  }
}