import * as React from 'react';
import * as WFace from '@wface/components';

interface TestScreenState {
  dialogOpen: boolean;
  columns: WFace.WTableColumn[];
  data: object[];
}

export class TestScreen extends React.Component<WFace.BaseScreenProps, TestScreenState> {
  constructor(props) {
    super(props);

    this.state = this.props.screenContext.state || {
      dialogOpen: false,
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
      ]
    }
  }


  public render() {
    const formControlStyle = {marginTop: 5}
    return (
      <div> 
        <WFace.WTable
          columns={this.state.columns} 
          data={this.state.data}
          actions={[{
            icon: 'add_box',
            tooltip: 'Add',
            isFreeAction: true,
            onClick: (event:any, data:any) => {
              this.setState({dialogOpen: true})
            }
          }]}        
        />   
        <WFace.WBasicDialog
          open={this.state.dialogOpen}
          title="Create Scheduled Task"
          actions={[
            {
              text: 'Save',
              onClick: () => {
                this.setState({dialogOpen: false});
              }
            }
          ]}                    
        >
          <WFace.WTextField style={formControlStyle} label="Service Name" fullWidth/>
          <WFace.WTextField style={formControlStyle} label="Method Name" fullWidth/>
          <WFace.WCheckbox label="Enabled"/><br/>
          <WFace.WCheckbox label="Allow Multiple"/><br/>
          <WFace.WTextField style={formControlStyle} label="Start Time" fullWidth/>
          <WFace.WTextField style={formControlStyle} label="Expire Time" fullWidth/>
          <WFace.WTextField style={formControlStyle} label="Recurring Type" fullWidth/>
          <WFace.WTextField style={formControlStyle} label="Application" fullWidth/>
          <WFace.WTextField style={formControlStyle} label="Channel" fullWidth/>
          <WFace.WTextField style={formControlStyle} label="Client" fullWidth/>                    
        </WFace.WBasicDialog>
      </div>
    );
  }
}