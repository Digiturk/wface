// We have to provide a Promise polyfill if we're targeting older browsers
// because import() returns a promise which resolves once the module is loaded
import "reflect-metadata";
import React, { FC, useCallback, useEffect } from 'react';
// @ts-ignore
import * as queryString from 'query-string'
import { WSnackbarProvider, WThemeProvider } from "../../../components";
import { useAppContext } from "../../../store";

const WApp: FC = () => {
  const { configuration, setQueryParams } = useAppContext();

  const parseQueryParams = useCallback(() => {
    const values = queryString.parse(window.location.search);
    setQueryParams(values);
  }, [setQueryParams]);

  useEffect(() => {
    parseQueryParams();

    if(configuration.hooks?.onAppDidMount) {
      configuration.hooks.onAppDidMount();
    }

    return () => {
      if(configuration.hooks?.onAppWillUnmount) {
        configuration.hooks.onAppWillUnmount();
      }
    };
  }, [parseQueryParams]);


  return (
    <WThemeProvider theme={configuration.theme}>
      <WSnackbarProvider maxSnack={3} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }} autoHideDuration={5000}>
        {/* <WContainer /> */}
        {/* @ts-ignore */}
        <configuration.components.Container />
      </WSnackbarProvider>
    </WThemeProvider>
  );
}

export default WApp;