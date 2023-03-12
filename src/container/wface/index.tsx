import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IConfiguration } from '../../ioc';
import { AppContextProvider, ApiContextProvider, UserContextProvider } from '../../store';
import WApp from '../components/w-app';

interface WFaceProps {
  configuration: IConfiguration;
}

const WFace: FC<WFaceProps> = ({ configuration }) => (
  <BrowserRouter>
    <UserContextProvider configuration={configuration}>
      <AppContextProvider configuration={configuration}>
        <ApiContextProvider>
          <WApp />
        </ApiContextProvider>
      </AppContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

export default WFace;