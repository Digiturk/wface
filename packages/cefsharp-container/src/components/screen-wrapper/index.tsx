import { WCircularProgress, WIcon, WIconButton, withSnackbar, WTheme, BaseScreenProps, BaseScreenPropsContext } from '@wface/components';
import IOC, { IHttpService, IMenuTreeItem, MenuTreeUtil } from '@wface/ioc';
import { AppContextActions, ScreenData, WStore } from '@wface/store';
import { withTheme } from '@material-ui/core';
import * as React from 'react';
import { connect } from 'react-redux';
import { th } from 'date-fns/esm/locale';
import Host from '../../services/host';

interface ScreenWrapperState {
  pageError?: { error: any, info: any };
}

export interface ScreenWrapperProps {
  screen?: ScreenData;
  enqueueSnackbar?: (message: string, options: object) => void,
  theme?: WTheme;
}

export interface DispatchProps {
  closeScreen: (menuTreeItem: IMenuTreeItem) => void;
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => void;
  saveScreenState: (screenId: string, state: any) => void;
  setValue: (key: string, value: any) => void;
  changeScreenMode: (screenId: string, mode: 'normal' | 'loading') => void;
  setConfirmOnClose: (screenId: string, confirmOnClose: boolean, confirmOnCloseMessage: string) => void;
}

class ScreenWrapper extends React.Component<ScreenWrapperProps & WStore & DispatchProps, ScreenWrapperState> {

  private screenRef: any;

  constructor(props) {
    super(props);

    this.state = {
    }

    this.screenRef = React.createRef();
  }

  componentWillMount() {
    window.onbeforeunload = () => {
      this.saveState();
    }
  }

  componentWillUnmount() {
    this.saveState();
  }

  saveState = () => {
    if (this.screenRef.current) {
      this.props.saveScreenState(this.props.screen.menuTreeItem.id, this.screenRef.current.state);
    }
  }

  componentDidCatch(error, info) {
    this.setState({ pageError: { error, info } });
    this.changeScreenMode("normal");
  }

  openScreen = (screen: string, initialValues: any): boolean => {
    Host.OpenForm(screen, "", initialValues).then(result => {    
    }).catch(reason => {
      this.showSnackbar(reason, "error");
    });

    return true;
  }

  closeScreen = (screen: string) => {
    const item = MenuTreeUtil.findByName(this.props.appContext.menuTree, screen);
    if (!item) {
      return false;
    }

    this.props.closeScreen(item);
    return true;
  }

  setConfirmOnClose = (confirm: boolean, confirmMessage: string = "Ekranı kapatmak istediğinize emin misiniz?") => {
    this.props.setConfirmOnClose(this.props.screen.menuTreeItem.id, confirm, confirmMessage);
  }

  showSnackbar = (message: string, type: 'error' | 'success' | 'warning' | 'info' = 'info', duration: number = 5000) => {
    this.props.enqueueSnackbar(message, {
      variant: type,
      autoHideDuration: duration,
      action: <WIconButton id="btn-close-snackbar"><WIcon style={{ color: '#ffffff99' }} iconSize="small">close</WIcon></WIconButton>
    });
  }

  changeScreenMode = (mode: 'normal' | 'loading' = 'normal') => {
    this.props.changeScreenMode(this.props.screen.menuTreeItem.id, mode);
  }

  getBaseScreenProps = (): BaseScreenProps => {
    return {
      appContext: this.props.appContext,
      changeScreenMode: (mode) => this.changeScreenMode(mode),
      closeScreen: this.closeScreen,
      httpService: IOC.get<IHttpService>("IHttpService"),
      openScreen: this.openScreen,
      screenData: this.props.appContext.currentScreen,
      setConfirmOnClose: this.setConfirmOnClose,
      setValue: this.props.setValue,
      showSnackbar: this.showSnackbar,
      theme: this.props.theme,
      userContext: this.props.userContext
    } as BaseScreenProps;
  }

  public render() {
    if (this.state.pageError) {
      return <this.props.appContext.configuration.components.ErrorPage {...this.state.pageError} />
    }

    const Screen = this.props.appContext.configuration.screenList[this.props.screen.menuTreeItem.screen] as any;

    if (!Screen) {
      return <this.props.appContext.configuration.components.NoPage />
    }

    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', }}>
        {this.props.appContext.currentScreen.mode === 'loading' &&
          <div style={{ display: 'table', position: 'absolute', top: 0, width: '100%', height: '100%', background: 'rgba(63,81,181, 0.4)', zIndex: this.props.theme.zIndex.modal + 1 }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
              <WCircularProgress size={60} />
            </div>
          </div>
        }
        <div style={{ padding: this.props.theme.designDetails.pagePadding, paddingBottom: 10 }}>
          <BaseScreenPropsContext.Provider value={this.getBaseScreenProps()}>
            <BaseScreenPropsContext.Consumer>
              {(value: BaseScreenProps) => <Screen ref={this.screenRef} {...value} />}
            </BaseScreenPropsContext.Consumer>
          </BaseScreenPropsContext.Provider>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: WStore) => ({
  appContext: state.appContext,
  userContext: state.userContext,
} as WStore);

const mapDispatchToProps = dispatch => ({
  closeScreen: (menuTreeItem: IMenuTreeItem) => dispatch(AppContextActions.closeScreen(menuTreeItem)),
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => dispatch(AppContextActions.openScreen({ menuTreeItem, initialValues })),
  saveScreenState: (screenId: string, state: any) => dispatch(AppContextActions.saveScreenState({ screenId, state })),
  setValue: (key: string, value: any) => dispatch(AppContextActions.setValue({ key, value })),
  changeScreenMode: (screenId: string, mode: 'normal' | 'loading') => dispatch(AppContextActions.changeScreenMode({ screenId, mode })),
  setConfirmOnClose: (screenId: string, confirmOnClose: boolean, confirmOnCloseMessage: string) => dispatch(AppContextActions.setConfirmOnClose({ screenId, confirmOnClose, confirmOnCloseMessage }))
});

export default connect<WStore, DispatchProps, ScreenWrapperProps>(mapStateToProps, mapDispatchToProps)(withTheme(withSnackbar(ScreenWrapper) as any) as any);