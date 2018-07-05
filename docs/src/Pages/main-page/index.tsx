import * as React from 'react';
import * as WFace from '@wface/components';
import { withStyles } from '@material-ui/core';
import Requirements from './Requirements';
import Setup from './Setup';
import Usage from './Usage';

class MainPage extends React.Component<any, any> {
  public render() {
    const { classes } = this.props;

    return (
      <div>
        <WFace.WGrid container justify="center" style={{paddingTop: 40, paddingBottom:80, marginBottom: 10, backgroundImage: 'url(./assets/login-bg.jpg)'}}>
          <WFace.WGrid item style={{textAlign:'center'}} xs={12}>
            <WFace.WIcon style={{fontSize: 200, height:160, color:'#eee'}}>code</WFace.WIcon>                            
            <WFace.WTypography variant="title" style={{fontSize:50, color:'#eee'}} color="primary">WFace</WFace.WTypography>
            <WFace.WButton href={"#GetStarted"} variant="contained" color="default" style={{marginTop:30}}>Başlangıç</WFace.WButton>
          </WFace.WGrid>
        </WFace.WGrid>        
        <WFace.WGrid container>
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4}>      
            <Requirements/>   
          </WFace.WGrid>  
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4}>            
            <Setup/>
          </WFace.WGrid>  
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4}>            
            <Usage/>
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
