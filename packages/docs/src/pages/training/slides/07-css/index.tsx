import { WGrid, WTypography } from '@wface/components';
import * as React from 'react';
import constants from '../../util/constants';

export interface CssSlideProps {
}

export class CssSlide extends React.Component<CssSlideProps, any> {
  colors = {
    client: '#3F51B5',
    network: '#FFA726',
    server: '#4CAF50'
  }

  constructor(props: any) {
    super(props)
    this.state = {
    }
  }


  public render() {
    return (

      <div style={{ display: 'table', height: '100%', width: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
          <div style={{ height: '5%' }}></div>
          <div style={{ height: '10%' }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>
              Cascading Style Sheets
            </WTypography>
          </div>
          <div style={{ height: '65%' }}>
            <div style={{ display: 'table', height: '100%', width: '100%' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
                <div style={{ backgroundColor: '#FFFFFFAA', borderRadius: 10, padding: 10, width: 'fit-content', margin: 'auto' }}>
                  <img src="./assets/slide/css-syntax.png" />
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
