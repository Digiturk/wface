import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";

export interface JavaScriptProps {
}

export class JavaScript extends React.Component<JavaScriptProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: 'all'
    }
  }

  public render() {
    return (
      <div style={{ display: 'table', height: '100%', width: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
          <div style={{ height: '5%' }}></div>
          <div style={{ height: '10%' }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>
              JavaScript
          </WTypography>
          </div>
          <div style={{ height: '65%' }}>
            <div style={{ display: 'table', height: '100%', width: '100%' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
                <div style={{ width: 'fit-content', margin: 'auto' }}>
                  <WTypography variant="h4" style={{ color: constants.primaryColor, fontWeight: 500, maxWidth: 800 }}>
                    Any application that can be written in JavaScript, will eventually be written in JavaScript
                  </WTypography>
                  <WTypography variant="h6" style={{ color: '#888', fontWeight: 500, maxWidth: 800, marginTop: 30 }}>
                    Jeff Atwood<br/>
                    Cofounder of StackOverflow
                  </WTypography>
                </div>
              </div>
            </div>
          </div>
          <div style={{ height: '20%' }}></div>
        </div>
      </div >
    );
  }
}


