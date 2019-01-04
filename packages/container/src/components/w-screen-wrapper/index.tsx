import { WCircularProgress, WIcon, WIconButton, withSnackbar, WPaper } from '@wface/components';
import IOC, { IHttpService, IMenuTreeItem, MenuTreeUtil } from '@wface/ioc';
import { AppContextActions, ScreenData, WStore } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';
import NoPage from './no-page';
import PageError from './page-error';

interface WScreenWrapperState {
  pageError?: { error: any, info: any };
}

export interface WScreenWrapperProps {
  screen?: ScreenData;
  enqueueSnackbar?: (message: string, options: object) => void
}

export interface DispatchProps {
  closeScreen: (menuTreeItem: IMenuTreeItem) => void;
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: any) => void;
  saveScreenState: (screenId: string, state: any) => void;
  setValue: (key: string, value: any) => void;
  changeScreenMode: (screenId: string, mode: 'normal' | 'loading') => void;
}

class WScreenWrapper extends React.Component<WScreenWrapperProps & WStore & DispatchProps, WScreenWrapperState> {

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
  }

  openScreen = (screen: string, initialValues: any): boolean => {
    const item = MenuTreeUtil.findByName(this.props.appContext.menuTree, screen);
    if (!item) {
      return false;
    }

    this.props.openScreen(item, initialValues);
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

  showSnackbar = (message: string, type: 'error' | 'success' | 'warning' | 'info' = 'info', duration: number = 5000) => {
    this.props.enqueueSnackbar(message, {
      variant: type,
      autoHideDuration: duration,
      action: <WIconButton><WIcon style={{ color: '#ffffff99' }} iconSize="small">close</WIcon></WIconButton>
    });
  }

  changeScreenMode = (mode: 'normal' | 'loading' = 'normal') => {
    this.props.changeScreenMode(this.props.screen.menuTreeItem.id, mode);
  }

  public render() {
    if (this.state.pageError) {
      return <PageError {...this.state.pageError} />
    }

    const Screen = this.props.appContext.configuration.screenList[this.props.screen.menuTreeItem.screen] as any;

    if (!Screen) {
      return <NoPage />
    }

    return (
      <div style={{ position: 'relative', width: '100%', height: '100%', }}>
        {this.props.appContext.currentScreen.mode === 'loading' &&
          <div style={{ display: 'table', position: 'absolute', width: '100%', height: '100%', background: '#3f51b544', zIndex: 9999 }}>
            <div style={{ display: 'table-cell', verticalAlign: 'middle', textAlign: 'center' }}>
              <WCircularProgress size={60} />
            </div>
          </div>
        }
        <div style={{ padding: 10 }}>
          <Screen
            ref={this.screenRef}
            appContext={this.props.appContext}
            changeScreenMode={(mode) => {
              this.changeScreenMode(mode)
            }}
            httpService={IOC.get<IHttpService>("IHttpService")}
            screenData={this.props.appContext.currentScreen}
            userContext={this.props.userContext}
            closeScreen={this.closeScreen}
            openScreen={this.openScreen}
            showSnackbar={this.showSnackbar}
            setValue={this.props.setValue}
          />
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
});

export default connect<WStore, DispatchProps, WScreenWrapperProps>(mapStateToProps, mapDispatchToProps)(withSnackbar(WScreenWrapper) as any);