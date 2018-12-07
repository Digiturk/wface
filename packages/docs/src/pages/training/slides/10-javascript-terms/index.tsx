import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton, WList, WListItem, WListItemIcon, WListItemText } from "@wface/components";
import constants from "../../util/constants";
import ListText from '../../util/ListText';

export interface JavaScriptTermsProps {
}

export class JavaScriptTerms extends React.Component<JavaScriptTermsProps, any> {
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
          <div style={{ height: '85%', textAlign: 'left', padding: '0px 20px' }}>
            <WList>
              <ListText>JavaScript vs Java</ListText>
              <ListText>JavaScript derlenmez, yorumlanır</ListText>
              <ListText>EcmaScript != JavaScript</ListText>
              <ListText>Platform bağımsızlık</ListText>
              <ListText>jQuery != Javascript</ListText>
              <ListText>NodeJs</ListText>
              <ListText>NPM</ListText>
              <ListText>Single Page Application (SPA)</ListText>
              <ListText>Modern JavaScript Frameworkleri</ListText>
              <ListText>Artılar ve Eksiler</ListText>
            </WList>
          </div>
        </div>
      </div >
    );
  }
}


