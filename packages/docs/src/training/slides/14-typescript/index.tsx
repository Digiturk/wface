import * as React from "react";
import { WTypography, WGrid } from "@wface/components";
import constants from "../../util/constants";

export interface TypeScriptProps {
}

export class TypeScript extends React.Component<TypeScriptProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      showHeader: true
    }
  }

  public render() {
    return (
      <div style={{ display: 'table', height: '100%', width: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
          <div style={{ height: this.state.showHeader ? '9%' : '0%', transition: constants.transition }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }} onDoubleClick={() => this.setState({showHeader: false})}>
              TypeScript {`&`} React
            </WTypography>
          </div>
          <div style={{ height: this.state.showHeader ? '91%' : '100%', transition: constants.transition}}>
            <iframe src={`https://stackblitz.com/edit/mbrn-react-ts-template?embed=1&file=index.tsx`}
              style={{ width: '100%', height: '100%', border: 0, borderRadius: 4, overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
