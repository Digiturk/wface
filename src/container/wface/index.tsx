import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { IConfiguration } from '../../ioc';
import { AppContextProvider, UserContextProvider } from '../../store';
import WApp from '../components/w-app';

interface WFaceProps {
  configuration: IConfiguration;
}

const WFace: FC<WFaceProps> = ({ configuration }) => (
  <BrowserRouter>
    <UserContextProvider>
      <AppContextProvider configuration={configuration}>
        <WApp />
      </AppContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);

export default WFace;