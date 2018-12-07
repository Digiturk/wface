import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";

export interface DevToolsProps {
}

export class DevTools extends React.Component<DevToolsProps, any> {
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
              DevTools
          </WTypography>
          </div>
          <div style={{ height: '65%' }}>
            <div style={{ display: 'table', height: '100%', width: '100%' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
                <div style={{ padding: 10, backgroundColor: constants.primaryColor, borderRadius: 10, width: 'fit-content', margin: 'auto' }}>
                  <WTypography variant="h2" style={{ color: 'white', fontWeight: 500 }}>
                    F12
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


