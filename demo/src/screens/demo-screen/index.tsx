import * as React from 'react';
import {
  WDateTimePicker, BaseScreenProps, WGrid,
  WCard, WCardHeader, WCardContent,
  WChart, WTable, WForm, 
  WFormField, WCardActions, WButton,
  WDialog, WDialogTitle, WDialogContent,
  WDialogActions, WAvatar, WCircularProgress
} from 'wface';

interface DemoScreenState {
  formValue: any;
  isDialogOpen: boolean;
  isDialogOpen2: boolean;
  textValue: string;
  chartData: any[];
  cityList: any[];
  dateTime: Date;
}

export class DemoScreen extends React.Component<BaseScreenProps, DemoScreenState> {
  constructor(props: BaseScreenProps) {
    super(props);

    this.state = {
      formValue: { text: 'text val', check1: true, check2: false },
      isDialogOpen: false,
      isDialogOpen2: true,
      textValue: 'desad',
      cityList: [],
      dateTime: new Date(),
      chartData: [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        cityList: [
          { label: 'Istanbul', value: '34' },
          { label: 'Gaziantep', value: '27' },
        ],
        textValue: 'loaded'
      });
    }, 1000);
  }

  public render() {
    return (
      <>
        <WGrid container>
          <WGrid item xl={6} lg={6}>
            <WCard>
              <WCardHeader title="Area Chart" />
              <WCardContent>
                <WChart data={this.state.chartData} xAxisDataKey="name" legend={true} chartData={[

                  {
                    chartType: 'area',
                    dataKey: 'pv',
                    name: 'Data 1',
                  },
                  {
                    chartType: 'area',
                    dataKey: 'uv',
                    name: 'Data XYZ',
                  },
                ]} />
              </WCardContent>
            </WCard>
          </WGrid>
          <WGrid item xl={6} lg={6}>
            <WTable
              id="table-2"
              title="df"
              columns={[
                { title: 'Adı', field: 'name' },
                { title: 'Soyadı', field: 'lastName' },
                { title: 'Doğum Yeri', field: 'birthCity', lookup: { 63: 'Şanlıurfa' } },
              ]}
              data={[
                // { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                // { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                // { name: 'mehmet', lastName: 'baran', birthCity: 63 },
              ]}
              detailPanel={rowData => (
                <div>{rowData.name}</div>
              )}
            />

          </WGrid>
        </WGrid>
        <WCard>
          <WCardContent>
            <WForm
              id="deneme"
              initialValues={{ company: 'Digiturk', year: 1987 }}
              onSubmit={values => alert(values.company + ", " + values.year)}
              validate={values => {
                let errors = {} as any;
                if (values.company != 'Digiturk') {
                  errors.company = 'Sadece Digiturk yazabilirsiniz';
                }
                return errors;
              }}
            >
              <WFormField.TextField id="txtCompany" name="company" label="Şirket" />
              <WFormField.TextField id="txtYear" name="year" label="Yıl" />
              <WFormField.Submit id="btnSubmit">GÖSTER</WFormField.Submit>
            </WForm>
            <WDateTimePicker id="dtp" value={this.state.dateTime} onChange={(dateTime: any) => this.setState({ dateTime })} />
          </WCardContent>
          <WCardActions>
            <WButton id="btn-show-dialog" onClick={() => this.setState({ isDialogOpen: true })}>Dialog</WButton>
          </WCardActions>
        </WCard>


        {/* <WTable
            title="df"
            columns={[]}
            data={[]}
          /> */}

        {/* <div>
            <pre>
              {JSON.stringify(this.state.formValue, null, 2)}
            </pre>
          </div> */}

        <WDialog id="dialog" open={this.state.isDialogOpen} fullWidth>
          <WDialogTitle>Dialog</WDialogTitle>
          <WDialogContent>

          </WDialogContent>
          <WDialogActions>
            <WButton id="btn-close-dialog" onClick={() => this.setState({ isDialogOpen: false })}>Close</WButton>
          </WDialogActions>
        </WDialog>
      </>
    )
  }
}

const ImageUpload = (props: any) => {
  const size = props.size || 48;
  return (
    <label style={{ display: 'inline-flex', position: 'relative', width: size, height: size }}>
      <WAvatar
        sizes={size}
        style={{ width: size, height: size, display: 'inline-block' }}
        src={props.src}
      />
      {props.isLoading &&
        <div style={{ position: 'absolute', width: size, height: size, background: '#FFFFFF88', borderRadius: '50%' }}>
          <WCircularProgress size={size} />
        </div>
      }

      <input
        type="file"
        id="file"
        name="file"
        style={{ visibility: 'hidden', width: 0, height: 0, backgroundColor: 'green' }}
        accept={
          props.allowGif ? '.png, .jpg, .jpeg, .gif, .mp4' : '.png, .jpg, .jpeg'
        }
        multiple={false}
        onChange={props.onChange}
      />
    </label>
  )
}