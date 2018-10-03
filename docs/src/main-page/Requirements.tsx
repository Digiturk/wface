import * as React from 'react';
import * as WFace from '@wface/components';

export default class Requirements extends React.Component<any, any> {

  private renderRequirement(primaryText: string, secondaryText: string, href: string, avatarUrl: string): React.ReactNode {
    return (
      <WFace.WListItem> 
        <div style={{width:40, textAlign:'center'}}>
          <img src={avatarUrl} style={{maxHeight:40, maxWidth:40}}/>           
        </div>
        
        <WFace.WListItemText primary={primaryText} secondary={secondaryText}/>
        <WFace.WListItemSecondaryAction>
          <WFace.WIconButton href={href} target="_blank"> 
            <WFace.WIcon>get_app</WFace.WIcon>
          </WFace.WIconButton>
        </WFace.WListItemSecondaryAction> 
      </WFace.WListItem>                          
    );
  }

  public render() {
    return (
      <WFace.WCard style={{height:'100%'}}>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Gereksinimler</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>get_app</WFace.WIcon>}/>
        <WFace.WCardContent>
          <WFace.WList>
            {this.renderRequirement(
              "Node.js", 
              "min version 10.6.0", 
              "https://nodejs.org/en/", 
              "https://nodejs.org/static/images/logo-hexagon-card.png"
            )}
            {this.renderRequirement(
              "Visual Studio Code", 
              "min version 1.24.0", 
              "https://code.visualstudio.com/", 
              "https://visualstudio.microsoft.com/wp-content/uploads/2017/10/visual-studio-code-logo.png"
            )}
            {this.renderRequirement(
              "Git", 
              "min version 2.18.0", 
              "https://git-scm.com/downloads", 
              "https://git-scm.com/images/logos/logomark-orange.png"
            )}
            {this.renderRequirement(
              "React Developer Tools", 
              "min version 3.2.3 [Chrome Extension]", 
              "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi", 
              "https://lh3.googleusercontent.com/Eb8igNFfrgc1Pdayp7bh_h-IKjPQL138YCkknAVxEyYTBThricwo_XG3bFdgoqj_PiTGwFc=w26-h26-e365"
            )}
          </WFace.WList>
        </WFace.WCardContent>       
      </WFace.WCard>
    )
  } 
}

