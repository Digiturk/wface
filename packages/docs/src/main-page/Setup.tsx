import * as React from 'react';
import * as WFace from '@wface/components';
import CommandHighlight from '../docs/cli/commands/CommandHighlight'

export default class Setup extends React.Component<any, any> {
  public render() {
    return (
      <WFace.WCard style={{height:'100%'}}>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Kurulum</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>build</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            <CommandHighlight command="npm set registry http://dtl1tfsbuild2:8081/repository/digiturk-npm-group/" dscr="Digiturk npm reposunu ayarla"/>
            <CommandHighlight command="npm i -g yarn" dscr="yarn yükle"/>
            <CommandHighlight command="npm i -g wface" dscr="WFace komut satırı uygulamasını indir"/>
          </WFace.WList>
        </WFace.WCardContent>
        <WFace.WCardActions>
          <WFace.WButton style={{marginLeft: 'auto'}} size="small" href={"#Setup"} variant="outlined" color="primary">Detaylı Kurulum</WFace.WButton>
        </WFace.WCardActions>
      </WFace.WCard>
    );
  }
}

