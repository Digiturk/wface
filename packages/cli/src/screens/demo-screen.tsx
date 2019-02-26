import * as React from 'react';
import * as WFace from '@wface/components';
import { MTableBody } from 'material-table';

interface DemoScreenState {
  formValue: any;
  isDialogOpen: boolean;
  isDialogOpen2: boolean;
}

export class DemoScreen extends React.Component<WFace.BaseScreenProps, DemoScreenState> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      formValue: { text: 'text val', check1: true, check2: false },
      isDialogOpen: false,
      isDialogOpen2: true
    }
  }

  componentDidMount() {
    // this.props.setConfirmOnClose(true);    
  }

  public render() {    
    return (
      <>
        <WFace.WGrid container>
          <WFace.WGrid item lg={6}>
            <WFace.WTable
              title="Users"
              columns={[
                { title: 'Adı', field: 'name' },
                { title: 'Soyadı', field: 'lastName' },
                { title: 'Doğum Yeri', field: 'birthCity', lookup: { 63: 'Şanlıurfa' } },
              ]}
              data={[
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
                { name: 'mehmet', lastName: 'baran', birthCity: 63 },
              ]}
            />
          </WFace.WGrid>
          <WFace.WGrid item lg={6}>
            <WFace.WTable
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
            />
          </WFace.WGrid>
        </WFace.WGrid>
        <WFace.WCard>
          <WFace.WCardContent>

          </WFace.WCardContent>
          <WFace.WCardActions>
            <WFace.WButton onClick={() => this.setState({ isDialogOpen: true })}>Dialog</WFace.WButton>
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

        <WFace.WDialog open={this.state.isDialogOpen} fullWidth>
          <WFace.WDialogTitle>Dialog</WFace.WDialogTitle>
          <WFace.WDialogContent>

          </WFace.WDialogContent>
          <WFace.WDialogActions>
            <WFace.WButton onClick={() => this.setState({ isDialogOpen: false })}>Close</WFace.WButton>
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