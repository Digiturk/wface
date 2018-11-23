import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";

export interface DomProps {
}

export class Dom extends React.Component<DomProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: 'dom'
    }
  }

  getOpacity(tabName: string): number {
    if (this.state.currentTab == 'all' || this.state.currentTab == tabName) {
      return 1;
    }
    else {
      return 0.5;
    }
  }

  getImageStyle(img: string) {
    return { 
      margin: 'auto', 
      opacity: this.state.currentTab == img ? 1 : 0, 
      transition: constants.transition,
      width: this.state.currentTab == img ? 'unset' : 0      
    }
  }

  public render() {
    return (
      <div style={{ display: 'table', height: '100%', width: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
          <div style={{ height: '20%' }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>
              Dom
            </WTypography>
            <div style={{ marginTop: 10 }}>

              <WButton
                variant="fab"
                mini
                color={this.state.currentTab == 'dom' ? 'primary' : 'default'}
                style={{ margin: 10 }}
                onClick={() => this.setState({ currentTab: 'dom' })}
              >
                <WIcon>device_hub</WIcon>
              </WButton>
              <WButton
                variant="fab"
                mini
                color={this.state.currentTab == 'code' ? 'primary' : 'default'}
                style={{ margin: 10 }}
                onClick={() => this.setState({ currentTab: 'code' })}
              >
                <WIcon>code</WIcon>
              </WButton>
            </div>
          </div>
          <div style={{ height: '80%' }}>
            <div style={{ padding: 10, backgroundColor: '#00000066', borderRadius: 10, width: 'fit-content', margin: 'auto', minWidth: 620 }}>
              <img src="/assets/slide/domtree.png" style={this.getImageStyle('dom')} />
              <img src="/assets/slide/html.png" style={this.getImageStyle('code')} />
            </div>
          </div>
        </div>
      </div >
    );
  }
}
