import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreen2State {
  date: Date;
  dateTime: Date;
  time: Date;
  data: any;
  open: boolean;
  nestedPageState: any;
  isDialogOpen: boolean;
  formData: any;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      open: false,
      date: null,
      dateTime: null,
      time: null,
      data: [
      ],
      nestedPageState: null,
      isDialogOpen: false,
      formData: {
        name: 'mehmet',
        surname: 'baran',
        city: 63
      }
    }
  }

  public render() {
    return (
      <>
        <WFace.WExpansionPanel id="expansionPanel" title="Accordion">
          <WFace.WTable
            id="table"
            title="Simple Action Preview"
            columns={[
              { title: 'Name', field: 'name' },
              { title: 'Surname', field: 'surname' },
              { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
              {
                title: 'Birth Place',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
              },
            ]}
            data={[
              { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
              { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
            ]}
            actions={[
              {
                icon: 'save',
                tooltip: 'Save User',
                onClick: (event, rowData) => alert("You saved " + rowData.name)
              }
            ]}
          />
        </WFace.WExpansionPanel>
        <WFace.WGrid container>
          <WFace.WGrid item lg={6} md={6} sm={6}>
            <WFace.WCard>
              <WFace.WCardHeader title="Form" />
              <WFace.WCardContent>
                <WFace.WForm id="form" initialValues={this.state.formData} onSubmit={formData => this.setState({ formData })}>
                  <WFace.WFormField.TextField id="name" label="name" name="name" />
                  <div style={{ height: 20 }} />
                  <WFace.WFormField.TextField id="surname" label="Surname" name="surname" />
                  <div style={{ height: 20 }} />
                  <WFace.WFormField.Select id="city" name="city" label="city" options={[
                    { label: 'Adana', value: '1' },
                    { label: 'Gaziantep', value: '27' },
                    { label: 'İstanbul', value: '34' },
                    { label: 'Şanlıurfa', value: '63' }
                  ]} />
                  <div style={{ height: 20 }} />
                  <WFace.WFormField.Submit id="submit">Submit</WFace.WFormField.Submit>
                </WFace.WForm>
              </WFace.WCardContent>
            </WFace.WCard>
            <div><pre>{JSON.stringify(this.state.formData, null, 2)}</pre></div>

          </WFace.WGrid>
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
                <div style={{ height: 20 }} />
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
                <div style={{ height: 20 }} />
                <WFace.WButton id="btn" variant="contained" fullWidth>Button</WFace.WButton>
                <div style={{ height: 20 }} />
                <WFace.WCheckbox id="checkbox" label="Checkbox" />
                <div style={{ height: 20 }} />
                <WFace.WDatePicker fullWidth id="datepicker" label="Datepicker" onChange={(date: any) => this.setState({ date })} value={this.state.date} />
                <div style={{ height: 20 }} />
                <WFace.WDateTimePicker fullWidth id="datetimepicker" label="Datetimepicker" onChange={(dateTime: any) => this.setState({ dateTime })} value={this.state.dateTime} />
                <div style={{ height: 20 }} />
                <WFace.WIconButton id="btnIcon" >
                  <WFace.WIcon>save</WFace.WIcon>
                </WFace.WIconButton>
                <div style={{ height: 20 }} />
                {/* <WFace.WNotificationBar id="notificationBar" text="success" type="success" />
                <div style={{ height: 20 }} />
                <WFace.WNotificationBar id="notificationBar" text="info" type="info" />
                <div style={{ height: 20 }} />
                <WFace.WNotificationBar id="notificationBar" text="warning" type="warning" />
                <div style={{ height: 20 }} />
                <WFace.WNotificationBar id="notificationBar" text="error" type="error" /> */}
                <div style={{ height: 20 }} />
                <WFace.WSwitch id="switch" title="deneme" />
                <div style={{ height: 20 }} />
                <WFace.WTextField id="textField" label="textField" fullWidth />
                <div style={{ height: 20 }} />
                <WFace.WTimePicker fullWidth id="timepicker" label="TimePicker" onChange={(time: any) => this.setState({ time })} value={this.state.time} />
                <div style={{ height: 20 }} />
                <WFace.WTooltip title="Tooltip text">
                  <WFace.WButton id="btn2" variant="contained" fullWidth onClick={() => this.setState({ isDialogOpen: true })}>Button</WFace.WButton>
                </WFace.WTooltip>
                <div style={{ height: 20 }} />
                <WFace.WLoadingButton id="btn-loading" isLoading>Loading Button</WFace.WLoadingButton>
                <div style={{ height: 20 }} />
                <WFace.WToggleButton value="btn-toggle" id="btn-toggle">ToggleButton</WFace.WToggleButton>
              </WFace.WCardContent>
              <WFace.WCardActions>
                <WFace.WButton id="btn">
                  Save
                </WFace.WButton>
              </WFace.WCardActions>
            </WFace.WCard>
          </WFace.WGrid>
        </WFace.WGrid>
        <WFace.WDialog open={this.state.isDialogOpen} fullWidth>
          <WFace.WDialogTitle>Dialog Title</WFace.WDialogTitle>
          <WFace.WDialogContent>
            Content
          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WButton id="btnDialog" onClick={() => this.setState({ isDialogOpen: false })}>
              Close
            </WFace.WButton>
          </WFace.WDialogActions>
        </WFace.WDialog>
      </>
    )
  }
}