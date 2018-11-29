import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";

export interface WFaceDocsProps {
}

export class WFaceDocs extends React.Component<WFaceDocsProps, any> {
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
              WFace Dökümantasyon
            </WTypography>
          </div>
          <div style={{ height: '65%' }}>
            <div style={{ display: 'table', height: '100%', width: '100%' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
                <div style={{ width: 'fit-content', margin: 'auto' }}>
                  <WTypography variant="h4" style={{ color: constants.primaryColor, fontWeight: 500, maxWidth: 800 }}>
                    wface.digiturk.net<br/>
                    <WButton 
                      variant="outlined" 
                      style={{color: constants.primaryColor, marginTop: 30}}
                      onClick={() => {
                        var win = window.open("http://wface.digiturk.net/#/Pages/GetStarted/Setup", '_blank');
                        win.focus();
                      }}
                  >
                    Kurulum
                  </WButton>
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


