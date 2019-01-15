import * as React from 'react';
import * as WFace from '@wface/components';
import { withStyles } from '@material-ui/core';
import Requirements from './Requirements';
import Setup from './Setup';
import Usage from './Usage';

class MainPage extends React.Component<any, any> {

  MainButton = (props: {href: string, text: string}) => (
    <WFace.WButton 
      href={props.href}
      className={this.props.classes.mainButton}       
      variant="outlined" 
    >
      {props.text}
    </WFace.WButton>
  );

  public render() {
    const { classes } = this.props;

    return (
      <div>
        <WFace.WGrid container justify="center" style={{ paddingTop: 80, paddingBottom: 80, marginBottom: 0, backgroundColor: '#3f51b5' }}>
          <WFace.WGrid item style={{ textAlign: 'center' }} xs={12}>
            <WFace.WIcon style={{ fontSize: 200, height: 160, color: '#fff' }}>code</WFace.WIcon>
            <WFace.WTypography variant="h6" style={{ fontSize: 50, color: '#fff', marginBottom: 30 }} color="primary">WFace</WFace.WTypography>
            <this.MainButton href={"#/get-started"} text="Başlangıç"/>
            <this.MainButton href={"#/components"} text="Bileşenler"/>
            <this.MainButton href={"#/blog"} text="Blog"/>                   
          </WFace.WGrid>
        </WFace.WGrid>
        <WFace.WGrid container style={{ padding:'20px 0px 20px 0px', textAlign: 'left' }}>
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4} style={{ padding: 4 }}>
            <Requirements />
          </WFace.WGrid>
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4} style={{ padding: 4 }}>
            <Setup />
          </WFace.WGrid>
          <WFace.WGrid item xs={12} sm={12} md={4} lg={4} style={{ padding: 4 }}>
            <Usage />
          </WFace.WGrid>
        </WFace.WGrid>
      </div>
    );
  }
}

const styles: any = ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: 120
  },
  mainButton: {
    width: 100,
    margin: 20,
    textTransform: 'none',
    color: '#DDD',
    backgroundColor: '#DDDDDD00',
    borderColor: '#DDD',
    '&:hover': {
      backgroundColor: '#DDDDDD22',
      borderColor: '#DDD',
    },
  },
});

export default withStyles(styles)(MainPage)
