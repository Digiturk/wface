import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton, WDivider } from "@wface/components";
import constants from "../../util/constants";

export interface WFaceTechStackProps {
}

export class WFaceTechStack extends React.Component<WFaceTechStackProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: 'all'
    }
  }

  public render() {
    const style = { padding: 5 };
    const imgStyle = { maxWidth: '60%', maxHeight: '%60', padding: 15 };
    const imgStyle2 = {...imgStyle, maxHeight: '70%'};

    return (
      <div style={{ display: 'table', height: '100%', width: '100%' }}>
        <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
          <div style={{ height: '5%' }}></div>
          <div style={{ height: '10%' }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>
              Kullanılan Teknolojiler
            </WTypography>
          </div>
          <div style={{ height: '85%' }}>
            <div style={{ display: 'table', height: '100%', width: '100%' }}>
              <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
                <div style={{ width: 'fit-content', margin: 'auto' }}>
                    <WGrid container style={{ height: '40%' }}>
                      <WGrid item xs={6} style={style}><img style={imgStyle} src="./assets/slide/react.png" /></WGrid>
                      <WGrid item xs={6} style={style}><img style={imgStyle} src="./assets/slide/typescript.png" /></WGrid>
                    </WGrid>                    
                    <WGrid container style={{ height: '40%' }}>
                      <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/redux.png" /></WGrid>
                      <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/webpack.png" /></WGrid>
                      <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/babel.png" /></WGrid>                      
                    </WGrid>
                    <WGrid container style={{ height: '30%' }}>
                      <WGrid item xs={2} style={style}><img style={imgStyle2} src="./assets/slide/nodejs-new-pantone-black.png" /></WGrid>
                      <WGrid item xs={2} style={style}><img style={imgStyle2} src="./assets/slide/npm.png" /></WGrid>
                      <WGrid item xs={2} style={style}><img style={imgStyle2} src="./assets/slide/yarn.png" /></WGrid>
                      <WGrid item xs={2} style={style}><img style={imgStyle2} src="./assets/slide/material-ui-logo.png" /></WGrid>
                      <WGrid item xs={2} style={style}><img style={imgStyle2} src="./assets/slide/formik.png" /></WGrid>
                      <WGrid item xs={2} style={style}><img style={imgStyle2} src="./assets/slide/inversify.png" /></WGrid>
                    </WGrid>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}


