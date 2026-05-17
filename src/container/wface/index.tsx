import React, { FC, useMemo } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IConfiguration } from '../../ioc';
import { AppContextProvider, ApiContextProvider, UserContextProvider, ConfigContextProvider } from '../../store';
import WApp from '../components/w-app';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


interface WFaceProps {
  configuration: IConfiguration;
}

const WFace: FC<WFaceProps> = ({ configuration }) => {
  const children = useMemo(() => {
    let result = <WApp />;    

    if (configuration.api) {
      result = <ApiContextProvider>{result}</ApiContextProvider>;
    }

    return result;
  }, [configuration.api]);

  return (
    <BrowserRouter>
      <UserContextProvider useLocalStorage={configuration.useLocalStorage} projectName={configuration.projectName}>
        <AppContextProvider>
          <ConfigContextProvider configuration={configuration}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              {children}           
            </LocalizationProvider>
          </ConfigContextProvider>
        </AppContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default WFace;