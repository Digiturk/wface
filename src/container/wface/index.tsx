import React, { FC } from 'react';
import { IConfiguration } from '../../ioc';
import WApp from '../components/w-app';

interface WFaceProps {
  configuration: IConfiguration;
}

const WFace: FC<WFaceProps> = ({ configuration }) => <WApp configuration={configuration} />

export default WFace;