import * as React from 'react';
import * as WFace from '@wface/components';
import CommandHighlight from '../../components/command-highlight';
import Text from '../../components/text';

export default class Setup extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard style={{ height: '100%' }} elevation={0}>
        <WFace.WCardHeader
          title={<WFace.WTypography variant="h5" ><Text tr="Kurulum" en="Setup"/></WFace.WTypography>}
          avatar={<WFace.WIcon color="inherit" style={{ fontSize: 25 }}>build</WFace.WIcon>} />
        <WFace.WCardContent>
          <WFace.WList>
            <CommandHighlight command="npm i -g yarn" dscr={<Text tr="yarn yükle" en="Install yarn"/>} />
            <CommandHighlight command="npm i -g @wface/cli" dscr={<Text tr="WFace komut satırı uygulamasını yükle" en="Install WFace CLI"/>} />
          </WFace.WList>
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }
}

