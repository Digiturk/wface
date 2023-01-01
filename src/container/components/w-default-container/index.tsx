import { WSnackbarProvider, WThemeProvider, IAuthService, IConfiguration, IOC, AppContextActions } from '../../../';
import * as React from 'react';
import { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router';
// @ts-ignore
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';



const InnerContainer: FC<any> = () => {

  const { userContext, appContext } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const setValue = useCallback((key: string, value: any) => dispatch(AppContextActions.setValue({ key, value })), []);
  const { pathname } = useLocation();
  const params = useParams();

  const { isLoggedIn } = userContext;
  const { configuration }: { configuration: IConfiguration } = appContext;

  const authService = IOC.get<IAuthService>("IAuthService");

  return (
    <WThemeProvider theme={configuration.theme}>
      <WSnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={5000}>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          {(isLoggedIn && configuration.authRequired === true)
            ? <Route path="/login" element={<Navigate to="/main" />} />
            : (
              // @ts-ignore
              <Route path="/login" element={<configuration.components.LoginPage authService={authService} appContext={appContext} userContext={userContext} setValue={setValue} />} />
            )
          }
          {(isLoggedIn && configuration.authRequired === true)
            ? <Route path="/login/:screen?" element={<Navigate to={`/main/${params.screen || ''}`} />} />
            : (
              // @ts-ignore
              <Route path="/login/:screen?" element={<configuration.components.LoginPage authService={authService} appContext={appContext} userContext={userContext} setValue={setValue} />} />
            )
          }
          {(isLoggedIn || configuration.authRequired === false)
            ? (
              // @ts-ignore
              <Route path="/main" element={<configuration.components.MainPage style={{ height: '100%' }} />} />
            ) : <Route path="/main" element={<Navigate to="/login" />} />
          }
          {(isLoggedIn || configuration.authRequired === false)
            ? (
              // @ts-ignore
              <Route path="/main/:screen" element={<configuration.components.MainPage style={{ height: '100%' }} />} />
            ) : <Route path="/main/:screen" element={<Navigate to={pathname.replace('main', 'login')} />} />
          }
        </Routes>
      </WSnackbarProvider>
    </WThemeProvider >
  );
}

const WDefaultContainer: FC = () => (
  <BrowserRouter>
    <InnerContainer />
  </BrowserRouter>
);

export default WDefaultContainer;