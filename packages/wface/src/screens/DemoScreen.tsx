import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreenState {
  inputValue?: string,
  city1?: string;
  city2?: string;
  options: any;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenData.state || {
      city1: '27',
      city2: ['1', '27'],
      options: [
        {label: 'Adana', value: '1'},
        {label: 'Gaziantep', value: '27'},
        {label: 'İstanbul', value: '34'},
        {label: 'Şanlıurfa', value: '63'}
      ]
    }
  }

  public render() {    
    return (
      <div>     
        <WFace.WCard style={{padding: 50}}>
          <WFace.WSelect
            label="Şehir"
            // value={this.state.city1}
            options={this.state.options}
            onChange={(value) => this.setState({city1: value.value})}          
          />
          <div style={{height:20}}/>
          <WFace.WSelect
            label="Şehir"
            options={this.state.options}
            // value={this.state.city2}
            onChange={(value) => this.setState({city2: value.map(a => a.value)})}
            isMulti
          />
        </WFace.WCard>      
      </div>
    )
  }
}