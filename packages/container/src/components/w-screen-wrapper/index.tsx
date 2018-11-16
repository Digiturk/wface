import { WGrid, WPaper, WTypography, withSnackbar, WIconButton, WIcon } from '@wface/components';
import { IMenuTreeItem, MenuTreeUtil, IConfiguration } from '@wface/ioc';
import { AppContextActions, WStore, ScreenData } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';

export interface WScreenWrapperProps {
  screen?: ScreenData;
  enqueueSnackbar?: (message: string, options: object) => void
}

export interface DispatchProps {
  saveScreenState: (screenId: string, state: any) => void;
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => void;
  setValue: (key: string, value: any) => void;
}

class WScreenWrapper extends React.Component<WScreenWrapperProps & WStore & DispatchProps, any> {

  private screenRef:any;  

  constructor(props) {
    super(props);

    this.state = {
      screen: undefined
    }

    this.screenRef = React.createRef();
  }

  componentWillUnmount() {
    if (this.screenRef.current) {
      this.props.saveScreenState(this.props.screen.menuTreeItem.id, this.screenRef.current.state);
    }
  }

  openScreen = (screen: string, initialValues: any):boolean => {
    const item = MenuTreeUtil.findByName(this.props.appContext.menuTree, screen);
    if(!item) {
      return false;
    }

    this.props.openScreen(item, initialValues);
    return true;
  }

  showSnackbar = (message: string, type: 'error' | 'success' | 'warning' | 'info' = 'info', duration: number = 5000) => {    
    this.props.enqueueSnackbar(message, {
      variant: type,
      autoHideDuration: duration,
      action: <WIconButton><WIcon style={{color: '#ffffff99'}} iconSize="small">close</WIcon></WIconButton>
    });
  }

  public render() {
    const Screen = this.props.appContext.configuration.screenList[this.props.screen.menuTreeItem.screen] as any;
    return (
      Screen ?
        <Screen
          ref={this.screenRef}
          appContext={this.props.appContext}
          httpService={this.props.appContext.configuration.httpService}
          screenData={this.props.appContext.currentScreen}
          userContext={this.props.userContext}
          openScreen={this.openScreen}
          showSnackbar={this.showSnackbar}
          setValue={this.props.setValue}
        />
        :
        <WGrid container justify="center" style={{ paddingTop: 30 }}>
          <WGrid item md={6}>
            <WPaper elevation={4} style={{ padding: 20 }}>
              <WTypography variant="headline" component="h2" align="center">
                Sayfa bulunamadı
                            </WTypography>
              <WTypography component="p" align="center">
                Lütfen proje ve ekran alanlarını doğru tanımladığınızdan emin olunuz.
                            </WTypography>
            </WPaper>
          </WGrid>
        </WGrid>
    )
  }
}

const mapStateToProps = (state:WStore) => ({
  appContext: state.appContext,  
  userContext: state.userContext,
} as WStore);

const mapDispatchToProps = dispatch => ({
  saveScreenState: (screenId: string, state: any) => dispatch(AppContextActions.saveScreenState({ screenId, state })),
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({menuTreeItem, initialValues})),
  setValue: (key: string, value: any) => dispatch(AppContextActions.setValue({key, value}))
});

export default connect<WStore, DispatchProps, WScreenWrapperProps>(mapStateToProps, mapDispatchToProps)(withSnackbar(WScreenWrapper) as any);