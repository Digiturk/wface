import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";

export interface JavaScriptCodeProps {
}

export class JavaScriptCode extends React.Component<JavaScriptCodeProps, any> {
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
          <div style={{ height: '100%' }}>
            <iframe src={`https://stackblitz.com/edit/js-template?embed=1&file=index.js&hideNavigation=1`} 
              style={{ width: '100%', height: '100%', border: 0, borderRadius: 4, overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
      </div >
    );
  }
}


