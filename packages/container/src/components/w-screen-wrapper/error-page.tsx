import * as React from 'react';
import * as WFace from '@wface/components';

export default class ErrorPage extends React.Component<{ error: any, info: any }, any> {
  state = {
    showDetail: false
  }

  renderStack = (name: string, stack: string) => (
    <div style={{ display: 'flex', marginTop: 20 }}>
      <WFace.WTypography variant="subtitle1" color="inherit" style={{ display: 'inline', fontWeight: 500, textDecoration: 'underline' }}>
        {name}:
      </WFace.WTypography>
      <div style={{ marginTop: 5, marginLeft: 10 }}>
        {stack.split('\n').map(a => <div>{a}</div>)}
      </div>
    </div>
  )

  render() {
    return (
      <WFace.WGrid container justifyContent="center">
        <WFace.WGrid item md={12} xs={12}>
          <WFace.WCard>            
            <WFace.WCardContent style={{ paddingBottom: 0 }}>
              <div style={{ display: 'flex' }}>
                <WFace.WIcon style={{ fontSize: 75, color: '#C62828' }}>error_outline</WFace.WIcon>
                <div style={{ padding: '5px 10px 5px 20px' }}>
                  <WFace.WTypography variant="h6" style={{display: 'inline'}}>
                    Bu sayfada bir hata oluştu. Lütfen ekranı kapatıp yeniden açınız.
                    Hatanın devam etmesi durumunda sistem yöneticinizle irtibata geçebilirsiniz.
                  </WFace.WTypography>
                </div>
              </div>
            </WFace.WCardContent>
            <WFace.WCardActions>
              <WFace.WButton id="btn-show-error-detail" onClick={() => this.setState({ showDetail: !this.state.showDetail })}>
                HATA DETAYI
              </WFace.WButton>
            </WFace.WCardActions>
          </WFace.WCard>
          <WFace.WCollapse in={this.state.showDetail}>
            <WFace.WCard style={{ backgroundColor: '#FFEBEE', color: '#D50000' }}>
              <WFace.WCardContent>
                <WFace.WTypography variant="h6" style={{display: 'inline'}} color="inherit">
                  {this.props.error.toString()}
                </WFace.WTypography>
                {this.renderStack("Stack", this.props.error.stack)}
                {this.renderStack("Component Stack", this.props.info.componentStack)}
              </WFace.WCardContent>
            </WFace.WCard>
          </WFace.WCollapse>
        </WFace.WGrid>
      </WFace.WGrid>
    )
  }
}
