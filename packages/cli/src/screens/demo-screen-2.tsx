import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreen2State {
  date: Date;
  data: any;
  open: boolean;
  nestedPageState: any;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      open: false,
      date: null,      
      data: [
      ],
      nestedPageState: null
    }
  }

  public render() {
    return (
      <>
        <WFace.WGrid container>
          <WFace.WGrid item lg={6} md={6} sm={6}>
            <WFace.WCard>
              <WFace.WCardHeader title="Card" />
              <WFace.WCardContent>                
                <WFace.WSelect id="cmbCity"
                  label="Şehir [Select]"
                  options={[
                    { label: 'Adana', value: '1' },
                    { label: 'Gaziantep', value: '27' },
                    { label: 'İstanbul', value: '34' },
                    { label: 'Şanlıurfa', value: '63' }
                  ]}
                />
                <WFace.WSelect id="cmbCityMulti"
                  label="Şehir [MultiSelect]"
                  isMulti
                  options={[
                    { label: 'Adana', value: '1' },
                    { label: 'Gaziantep', value: '27' },
                    { label: 'İstanbul', value: '34' },
                    { label: 'Şanlıurfa', value: '63' }
                  ]}
                />                
                <div style={{height: 20}}/>
                <WFace.WButton id="btn" variant="contained" fullWidth>Button</WFace.WButton>
                <WFace.WCheckbox id="checkbox" label="Checkbox"/>
                <WFace.WDatePicker id="datepicker" label="Datepicker" onChange={date => this.setState({date})} value={this.state.date}/>
                <WFace.WDateTimePicker id="datetimepicker" label="Datetimepicker"/>
                <WFace.WIconButton id="btnIcon">
                  <WFace.WIcon>save</WFace.WIcon>
                </WFace.WIconButton>
                <WFace.WNotificationBar id="notificationBar" text="deneme" type="warning" />
                <WFace.WSwitch id="switch" title="deneme" />
                <WFace.WTextField id="textField" label="textField" fullWidth/>
                <WFace.WTimePicker id="timepicker" label="TimePicker"/>
                <div style={{height: 20}}/>
                <WFace.WTooltip title="Tooltip text">
                  <WFace.WButton id="btn2" variant="contained" fullWidth>Button</WFace.WButton>
                </WFace.WTooltip>                
              </WFace.WCardContent>
              <WFace.WCardActions>
                <WFace.WButton id="btn">
                  Save
            </WFace.WButton>
              </WFace.WCardActions>
            </WFace.WCard>
          </WFace.WGrid>
        </WFace.WGrid>
      </>
    )
  }
}