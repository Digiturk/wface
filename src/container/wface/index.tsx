import React, { FC, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IConfiguration } from '../../ioc';
import { AppContextProvider, ApiContextProvider, UserContextProvider, ConfigContextProvider, useUserContext } from '../../store';
import WApp from '../components/w-app';

interface WFaceProps {
  configuration: IConfiguration;
}

const WFace: FC<WFaceProps> = ({ configuration }) => {
  const children = useMemo(() => {
    let result = <WApp />;

    if (configuration.wrapApp) {
      result = configuration.wrapApp(result);
    }

    if (configuration.api) {
      result = <ApiContextProvider>{result}</ApiContextProvider>;
    }

    return result;
  }, [configuration.api, configuration.wrapApp]);



  return (
    <BrowserRouter>
      <UserContextProvider useLocalStorage={configuration.useLocalStorage} projectName={configuration.projectName}>
        <AppContextProvider>
          <ConfigContextProvider configuration={configuration}>
            {children}           
          </ConfigContextProvider>
        </AppContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default WFace;