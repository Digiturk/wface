import * as React from "react";
import { WTypography, WGrid, WIcon, WCollapse, WButton, WIconButton } from "@wface/components";
import constants from "../../util/constants";
import TextHighLight from '../../util/TextHighlight';

export interface WebProps {
}

export class Web extends React.Component<WebProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      currentTab: 'all'
    }
  }

  getOpacity(tabName: string): number {
    if (this.state.currentTab == 'all' || this.state.currentTab == tabName) {
      return 1;
    }
    else {
      return 0.5;
    }
  }

  renderBackEnd() {
    const style = { padding: 5 };
    const imgStyle = { transform: 'scale(0.5)' };
    return (
      <div>
        <WGrid container style={{ height: '50%' }}>
          <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/Microsoft IIS.png" /></WGrid>
          <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/apache_tomcat-card-min.png" /></WGrid>
          <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/nodejs-new-pantone-black.png" /></WGrid>
        </WGrid>
        <WGrid container style={{ height: '50%' }}>
          <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/asp-net-core-logo.png" /></WGrid>
          <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/java.png" /></WGrid>
          <WGrid item xs={4} style={style}><img style={imgStyle} src="./assets/slide/js.png" /></WGrid>
        </WGrid>
      </div>
    )
  }

  renderHttp() {
    return (
      <React.Fragment>
        <WTypography style={{ color: constants.primaryColor, fontSize: 40, fontWeight: 500, textAlign: 'center', marginBottom: 10 }}>
          Hyper Text Transfer Protocol (Secure)
        </WTypography>
        <WGrid container >
          <WGrid item xs={3} style={{ padding: 10 }}>
            <div style={{ background: '#00000022', borderRadius: 10, paddingTop: 20, paddingBottom: 20, margin: 10 }}>
              <WTypography style={{ color: constants.primaryColor, fontSize: 30, fontWeight: 500, textAlign: 'center', textDecoration: 'underline' }}>KOMUTLAR</WTypography>
              <WTypography style={{ color: constants.primaryColor, fontSize: 20, fontWeight: 500, textAlign: 'center', }}>
                GET POST PUT DELETE ...
            </WTypography>
            </div>
            <div style={{ background: '#00000022', borderRadius: 10, paddingTop: 20, paddingBottom: 20, margin: 10 }}>

              <WTypography style={{ color: constants.primaryColor, fontSize: 30, fontWeight: 500, textAlign: 'center', textDecoration: 'underline' }}>RESPONSE KODLAR</WTypography>
              <WTypography style={{ color: constants.primaryColor, fontSize: 20, fontWeight: 500, textAlign: 'center' }}>
                <div>Informational 1XX</div>
                <div>Successful 2XX</div>
                <div>Redirection 3XX</div>
                <div>Client Error 4XX</div>
                <div>Server Error 5XX</div>
              </WTypography>
            </div>
          </WGrid>
          <WGrid item xs={4} style={{ padding: 10 }}>
            <div style={{ background: '#00000022', borderRadius: 10, paddingTop: 20, paddingBottom: 20, margin: 10 }}>
              <WTypography style={{ color: constants.primaryColor, fontSize: 30, fontWeight: 500, textAlign: 'center', textDecoration: 'underline' }}>CLIENT REQUEST</WTypography>
              <img src="./assets/slide/http_get.png" />
            </div>
          </WGrid>
          <WGrid item xs={5} style={{ padding: 10 }}>
            <div style={{ background: '#00000022', borderRadius: 10, paddingTop: 20, paddingBottom: 20, margin: 10 }}>
              <WTypography style={{ color: constants.primaryColor, fontSize: 30, fontWeight: 500, textAlign: 'center', textDecoration: 'underline' }}>SERVER RESPONSE</WTypography>
              <img src="./assets/slide/http_resp.png" />
            </div>
          </WGrid>
        </WGrid>
      </React.Fragment>


    )
  }

  renderFrontEnd() {
    return (
      <div>
        <img src="./assets/slide/main-desktop-browser-logos.png" /><br />
        <img src="./assets/slide/front-end.png" />
      </div>
    )
  }

  renderButton(text: string, name: string, icon: string) {
    const opacity = (this.state.currentTab == 'all' || this.state.currentTab == name) ? 1 : 0.5;
    const fontSize = (this.state.currentTab == 'all' || this.state.currentTab == name) ? 100 : 60;

    return (
      <WGrid item xs={4} style={{ color: constants.primaryColor, textAlign: 'center', opacity: opacity, transition: constants.transition }}>
        <div>
          <span
            style={{ cursor: 'pointer', height: '100%', color: constants.primaryColor }}
            onClick={() => this.setState((prevState: any) => ({ currentTab: prevState.currentTab == name ? 'all' : name }))}
          >
            <WIcon style={{ fontSize: fontSize, padding: 20, transition: constants.transition }} iconSource="fontawesome" icon={icon} />
            <WTypography variant="h4" style={{ color: constants.primaryColor, fontWeight: 500 }}>{text}</WTypography>
          </span>
        </div>
      </WGrid>
    );
  }

  public render() {
    return (
      <div style={{ display: 'flex', textAlign: 'center', height: '100%', flexDirection: 'column', width: '100%' }}>
        <div style={{ height: this.state.currentTab == 'all' ? '20%' : '0%', transition: constants.transition, opacity: this.state.currentTab != 'all' && 0 }}></div>
        <div style={{ height: this.state.currentTab == 'all' ? '20%' : '0%', transition: constants.transition, opacity: this.state.currentTab != 'all' && 0 }}>
          <WTypography variant="h3" style={{ color: constants.primaryColor, fontWeight: 500 }}>Web Uygulamasının Bileşenleri</WTypography>
        </div>
        <div style={{ height: this.state.currentTab == 'all' ? '30%' : '30%' }}>
          <WGrid container>
            {this.renderButton("BackEnd", "back", "fas fa-server")}
            {this.renderButton("HTTP(S)", "http", "fas fa-exchange-alt")}
            {this.renderButton("FrontEnd", "front", "fab fa-chrome")}
          </WGrid>
        </div>

        <div style={{ height: this.state.currentTab == 'all' ? '0%' : '70%', transition: constants.transition, opacity: (this.state.currentTab == 'all') ? 0 : 1 }}>
          <div style={{ opacity: this.state.currentTab == 'back' ? 1 : 0, height: this.state.currentTab == 'back' ? 'unset' : 0, transition: constants.transition }}>
            {this.renderBackEnd()}
          </div>
          <div style={{ opacity: this.state.currentTab == 'http' ? 1 : 0, height: this.state.currentTab == 'http' ? 'unset' : 0,transition: constants.transition }}>
            {this.renderHttp()}
          </div>
          <div style={{ opacity: this.state.currentTab == 'front' ? 1 : 0, height: this.state.currentTab == 'front' ? 'unset' : 0,transition: constants.transition }}>
            {this.renderFrontEnd()}
          </div>
        </div>
      </div>
    );
  }
}


