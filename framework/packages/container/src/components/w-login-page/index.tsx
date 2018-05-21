//#region imports 

import * as React from "react";
import { withRouter } from 'react-router-dom'
import { TextField, withStyles, IconButton } from '@material-ui/core'
import { 
    WButton, WCard, WCardContent,
    WGrid, WTextField, WTypography
} from '@wface/components';
import * as classNames from 'classnames';   
import {    
    Visibility, VisibilityOff
} from '@material-ui/icons' 

//#endregion

class WLoginPage extends React.Component<any,{}> { 
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;

        return (     
            <div style={{height:'100%', backgroundImage: `url(./assets/login-bg.jpg)`}}>       
                <div style={{paddingTop:'12%'}}>
                    <WGrid container justify="center">
                        <WGrid item xs={12} sm={12} md={3}>
                            <WCard>
                                <WCardContent>
                                    <WTypography 
                                        variant="display1" 
                                        gutterBottom 
                                        className={classNames(classes.textCenter, classes.vSpace)}
                                        color="primary"
                                        >
                                        WFACE
                                    </WTypography>
                                    <WTextField
                                        id="username"
                                        label="Kullanıcı Adı"                                
                                        fullWidth                                        
                                        margin="normal"
                                        className={classes.vSpace}
                                        />
                                    <WTextField
                                        id="password"
                                        label="Şifre"                                
                                        fullWidth
                                        margin="normal"   
                                        type="password"    
                                        autoComplete="current-password"                         
                                        className={classes.vSpace}
                                        />
                                    <div className={classes.vSpace}/>
                                    <WButton 
                                        variant="raised" 
                                        size="large" 
                                        fullWidth 
                                        color="primary" 
                                        className={classes.vSpace}
                                        style={{marginBottom:20}}
                                        onClick={() => this.props.history.replace('/main')}>
                                        GİRİŞ
                                    </WButton>
                                </WCardContent>
                            </WCard>
                        </WGrid>
                    </WGrid>
                </div>
            </div>
        );
    }
};

const styles = theme => ({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      marginBottom: 16,
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    textCenter: {
        textAlign: 'center'
    },
    vSpace: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
    }
});

export default withRouter(withStyles(styles as any)(WLoginPage))