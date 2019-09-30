import * as React from 'react';
import * as WFace from '@wface/components';
import { MTableBody } from 'material-table';

interface DemoScreenState {
  formValue: any;
  isDialogOpen: boolean;
  isDialogOpen2: boolean;
  textValue: string;
  chartData: any[];
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      formValue: { text: 'text val', check1: true, check2: false },
      isDialogOpen: false,
      isDialogOpen2: true,
      textValue: 'desad',
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
    // this.props.setConfirmOnClose(true);    
  }

  public render() {
    return (
      <>
        <WFace.WGrid container>
          <WFace.WGrid item xl={6} lg={6}>
            <WFace.WCard>
              <WFace.WCardHeader title="Area Chart" />
              <WFace.WCardContent>
                <WFace.WChart data={this.state.chartData} xAxisDataKey="name" legend={true} chartData={[
                 
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
              </WFace.WCardContent>
            </WFace.WCard>
          </WFace.WGrid>
          <WFace.WGrid item xl={6} lg={6}>
            <WFace.WTable
              id="table-2"
              title="df"
              columns={[
                { title: 'Adı', field: 'name' },
                { title: 'Soyadı', field: 'lastName' },
                { title: 'Doğum Yeri', field: 'birthCity', lookup: { 63: 'Şanlıurfa' } },
              ]}
              data={[
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
              ]}
              detailPanel={rowData => (
                <div>{rowData.name}</div>
              )}
            />
          </WFace.WGrid>
        </WFace.WGrid>
        <WFace.WCard>
          <WFace.WCardContent>
          </WFace.WCardContent>
          <WFace.WCardActions>
            <WFace.WButton id="btn-show-dialog" onClick={() => this.setState({ isDialogOpen: true })}>Dialog</WFace.WButton>
          </WFace.WCardActions>
        </WFace.WCard>


        {/* <WFace.WTable
            title="df"
            columns={[]}
            data={[]}
          /> */}

        {/* <div>
            <pre>
              {JSON.stringify(this.state.formValue, null, 2)}
            </pre>
          </div> */}

        <WFace.WDialog id="dialog" open={this.state.isDialogOpen} fullWidth>
          <WFace.WDialogTitle>Dialog</WFace.WDialogTitle>
          <WFace.WDialogContent>

          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WButton id="btn-close-dialog" onClick={() => this.setState({ isDialogOpen: false })}>Close</WFace.WButton>
          </WFace.WDialogActions>
        </WFace.WDialog>
      </>
    )
  }
}

const ImageUpload = props => {
  const size = props.size || 48;
  return (
    <label style={{ display: 'inline-flex', position: 'relative', width: size, height: size }}>
      <WFace.WAvatar
        sizes={size}
        style={{ width: size, height: size, display: 'inline-block' }}
        src={props.src}
      />
      {props.isLoading &&
        <div style={{ position: 'absolute', width: size, height: size, background: '#FFFFFF88', borderRadius: '50%' }}>
          <WFace.WCircularProgress size={size} />
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