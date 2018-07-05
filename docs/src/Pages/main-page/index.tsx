import * as React from 'react';
import * as WFace from '@wface/components';
import { withStyles } from '@material-ui/core';

class MainPage extends React.Component<any, any> {

  private renderRequirement(primaryText: string, secondaryText: string, href: string, avatarUrl: string) {
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

  private renderRequirements () {
    return (
      <WFace.WCard>
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
              ".Net Core SDK", 
              "min version 2.1.0", 
              "https://www.microsoft.com/net/learn/get-started/windows", 
              "https://docs.microsoft.com/en-us/dotnet/images/hub/netcore.svg"
            )}
            {this.renderRequirement(
              "Visual Studio Code", 
              "min version 1.24", 
              "https://code.visualstudio.com/", 
              "https://visualstudio.microsoft.com/wp-content/uploads/2017/10/visual-studio-code-logo.png"
            )}
          </WFace.WList>
        </WFace.WCardContent>
      </WFace.WCard>
    )
  } 

  private renderInstallation() {
    return (
      <WFace.WCard>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Kurulum</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>get_app</WFace.WIcon>}/>
        <WFace.WCardContent>
          içerik
        </WFace.WCardContent>
      </WFace.WCard>
    );
  }

  private renderUsage() {
    return (
      <WFace.WCard>
        <WFace.WCardHeader 
          title={<WFace.WTypography variant="headline" >Kullanım</WFace.WTypography> } 
          avatar={<WFace.WIcon color="primary" style={{fontSize:25}}>build</WFace.WIcon>}/>
        <WFace.WCardContent>
          içerik
        </WFace.WCardContent>
      </WFace.WCard>
    )
  }

  public render() {
    const { classes } = this.props;

    return (
      <div>
        <WFace.WGrid container justify="center" style={{paddingTop:20, marginBottom:40}}>
          <WFace.WGrid item style={{textAlign:'center'}} xs={12}>
            <WFace.WIcon style={{fontSize: 200, height:160}} color="primary">code</WFace.WIcon>                            
            <WFace.WTypography variant="title" style={{fontSize:50}} color="primary">WFace</WFace.WTypography>
            <WFace.WButton href={"#GetStarted"} variant="outlined" color="primary" style={{marginTop:20}}>Başlangıç</WFace.WButton>
          </WFace.WGrid>
        </WFace.WGrid>        
        <WFace.WGrid container>
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4}>      
            {this.renderRequirements()}      
          </WFace.WGrid>  
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4}>            
            {this.renderInstallation()}
          </WFace.WGrid>  
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4}>            
            {this.renderUsage()}
          </WFace.WGrid>  
        </WFace.WGrid>
      </div>
    );
  }
}

const styles:any = ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 120
  }
});

export default withStyles(styles)(MainPage)
