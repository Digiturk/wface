import React, { FC, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useAppContext, useConfiguration, useUserContext } from '../../../store';
import { MenuTreeUtil } from '../../../ioc';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();
  const { isLoggedIn } = useUserContext();
  const { authRequired } = useConfiguration();

  if (authRequired && !isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return children;
};

const LoginRoute = ({ children }: { children: JSX.Element }) => {
  let location = useLocation();
  const { isLoggedIn } = useUserContext();
  const { authRequired } = useConfiguration();

  if ((!authRequired || isLoggedIn)) {
    return <Navigate to="/main" state={{ from: location }} replace />
  }

  return children;
};

const WDefaultContainer: FC<any> = () => {
  const appContext = useAppContext();
  const userContext = useUserContext();
  const configuration = useConfiguration();

  const setValue = useCallback((key: string, value: any) => appContext.setValue(key, value), []);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/main" />} />

      <Route
        path="/login"
        element={
          <LoginRoute>
            {/* @ts-ignore */}
            < configuration.components.LoginPage appContext={appContext} userContext={userContext} setValue={setValue} />
          </LoginRoute>
        }
      />
      <Route
        path="/main/*"
        element={
          <ProtectedRoute>
            {/* @ts-ignore */}
            <configuration.components.MainPage style={{ height: '100%' }} />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default WDefaultContainer;