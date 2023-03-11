import { IConfiguration } from '../../../';
import React, { FC, useCallback } from 'react';
import { useLocation, useParams } from 'react-router';
// @ts-ignore
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAppContext, useUserContext } from '../../../store';



const WDefaultContainer: FC<any> = () => {
  const appContext = useAppContext();
  const userContext = useUserContext();
  
  const setValue = useCallback((key: string, value: any) => appContext.setValue(key, value ), []);
  const { pathname } = useLocation();
  const params = useParams();

  const { isLoggedIn } = userContext;
  const { configuration }: { configuration: IConfiguration } = appContext;

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />
      {(isLoggedIn && configuration.authRequired === true)
        ? <Route path="/login" element={<Navigate to="/main" />} />
        : (
          // @ts-ignore
          <Route path="/login" element={<configuration.components.LoginPage appContext={appContext} userContext={userContext} setValue={setValue} />} />
        )
      }
      {(isLoggedIn && configuration.authRequired === true)
        ? <Route path="/login/:screen" element={<Navigate to={`/main/${params.screen || ''}`} />} />
        : (
          // @ts-ignore
          <Route path="/login/:screen" element={<configuration.components.LoginPage appContext={appContext} userContext={userContext} setValue={setValue} />} />
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
  );
}

export default WDefaultContainer;