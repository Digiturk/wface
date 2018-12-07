import * as React from 'react';
import * as WFace from '@wface/components';
import { withStyles } from '@material-ui/core';
import Requirements from './Requirements';
import Setup from './Setup';
import Usage from './Usage';

class MainPage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <WFace.WGrid container justify="center" style={{paddingTop: 0, paddingBottom:20, marginBottom: 10, backgroundColor: '#3f51b5'}}>
          <WFace.WGrid item style={{textAlign:'center'}} xs={12}>
            <WFace.WIcon style={{fontSize: 150, height:120, color:'#eee'}}>code</WFace.WIcon>                            
            <WFace.WTypography variant="title" style={{fontSize:50, color:'#eee'}} color="primary">WFace</WFace.WTypography>
            <WFace.WButton href={"#/get-started"} variant="contained" color="default" style={{margin:20}}>BAŞLANGIÇ</WFace.WButton>
            <WFace.WButton href={"#/components"} variant="contained" color="default" style={{margin:20}}>BİLEŞENLER</WFace.WButton>
            <WFace.WButton href={"#/blog"} variant="contained" color="default" style={{margin:20}}>BLOG</WFace.WButton>
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

export default MainPage