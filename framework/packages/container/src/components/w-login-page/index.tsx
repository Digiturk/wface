//#region imports 

import * as React from "react";
import { withRouter } from 'react-router-dom'
import { Paper, withStyles } from '@material-ui/core'
import { 
    WButton, WCard, WCardContent,
    WGrid, WIconButton, WNotificationBar,
    WTextField, WTypography,
    WLoadingButton, WLoadingButtonProps, WLoadingButtonStatus,
    WLinearProgress
} from '@wface/components';
import * as classNames from 'classnames';   
import {    
    Visibility, VisibilityOff
} from '@material-ui/icons' 

import { Inject } from 'react.di';
import IAuthService from "../../providers/IAuthService";

//#endregion

interface WLoginPageState {
    username: string;
    password: string;
    isLoading: boolean;
    loadingButtonStatus: WLoadingButtonStatus;
    notificationText: string;
    notificationType: string;
    showNotification: boolean;    
}

class WLoginPage extends React.Component<any, WLoginPageState> { 

    @Inject('IAuthService')
    private authService: IAuthService

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            isLoading: false,
            loadingButtonStatus: WLoadingButtonStatus.normal,
            notificationText: '',
            notificationType: 'error',
            showNotification: false            
        }
    }

    btnLoginClick() {
        this.setState({isLoading: true}, () => {
            this.authService.login(this.state.username, this.state.password)
                .then(result => {
                    if(result) {
                        this.setState({loadingButtonStatus: WLoadingButtonStatus.success}, () => {
                            this.props.history.replace('/main');    
                        });                    
                    }
                    else {
                        this.setState({
                            showNotification: true,
                            notificationText: "Girdiğiniz kullanıcı adı veya şifre hatalıdır!",
                            notificationType: "error",
                            loadingButtonStatus: WLoadingButtonStatus.error
                        });
                    }
                }).
                catch(message => {
                    this.setState({
                        showNotification: true,
                        notificationText: "Sunucu ile iletişimde bir hata alındı. Lütfen bağlantı ayarlarınızı kontrol ediniz.",
                        notificationType: "warning"                    
                    });
                })
                .finally(() => {
                    this.setState({isLoading:false});
                });       
        });        
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
    };

    keyPressed(e) {
        if(e.key == 'Enter') {
            this.btnLoginClick();
        }
    }

    render() {
        const { classes } = this.props;

        return (     
            <div style={{height:'100%', backgroundImage: `url(./assets/login-bg.jpg)`}}>       
                <div style={{paddingTop:'5%'}}>
                    <WGrid container justify="center" style={{paddingLeft:10, paddingRight:10}}>
                        <WGrid item xs={12} sm={12} md={3}>
                            <WCard>
                                <WCardContent>
                                    <WTypography 
                                        variant="display1" 
                                        gutterBottom 
                                        className={classNames(classes.textCenter)}
                                        style={{marginTop:75}}
                                        color="primary"
                                        >
                                        <img 
                                            src="./assets/login-logo.png"/>
                                    </WTypography>

                                    {this.state.showNotification &&
                                        <WNotificationBar 
                                            text={this.state.notificationText}
                                            type={this.state.notificationType}
                                            onCloseClick={() => this.setState({showNotification: false})}/>
                                    }

                                    <WTextField
                                        id="username"
                                        label="Kullanıcı Adı"                                
                                        fullWidth                                        
                                        margin="normal"
                                        className={classes.vSpace}
                                        value={this.state.username}
                                        onChange={this.handleChange('username')}
                                        onKeyPress={this.keyPressed.bind(this)}
                                        />
                                    <WTextField
                                        id="password"
                                        label="Şifre"                                
                                        fullWidth
                                        margin="normal"   
                                        type="password"    
                                        autoComplete="current-password"                         
                                        className={classes.vSpace}
                                        value={this.state.password}
                                        onChange={this.handleChange('password')}
                                        onKeyPress={this.keyPressed.bind(this)}
                                        />
                                    <div className={classes.vSpace}/>
                                    <WLoadingButton 
                                        variant="raised" 
                                        size="large" 
                                        fullWidth 
                                        color="primary" 
                                        className={classes.vSpace}
                                        style={{marginTop: 50, marginBottom: 20}}
                                        isLoading={this.state.isLoading}
                                        status={this.state.loadingButtonStatus}
                                        disableFocusRipple
                                        onClick={this.btnLoginClick.bind(this)}>
                                        GİRİŞ
                                    </WLoadingButton>
                                </WCardContent>
                            </WCard>
                        </WGrid>
                        <WGrid item lg={12} style={{textAlign:'center', position:'absolute', bottom:50}}>
                            <WTypography style={{color:'#ddd'}}>                                    
                                @2018 DigiTurk
                            </WTypography>
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
    }    
});

export default withRouter(withStyles(styles as any)(WLoginPage))