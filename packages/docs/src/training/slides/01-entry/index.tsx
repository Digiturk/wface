import * as React from 'react';
import { WTypography } from '@wface/components';
import constants from '../../util/constants';

export interface EntryProps {
}

export class Entry extends React.Component<EntryProps, any> {
  public render() {
    return (
      <div style={{display: 'flex', textAlign: 'center', height: '100%', flexDirection:'column', alignContent: 'space-between', width: '100%'}}> 
        <div style={{ flex: 2}}></div>
        <div style={{ flex: 3}}>
          <WTypography variant="h2" color="primary" style={{ fontWeight: 500, color: constants.primaryColor, fontSize: 70 }}>
            Web Programlama<br />
          </WTypography>
          <WTypography variant="h3" color="primary" style={{ fontWeight: 500, marginTop: 10, color: constants.primaryColor, fontSize: 30 }}>
            React {"&"} WFace
          </WTypography>

        </div>
        <WTypography variant="subtitle2" style={{ alignSelf: 'flex-end', width: '100%', flex: 1, color: '#666'}}>
          Mehmet Baran<br/>
          github.com/mbrn<br/>
        </WTypography>
      </div>
    );
  }
}
