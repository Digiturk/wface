import * as React from 'react';
import * as WFace from '@wface/components';
import CommandHighlight from '../../components/command-highlight';
import Text from '../../components/text';

export default class Usage extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard style={{height:'100%'}} elevation={0}>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="h5" ><Text tr="Kullanım" en="Usage"/></WFace.WTypography> } 
          avatar={<WFace.WIcon color="inherit" style={{fontSize:25}}>check_circle_outline</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            <CommandHighlight command="wface create project" dscr={<Text tr="Yeni proje oluştur" en="Create new project"/>}/>
            <CommandHighlight command="cd <proje-name>" dscr={<Text tr="Proje dizinine git" en="Go to the project folder"/>}/>
            <CommandHighlight command="npm start" dscr={<Text tr="Projeyi başlat" en="Run the project"/>}/>
          </WFace.WList>
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }
}

