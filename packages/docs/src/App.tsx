import { withStyles } from '@material-ui/core';
import * as WFace from '@wface/components';
import * as React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import GetStartedPage from './pages/get-started';
import MainPage from './pages/main-page';
import ComponentsPage from './pages/components';
import CliPage from './pages/cli';
import TrainingPage from './pages/training';
import VersionsPage from './pages/versions';
import BlogPage from './pages/blog';
import { Scrollbars } from 'react-custom-scrollbars';

class AppInner extends React.Component<any, any> {

  renderMenuLink = (href: string, text: string): React.ReactNode => (
    <WFace.WButton
      variant="flat"
      color="inherit"
      href={"#" + href}
      className={this.props.classes.linkButton}
      style={{ opacity: this.props.location.pathname.startsWith("/" + href) ? 1 : 0.5 }}
    >
      {text}
    </WFace.WButton>
  )

  public render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <WFace.WAppBar position="absolute" className={classes.appBar} elevation={0}>
          <WFace.WToolBar>
            <WFace.WTypography variant="headline" color="inherit" noWrap className={classes.flex} style={{marginLeft: 20, fontWeight: 500}}>
              WFace
            </WFace.WTypography>

            {this.renderMenuLink("main", "Ana Sayfa")}
            {this.renderMenuLink("get-started", "Başlangıç")}
            {this.renderMenuLink("components", "Bileşenler")}
            {this.renderMenuLink("cli", "WFace CLI")}
            {this.renderMenuLink("blog", "Blog")}
            {this.renderMenuLink("versions", "Versiyonlar")}
            {this.renderMenuLink("training", "Eğitim")}
          </WFace.WToolBar>
        </WFace.WAppBar>

        <main className={classes.content}>
          <Scrollbars style={{ width: '100%', height: '100%' }}>
            <Route exact path="/" render={props => <Redirect to="/main" />} />
            <Route path="/main" component={MainPage} />
            <Route path="/get-started" component={GetStartedPage} />
            <Route path="/components" component={ComponentsPage} />
            <Route path="/cli" component={CliPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/versions" component={VersionsPage} />
            <Route path="/training" component={TrainingPage} />
          </Scrollbars>
        </main>
      </div>
    )
  }
}

const styles: any = (theme: any) => ({
  root: {
    flexGrow: 1,
    height: '%100',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  flex: {
    flex: 1,
  },
  linkButton: {
    textTransform: 'none',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#eee',
    padding: 0, // theme.spacing.unit * 3
    minWidth: 0, // So the Typography noWrap works
    marginTop: 64,
    marginBottom: 0,
    maxHeight: '100%',
    overflow: 'auto'
  }
});

const App = withStyles(styles)(AppInner)
export default withRouter(App as any)