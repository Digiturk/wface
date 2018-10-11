import * as React from 'react';
import * as WFace from '@wface/components';
import Command from './Command';

export default class Usage extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard style={{height:'100%'}}>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Kullanım</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>check_circle_outline</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            <Command command="wface create project" desc="Yeni proje oluştur"/>            
            <Command command="cd <proje-adi>" desc="Proje dizinine git"/>            
            <Command command="npm start" desc="Oluşturduğumuz ekranı tarayıcıda görmek için wface uygulamasını çalıştır"/>
          </WFace.WList>
          <WFace.WTypography variant="caption">
            Bundan sonra kendi ekranlarınızı geliştirebilirsiniz. 
          </WFace.WTypography>
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }
}

