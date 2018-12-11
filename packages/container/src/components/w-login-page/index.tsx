//#region imports 

import { withStyles } from '@material-ui/core';
import {
  WCard, WCardContent, WGrid,
  WLoadingButton, WNotificationBar, WTextField,
  WTypography
} from '@wface/components';
import { IAuthService } from "@wface/ioc";
import { UserContext, UserContextActions, WStore, AppContext } from '@wface/store';
import classNames from 'classnames';
import * as React from "react";
import { connect } from 'react-redux';


//#endregion

interface WLoginPageState {
  username: string;
  password: string;
  isLoading: boolean;
  loadingButtonStatus: string;
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
          this.setState({ loadingButtonStatus: "success" }, () => {
          });
        }).
        catch(message => {
          this.setState({
            showNotification: true,
            notificationText: message
          });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
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
      <div style={{ height: '100%', width: '100%', backgroundImage: `url(./assets/wface/login-bg.jpg)` }}>
        <div style={{ paddingTop: '5%' }}>
          <WGrid container justify="center" style={{ paddingLeft: 10, paddingRight: 10 }}>
            <WGrid item xs={12} sm={6} md={4} lg={3}>
              <WCard>
                <WCardContent>
                  <WTypography
                    variant="display1"
                    gutterBottom
                    className={classNames(classes.textCenter)}
                    style={{ marginTop: 75 }}
                    color="primary"
                  >
                    <img
                      src="./assets/wface/login-logo.png" />
                  </WTypography>
                  {this.state.showNotification &&
                    <WNotificationBar
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
                    variant="raised"
                    size="large"
                    fullWidth
                    color="primary"
                    className={classes.vSpace}
                    style={{ marginTop: 50, marginBottom: 20 }}
                    isLoading={this.state.isLoading}
                    status={this.state.loadingButtonStatus}
                    disableFocusRipple
                    onClick={this.btnLoginClick.bind(this)}>
                    GİRİŞ
                                    </WLoadingButton>
                </WCardContent>
              </WCard>
            </WGrid>
            <WGrid item lg={12} style={{ textAlign: 'center', position: 'absolute', bottom: 50 }}>
              <WTypography style={{ color: '#ddd' }}>
                @2018 DigiTurk
                            </WTypography>
            </WGrid>
          </WGrid>
        </div>


      </div>
    );
  }
};

const styles = (theme: any) => ({
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
    marginTop: theme.spacing.unit * 2,
  }
});

export default withStyles(styles as any)(WLoginPage)