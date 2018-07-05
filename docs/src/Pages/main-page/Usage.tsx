import * as React from 'react';
import * as WFace from '@wface/components';
import Command from './Command';

export default class Usage extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Kullanım</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>check_circle_outline</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            <Command command="wface create project" desc="Yeni proje oluştur"/>            
            <Command command="cd <proje-adi>" desc="Proje dizinine git"/>            
            <Command command="wface create screen" desc="Projeye ekran ekle"/>            
            <Command command="wface link" desc="Projeyi lokalde çalışan wface uygulamasına linkle"/>            
            <Command command="wface run" desc="Oşuşturduğumuz ekranı tarayıcıda görmek için wface uygulamsını çalıştır"/>            
          </WFace.WList>
          <WFace.WTypography variant="caption">
            Bundan sonra oluşturduğunuz ekrana ait kodları istediğiniz gibi geliştirebilirsiniz. 
          </WFace.WTypography>
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }
}

