import * as React from 'react';
import * as WFace from '@wface/components';

interface DemoScreen2State {
  data: any;
}

export class DemoScreen2 extends React.Component<WFace.BaseScreenProps, DemoScreen2State> {
  constructor(props: WFace.BaseScreenProps) {
    super(props);

    this.state = this.props.screenData.state || {
      x: 'x'
    }
  }

  public render() {
    return (
      <>
        <WFace.WButton onClick={() => {
          this.props.changeScreenMode('loading');
          this.props.httpService.get("https://reqres.in/api/users?page=2&delay=10")            
            .then(data => {
              this.setState({data}, () => this.props.changeScreenMode('normal'));
            })
        }}>
          GETİR
        </WFace.WButton>
        <WFace.WCard>
            <WFace.WCardContent>
            </WFace.WCardContent>
            <WFace.WCardActions>
              <WFace.WButton>Dialog</WFace.WButton>
            </WFace.WCardActions>
          </WFace.WCard>

        {this.state.data && 
          this.state.data.data.map(user => (
            <div>{user.first_name}</div>
          ))
        }
      </>
    )
  }
}
