import * as React from 'react';
import * as WFace from '@wface/components';

interface TestScreenState {
  dialogOpen: boolean;
  columns: WFace.WTableColumn[];
  data: object[];
  date: Date;
  serviceList: any[];
  currentCity: number;
}

export class TestScreen extends React.Component<WFace.BaseScreenProps, TestScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenContext.state || {
      currentCity: 27,
      dialogOpen: false,
      serviceList: [
        { label: 'Gaziantep', value: 27 },
        { label: 'İstanbul', value: 34 },
        { label: 'Şanlıurfa', value: 63 }
      ]
    }
  }


  public render() {
    const formControlStyle = {marginTop: 5}
    return (
      <WFace.WCard style={{padding:50, maxWidth: 300}}>
        <WFace.WTextField style={formControlStyle} label="Text field" fullWidth/>
        <WFace.WSelect style={formControlStyle} label="City" data={this.state.serviceList} fullWidth
          value={this.state.currentCity}
        onChange={(data:any) => this.setState({currentCity: data.target.value})}/>
      </WFace.WCard>
    );
  }
}