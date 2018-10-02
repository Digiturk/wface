import { WGrid, WPaper, WTypography } from '@wface/components';
import { IMenuTreeItem, MenuTreeUtil, IScreenProvider, IConfiguration } from '@wface/ioc';
import { AppContextActions, WStore, ScreenData } from '@wface/store';
import * as React from 'react';
import { connect } from 'react-redux';

export interface WScreenWrapperProps {
  screen?: ScreenData,
  screenProvider: IScreenProvider
}

export interface DispatchProps {
  saveScreenState: (screenId: string, state: any) => void;
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: Object) => void;
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

  // componentWillMount() {    
  //   this.props.screenProvider.getScreen(this.props.screen.menuTreeItem.project, this.props.screen.menuTreeItem.screen)
  //     .then(screen => {
  //       this.setState({
  //         screen: screen
  //       })
  //     })
  // }

  componentWillUnmount() {
    if (this.screenRef.current) {
      this.props.saveScreenState(this.props.screen.menuTreeItem.id, this.screenRef.current.state);
    }
  }

  openScreen = (project: string, screen: string, initialValues: Object):boolean => {
    const item = MenuTreeUtil.findByName(this.props.appContext.menuTree, project, screen);
    if(!item) {
      return false;
    }

    this.props.openScreen(item, initialValues);
    return true;
  }

  public render() {
    const Screen = this.props.screenProvider.getScreen(this.props.screen.menuTreeItem.project, this.props.screen.menuTreeItem.screen) as any;
    return (
      Screen ?
        <Screen
          ref={this.screenRef}
          appContext={this.props.appContext}
          screenData={this.props.appContext.currentScreen}
          userContext={this.props.userContext}
          openScreen={this.openScreen}
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
  openScreen: (menuTreeItem: IMenuTreeItem, initialValues?: Object) => dispatch(AppContextActions.openScreen({menuTreeItem, initialValues})),  
});

export default connect<WStore, DispatchProps, WScreenWrapperProps>(mapStateToProps, mapDispatchToProps)(WScreenWrapper);