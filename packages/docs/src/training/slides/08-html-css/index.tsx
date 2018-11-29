import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";

export interface HtmlCssSlideProps {
}

export class HtmlCssSlide extends React.Component<HtmlCssSlideProps, any> {
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
          <div style={{ height: this.state.showHeader ? '7%' : '0%', transition: constants.transition }}>
            <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }} onDoubleClick={() => this.setState({showHeader: false})}>
              {`HTML & CSS`}
            </WTypography>
          </div>
          <div style={{ height: this.state.showHeader ? '93%' : '100%', transition: constants.transition }}>
            <iframe src={`https://stackblitz.com/edit/html-template?embed=1&file=index.html&hideNavigation=1`} 
              style={{ width: '100%', height: '100%', border: 0, borderRadius: 4, overflow: 'hidden' }}
            ></iframe>
          </div>
        </div>
      </div >
    );
  }
}
