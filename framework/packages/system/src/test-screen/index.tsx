import * as React from 'react';
import * as WFace from '@wface/components';

interface TestScreenState {
  name: string;
  surname: string;
  columns: WFace.WTableColumnDefinition[];
  columns2: any[];
  data: any[];
  data2: any[];
}

export class TestScreen extends React.Component<WFace.BaseScreenProps, TestScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenContext.state || {
      name: 'mehmet',
      surname: 'baran',
      columns: [
        {
          title: 'Adı',
          field: 'name'
        },
        {
          title: 'Soyadı',
          field: 'surname'
        },
        {
          title: 'Doğum Yılı',
          field: 'birthYear',
          isNumeric: true
        }
      ],
      data: [
        {name: 'Mehmet', surname: 'Baran', birthYear: 1987},
        {name: 'Gülcan', surname: 'Baran', birthYear: 1989},
        {name: 'Zerya Betül', surname: 'Baran', birthYear: 2017}
      ],
      columns2: ["Name", "Company", "City", "State"],
      data2: [
        ["Joe James", "Test Corp", "Yonkers", "NY"],
        ["John Walsh", "Test Corp", "Hartford", "CT"],
        ["Bob Herm", "Test Corp", "Tampa", "FL"],
        ["James Houston", "Test Corp", "Dallas", "TX"],
      ]
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    } as any);
  };

  changeState = () => {
    this.setState({
      name: 'C1',
      surname: 'C2'
    })
  }

  changeState2 = () => {
    this.setState({
      name: 'X1',
      surname: ''
    })
  }

  public render() {
    return (
      <div> 
        {/* <WFace.WTable 
          columns={this.state.columns2} 
          data={this.state.data2}
        /> */}

        <WFace.WGrid container>
          <WFace.WGrid item xs={12} md={4}>
            <WFace.WCard>
              <WFace.WCardHeader title="Test Bilgileri" />
              <WFace.WCardContent>
                <WFace.WTextField label="Adı" fullWidth
                  value={this.state.name}
                  onChange={this.handleChange('name')} />
                <WFace.WTextField label="Soyadı" fullWidth
                  value={this.state.surname}
                  onChange={this.handleChange('surname')} />
              </WFace.WCardContent>
              <WFace.WCardActions>
                <WFace.WButton onClick={this.changeState} >Do</WFace.WButton>
                <WFace.WButton onClick={this.changeState2} >Do2</WFace.WButton>
              </WFace.WCardActions>
            </WFace.WCard>
          </WFace.WGrid>
          <WFace.WGrid item xs={12} md={4}>
            <WFace.WCard>
              <WFace.WCardHeader title="Test Bilgileri 2" />
              <WFace.WCardContent>
              </WFace.WCardContent>
            </WFace.WCard>
          </WFace.WGrid>
          <WFace.WGrid item xs={12} md={4}>
            <WFace.WCard>
              <WFace.WCardHeader title="Test Bilgileri 3" />
              <WFace.WCardContent>
                <WFace.WTextField label="Doğum Tarihi" fullWidth />
              </WFace.WCardContent>
            </WFace.WCard>
          </WFace.WGrid>
        </WFace.WGrid>
      </div>
    );
  }
}