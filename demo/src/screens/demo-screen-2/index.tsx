import * as React from 'react';
import {
  BaseScreenProps, WExpansionPanel, WTable,
  WTextField, WButton, WGrid,
  WCard, WCardHeader, WCardContent,
  WCardActions, WForm, WFormField,
  WSelect, WCheckbox, WDatePicker,
  WDateTimePicker, WIconButton, WIcon,
  WSwitch, WTimePicker, WTooltip,
  WLoadingButton, WToggleButton, WDialog,
  WDialogTitle, WDialogContent, WDialogActions
} from 'wface';

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

export class DemoScreen2 extends React.Component<BaseScreenProps, DemoScreen2State> {
  constructor(props: BaseScreenProps) {
    super(props);

    this.state = {
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
        <WExpansionPanel id="expansionPanel" title="Accordion">
          <WTable
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
        </WExpansionPanel>
        <WGrid container>
          <WGrid item lg={6} md={6} sm={6}>
            <WCard>
              <WCardHeader title="Form" />
              <WCardContent>
                <WForm id="form" initialValues={this.state.formData} onSubmit={formData => this.setState({ formData })}>
                  <WFormField.TextField id="name" label="name" name="name" />
                  <div style={{ height: 20 }} />
                  <WFormField.TextField id="surname" label="Surname" name="surname" />
                  <div style={{ height: 20 }} />
                  <WFormField.Select id="city" name="city" label="city" options={[
                    { label: 'Adana', value: '1' },
                    { label: 'Gaziantep', value: '27' },
                    { label: 'İstanbul', value: '34' },
                    { label: 'Şanlıurfa', value: '63' }
                  ]}
                  />
                  <div style={{ height: 20 }} />
                  <WFormField.Submit id="submit">Submit</WFormField.Submit>
                </WForm>
              </WCardContent>
            </WCard>
            <div><pre>{JSON.stringify(this.state.formData, null, 2)}</pre></div>

          </WGrid>
          <WGrid item lg={6} md={6} sm={6}>
            <WCard>
              <WCardHeader title="Card" />
              <WCardContent>
                <WSelect id="cmbCity"
                  label="Şehir [Select]"
                  options={[
                    { label: 'Adana', value: '1' },
                    { label: 'Gaziantep', value: '27' },
                    { label: 'İstanbul', value: '34' },
                    { label: 'Şanlıurfa', value: '63' }
                  ]}
                />
                <div style={{ height: 20 }} />
                <WSelect id="cmbCityMulti"
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
                <WButton id="btn" variant="contained" fullWidth>Button</WButton>
                <div style={{ height: 20 }} />
                <WCheckbox id="checkbox" label="Checkbox" />
                <div style={{ height: 20 }} />
                <WDatePicker fullWidth id="datepicker" label="Datepicker" onChange={(date: any) => this.setState({ date })} value={this.state.date} />
                <div style={{ height: 20 }} />
                <WDateTimePicker fullWidth id="datetimepicker" label="Datetimepicker" onChange={(dateTime: any) => this.setState({ dateTime })} value={this.state.dateTime} />
                <div style={{ height: 20 }} />
                <WIconButton id="btnIcon" >
                  <WIcon>save</WIcon>
                </WIconButton>
                <div style={{ height: 20 }} />
                {/* <WNotificationBar id="notificationBar" text="success" type="success" />
                <div style={{ height: 20 }} />
                <WNotificationBar id="notificationBar" text="info" type="info" />
                <div style={{ height: 20 }} />
                <WNotificationBar id="notificationBar" text="warning" type="warning" />
                <div style={{ height: 20 }} />
                <WNotificationBar id="notificationBar" text="error" type="error" /> */}
                <div style={{ height: 20 }} />
                <WSwitch id="switch" title="deneme" />
                <div style={{ height: 20 }} />
                <WTextField id="textField" label="textField" fullWidth />
                <div style={{ height: 20 }} />
                <WTimePicker fullWidth id="timepicker" label="TimePicker" onChange={(time: any) => this.setState({ time })} value={this.state.time} />
                <div style={{ height: 20 }} />
                <WTooltip title="Tooltip text">
                  <WButton id="btn2" variant="contained" fullWidth onClick={() => this.setState({ isDialogOpen: true })}>Button</WButton>
                </WTooltip>
                <div style={{ height: 20 }} />
                <WLoadingButton id="btn-loading" isLoading>Loading Button</WLoadingButton>
                <div style={{ height: 20 }} />
                <WToggleButton value="btn-toggle" id="btn-toggle">ToggleButton</WToggleButton>
              </WCardContent>
              <WCardActions>
                <WButton id="btn">
                  Save
                </WButton>
              </WCardActions>
            </WCard>
          </WGrid>
        </WGrid>
        <WDialog open={this.state.isDialogOpen} fullWidth>
          <WDialogTitle>Dialog Title</WDialogTitle>
          <WDialogContent>
            Content
          </WDialogContent>
          <WDialogActions>
            <WButton id="btnDialog" onClick={() => this.setState({ isDialogOpen: false })}>
              Close
            </WButton>
          </WDialogActions>
        </WDialog>
      </>
    )
  }
}