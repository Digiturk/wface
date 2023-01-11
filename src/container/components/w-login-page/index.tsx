//#region imports 

import createStyles from '@mui/styles/createStyles';

import withStyles from '@mui/styles/withStyles';
import {
  IAuthService, AppContext, UserContext,
  WStore, WCard, WCardContent, WGrid, WLoadingButton, WNotificationBar, WTextField, WTypography, WTheme
} from "../../../";
// @ts-ignore
import classNames from 'classnames';
import * as React from "react";
// @ts-ignore
import loginBg from '../../../assets/login-bg.jpg';
// @ts-ignore
import loginLogo from '../../../assets/login-logo.png';


//#endregion

interface WLoginPageState {
  username: string;
  password: string;
  isLoading: boolean;
  loadingButtonStatus: "error" | "normal" | "success";
  notificationText: string;
  showNotification: boolean;
  [key: string]: any
}

type WLoginPageProps = WStore & {
  appContext: AppContext;
  userContext: UserContext;
  authService: IAuthService;
  classes: any;
  setValue: (key: string, value: any) => void;
}

class WLoginPage extends React.Component<WLoginPageProps, WLoginPageState> {

  constructor(props: any) {
    super(props);

    this.state = {
      username: '',
      password: '',
      isLoading: false,
      loadingButtonStatus: "normal",
      notificationText: '',
      showNotification: false
    }
  }

  btnLoginClick() {
    this.setState({ isLoading: true }, () => {
      this.props.authService.login(this.state.username, this.state.password)
        .then(result => {
        }).
        catch(message => {
          this.setState({
            showNotification: true,
            notificationText: message,
            isLoading: false
          });
        })
    });
  }

  handleChange = (name: any) => (event: any) => {
    this.setState({
      [name]: event.target.value,
    });
  };

  keyPressed(e: any) {
    if (e.key == 'Enter') {
      this.btnLoginClick();
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <div style={{ height: '100vh', width: '100%', backgroundImage: `url(${loginBg})` }}>
        <div style={{ paddingTop: '5%' }}>
          <WGrid container justifyContent="center" style={{ paddingLeft: 10, paddingRight: 10 }}>
            <WGrid item xs={12} sm={6} md={4} lg={3}>
              <WCard>
                <WCardContent>
                  <WTypography
                    variant="h4"
                    gutterBottom
                    className={classNames(classes.textCenter)}
                    style={{ marginTop: 75 }}
                    color="primary"
                  >
                    <img src={loginLogo} />
                  </WTypography>
                  {this.state.showNotification &&
                    <WNotificationBar
                      id="login-page-notification-bar"
                      text={this.state.notificationText}
                      type={"error"}
                      onCloseClick={() => this.setState({ showNotification: false })} />
                  }
                  <WTextField
                    id="username"
                    label="Kullanıcı Adı"
                    fullWidth
                    margin="normal"
                    className={classes.vSpace}
                    value={this.state.username}
                    onChange={this.handleChange('username')}
                    onKeyPress={this.keyPressed.bind(this)}
                  />
                  <WTextField
                    id="password"
                    label="Şifre"
                    fullWidth
                    margin="normal"
                    type="password"
                    autoComplete="current-password"
                    className={classes.vSpace}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    onKeyPress={this.keyPressed.bind(this)}
                  />
                  <div className={classes.vSpace} />
                  <WLoadingButton
                    id="btn-login"
                    variant="contained"
                    size="large"
                    fullWidth
                    color="primary"
                    className={classes.vSpace}
                    style={{ marginTop: 50, marginBottom: 20 }}
                    isLoading={this.state.isLoading}
                    status={this.state.loadingButtonStatus}
                    disableFocusRipple
                    onClick={this.btnLoginClick.bind(this)}
                  >
                    GİRİŞ
                  </WLoadingButton>
                </WCardContent>
              </WCard>
            </WGrid>
            <WGrid item xs={12} style={{ textAlign: 'center' }}>
              <WTypography style={{ color: '#ddd' }}>
                @2018 DigiTurk
              </WTypography>
            </WGrid>
          </WGrid>
        </div>


      </div>
    );
  }
}

const styles = (theme: WTheme) => createStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  textCenter: {
    textAlign: 'center'
  },
  vSpace: {
    marginTop: theme.spacing(2),
  }
});

export default withStyles(styles as any, { withTheme: true })(WLoginPage) as any;