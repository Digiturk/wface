import * as React from 'react';
import {
  WTypography, WGrid, WCard, WCardContent,
  WCardActions, WButton, WIcon, WCollapse
} from '../../../';

export interface ErrorPageProps {
  error: any;
  info: any;
  t: (key: string) => string;
}

export default class ErrorPage extends React.Component<ErrorPageProps, any> {
  state = {
    showDetail: false
  }

  renderStack = (name: string, stack: string) => (
    <div style={{ display: 'flex', marginTop: 20 }}>
      <WTypography variant="subtitle1" color="inherit" style={{ display: 'inline', fontWeight: 500, textDecoration: 'underline' }}>
        {name}:
      </WTypography>
      <div style={{ marginTop: 5, marginLeft: 10 }}>
        {stack.split('\n').map(a => <div>{a}</div>)}
      </div>
    </div>
  )

  render() {
    return (
      <WGrid container justifyContent="center" mt={2}>
        <WGrid item md={12} xs={12}>
          <WCard>
            <WCardContent style={{ paddingBottom: 0 }}>
              <div style={{ display: 'flex' }}>
                <WIcon style={{ fontSize: 75, color: '#C62828' }}>error_outline</WIcon>
                <div style={{ padding: '5px 10px 5px 20px' }}>
                  <WTypography variant="h6" style={{ display: 'inline' }}>
                    {this.props.t('errorPageText') || (
                      <>
                        An error has occurred on this page. Please turn the screen off and on again.
                        If the error persists, you can contact your system administrator.
                      </>
                    )}
                  </WTypography>
                </div>
              </div>
            </WCardContent>
            <WCardActions>
              <WButton id="btn-show-error-detail" onClick={() => this.setState({ showDetail: !this.state.showDetail })}>
                {this.props.t('errorPageErrorDetail') || 'ERROR DETAIL'}
              </WButton>
            </WCardActions>
          </WCard>
          <WCollapse in={this.state.showDetail}>
            <WCard style={{ backgroundColor: '#FFEBEE', color: '#D50000' }}>
              <WCardContent>
                <WTypography variant="h6" style={{ display: 'inline' }} color="inherit">
                  {this.props.error.toString()}
                </WTypography>
                {this.renderStack("Stack", this.props.error.stack)}
                {this.props.info && this.renderStack("Component Stack", this.props.info.componentStack)}
              </WCardContent>
            </WCard>
          </WCollapse>
        </WGrid>
      </WGrid>
    )
  }
}
