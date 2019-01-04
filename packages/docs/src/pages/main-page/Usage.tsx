import * as React from 'react';
import * as WFace from '@wface/components';
import CommandHighlight from '../../components/command-highlight';

export default class Usage extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard style={{height:'100%'}} elevation={0}>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="h5" >Kullanım</WFace.WTypography> } 
          avatar={<WFace.WIcon color="inherit" style={{fontSize:25}}>check_circle_outline</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            <CommandHighlight command="wface create project" dscr="Yeni proje oluştur"/>            
            <CommandHighlight command="cd <proje-adi>" dscr="Proje dizinine git"/>            
            <CommandHighlight command="npm start" dscr="Oluşturduğumuz ekranı tarayıcıda görmek için wface uygulamasını çalıştır"/>
          </WFace.WList>
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }
}

