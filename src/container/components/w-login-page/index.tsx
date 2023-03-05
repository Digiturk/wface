//#region imports 
import {
  IAuthService, WCard, WCardContent, 
  WGrid, WLoadingButton, WNotificationBar, WTextField, WTypography, IOC, getStore
} from "../../../";
// @ts-ignore
import * as React from "react";
// @ts-ignore
import loginBg from '../../../assets/login-bg.jpg';
// @ts-ignore
import loginLogo from '../../../assets/login-logo.png';
import { useCallback, useState } from 'react';
import makeStyles from "@mui/styles/makeStyles";
import { UserContextActions } from "../../../store";
import { useDispatch } from "react-redux";

//#endregion

const useStyles = makeStyles((theme: any) => ({
  vSpace: {
    marginTop: theme.spacing(2),
  }
}));

const WLoginPage: React.FC = () => {
  const classes = useStyles();
  const authService = IOC.get<IAuthService>("IAuthService");
  const dispath = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showNotification, setShowNotification] = useState<boolean>(false);
  const [notificationText, setNotificationText] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const btnLoginClick = useCallback(async () => {
    setIsLoading(true);
        

    try {
      const response = await authService.login(username, password);
      dispath(UserContextActions.login({ ...response, username }));
    } catch (message) {
      setNotificationText(message as string);
      setShowNotification(true);
    }

    setIsLoading(false);
  }, [username, password]);

  const keyPressed = useCallback((e: any) => {
    if (e.key == 'Enter') {
      btnLoginClick();
    }
  }, [btnLoginClick]);

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
                  align="center"
                  style={{ marginTop: 75 }}
                  color="primary"
                >
                  <img src={loginLogo} />
                </WTypography>
                {showNotification &&
                  <WNotificationBar
                    id="login-page-notification-bar"
                    text={notificationText}
                    type={"error"}
                    onCloseClick={() => setShowNotification(false)} />
                }
                <WTextField
                  id="username"
                  label="Kullanıcı Adı"
                  fullWidth
                  margin="normal"
                  className={classes.vSpace}
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  onKeyPress={keyPressed}
                />
                <WTextField
                  id="password"
                  label="Şifre"
                  fullWidth
                  margin="normal"
                  type="password"
                  autoComplete="current-password"
                  className={classes.vSpace}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  onKeyPress={keyPressed}
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
                  isLoading={isLoading}
                  disableFocusRipple
                  onClick={btnLoginClick}
                >
                  Giriş
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

export default WLoginPage;