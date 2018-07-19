import * as React from 'react';
import * as WFace from '@wface/components';
import Command from './Command'

export default class Setup extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard style={{height:'100%'}}>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Kurulum</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>build</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            <Command command="npm set registry http://registry.digiturk.com" desc="DigiTürk npm reposunu ayarla"/>
            <Command command="npm install -g @wface/cli" desc="WFace komut satırı uygulamasını indir"/>
            <Command command="set ASPNETCORE_Environment Development" desc=".Net Core uygulamasının çalışması için ortam ayarını Development olarak ayarla"/>
            <Command command="wface run" desc="WFace uygulamasını çalıştır. WFace uygulaması ilk çalışmada ihtiyaç duyacağı client-app ve server-app uygulamalarını indirecektir."/>
          </WFace.WList>
        </WFace.WCardContent>
        <WFace.WCardActions>
          <WFace.WButton style={{marginLeft: 'auto'}} size="small" href={"#Setup"} variant="outlined" color="primary">Detaylı Kurulum</WFace.WButton>
        </WFace.WCardActions>
      </WFace.WCard>
    );
  }
}

