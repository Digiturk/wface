import * as React from "react";
import { WTypography, WGrid, WList } from "@wface/components";
import constants from "../../util/constants";
import ListText from '../../util/ListText';

export interface ReactJsProps {
}

export class ReactJs extends React.Component<ReactJsProps, any> {
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
          <div style={{ height: '5%' }}></div>
          <div style={{ height: '10%' }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>
              React
            </WTypography>
          </div>
          <div style={{ height: '85%', textAlign: 'left', padding: '0px 20px' }}>
            <WList>
              <ListText>React neden ortaya çıktı?</ListText>
              <ListText>Component</ListText>
              <ListText>Virtual DOM</ListText>
              <ListText>Props</ListText>
              <ListText>State</ListText>
            </WList>
          </div>
         
        </div>
      </div >
    );
  }
}
