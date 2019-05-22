import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreen2State {
  data: any;
  open: boolean;
  nestedPageState: any;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      open: false,
      data: [
      ],
      nestedPageState: null
    }
  }

  public render() {
    return (
      <>
        <div style={{ maxWidth: 500, background: 'white', padding: 10 }}>
          <WFace.WButton id="btn-test">Test</WFace.WButton>
        </div>
      </>
    )
  }
}

const Users = (props) => (
  <>
    <WFace.WTable
      id="table"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 53: 'Rize', 63: 'Şanlıurfa' },
        },
      ]}
      data={[
        { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
        { name: 'Bilal', surname: 'Hocaoğlu', birthYear: 1987, birthCity: 53 },
      ]}
      title="Custom Actions"
      actions={[
        {
          icon: 'map',
          tooltip: 'Adresler',
          onClick: (event, rowData) => {
            props.navigateTo("addresses", rowData)
          }
        },
        {
          icon: 'phone',
          tooltip: 'Telefonlar',
          onClick: (event, rowData) => {
            props.navigateTo("phones", rowData)
          }
        }
      ]}
    />
  </>
);

class Addresses extends React.Component<WFace.WNestedPageComponentProps & WFace.BaseScreenProps, any> {
  constructor(props) {
    super(props);

    this.state = this.props.lastState || {
      value: ''
    }
  }

  render() {
    return (
      <div>
        <WFace.WTypography>
          Bu sayfada {this.props.payload.name} adresleri olacak
        </WFace.WTypography>
        <WFace.WTextField value={this.state.value} onChange={(event) => this.setState({ value: event.target.value })} />
        <WFace.WButton id="btn-edit-address" onClick={() => this.props.navigateTo("edit-address", this.props.payload)}>
          Adresi Düzenle
        </WFace.WButton>
        <WFace.WButton id="btn-back" onClick={() => this.props.goBack()}>Kullanıcılara dön</WFace.WButton>
      </div>
    );
  }
}

const EditAddress = (props) => (
  <div>
    <WFace.WTypography>
      Bu sayfada {props.payload.name} adresi düzenlenebilecek
    </WFace.WTypography>
    <WFace.WButton id="btn-back" onClick={() => props.goBack()}>Adreslere dön</WFace.WButton>
  </div>
);

// const Phones = (props: any) => <div>phones</div>;

class Phones extends React.Component<WFace.WNestedPageComponentProps & WFace.BaseScreenProps> {
  render() {
    return (
      <>
        <WFace.WTypography>
          Bu sayfada {this.props.payload.name} telefonlar olacak
        </WFace.WTypography>
        <WFace.WButton id="btn-back" onClick={() => this.props.goBack()}>Kullanıcılara dön</WFace.WButton>
        <WFace.WButton id="btn-snackbar" onClick={() => this.props.showSnackbar("Phones snackbar")}>Snackbar</WFace.WButton>
      </>
    );
  }
}