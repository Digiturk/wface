import { WSnackbarProvider, WThemeProvider } from '@wface/components';
import IOC, { IAuthService, IConfiguration } from '@wface/ioc';
import { AppContextActions } from '@wface/store';
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
      <WSnackbarProvider
        maxSnack={3}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        autoHideDuration={5000}
      >
        <Routes>

          <Route path="/" element={<Navigate to="/main" />} />
          {(isLoggedIn || configuration.authRequired === false)
            ? <Route path="/login/:screen?" element={<Navigate to={`/main/${params.screen || ''}`} />} />
            : <Route path="/login/:screen?" element={<configuration.components.LoginPage authService={authService} appContext={appContext} userContext={userContext} setValue={setValue} />} />
          }
          {/* <Route path="/login/:screen?" element={(subProps: any) => isLoggedIn || configuration.authRequired === false ?
            <Redirect to={`/main/${subProps.match.params.screen || ''}`} />
            :
            <configuration.components.LoginPage {...subProps} authService={authService} appContext={appContext} userContext={userContext} setValue={setValue} />
          } />
          */}

          {(isLoggedIn || configuration.authRequired === false)
            ? <Route path="/main" element={<configuration.components.MainPage style={{ height: '100%' }} />} />
            : <Route path="/main" element={<Navigate to={pathname.replace('main', 'login')} />} />
          }
          {(isLoggedIn || configuration.authRequired === false)
            ? <Route path="/main/:screen" element={<configuration.components.MainPage style={{ height: '100%' }} />} />
            : <Route path="/main/:screen" element={<Navigate to={pathname.replace('main', 'login')} />} />
          }

          {/* <Route path="/main" element={(subProps: any) => isLoggedIn || configuration.authRequired === false
            ? <configuration.components.MainPage {...subProps} style={{ height: '100%' }} />
            : <Navigate to={pathname.replace('main', 'login')} />}
          /> */}
        </Routes>
      </WSnackbarProvider>
    </WThemeProvider >
  )
}

const WContainer: FC = () => (
  <BrowserRouter>
    <InnerContainer />
  </BrowserRouter>
);

export default WContainer;