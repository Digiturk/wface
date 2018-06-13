import * as React from 'react';
import { connect } from 'react-redux';
import { IMenuTreeItem, IScreenProvider } from '@wface/ioc';
import { WGrid, WPaper, WTypography, WIcon } from '@wface/components';
import { Inject } from 'react.di';
import { WStore, ScreenContextActions } from '@wface/store';

export interface WScreenWrapperProps {
    screenInfo?: IMenuTreeItem
}

export interface DispatchProps {
    saveState: (screenId: string, state: any) => void
}

class WScreenWrapper extends React.Component<WScreenWrapperProps & WStore & DispatchProps, any> {
    
    @Inject('IScreenProvider')
    private screenProvider: IScreenProvider;
    
    private screenRef;

    constructor(props) {
        super(props);
        
        this.state = {
            screen: undefined            
        }

        this.screenRef = React.createRef();
    }    

    componentWillMount() {   
        this.screenProvider.getScreen(this.props.screenInfo.project, this.props.screenInfo.screen)
            .then(screen => {
                this.setState({
                    screen: screen
                })            
            })
    }

    componentWillUnmount() {
        if(this.screenRef.current) {
            this.props.saveState(this.props.screenInfo.id, this.screenRef.current.state);
        }
    }

    public render() {
        const Screen = this.state.screen;
        return (
            Screen ?
                <Screen                                   
                    ref={this.screenRef}
                    appContext={this.props.appContext}
                    screenContext={this.props.screenContext.current}
                    userContext={this.props.userContext}/> 
            :
                <WGrid container justify="center" style={{paddingTop:30}}>
                    <WGrid item md={6}>
                        <WPaper elevation={4} style={{padding:20}}>
                            <WTypography variant="headline" component="h2" align="center">
                                Sayfa bulunamadı
                            </WTypography>
                            <WTypography component="p" align="center">
                                Lütfen proje ve ekran alanlarını doğru tanımladığınızdan emin olunuz.
                            </WTypography>
                        </WPaper>
                    </WGrid>
                </WGrid>
        )
    }
}

const mapStateToProps = state => ({
    appContext: state.appContext,
    screenContext: state.screenContext,
    userContext: state.userContext,
} as WStore);

const mapDispatchToProps = dispatch => ({
    saveState: (screenId: string, state: any) => dispatch(ScreenContextActions.saveState({screenId, state}))
});

export default connect<WStore, DispatchProps, WScreenWrapperProps>(mapStateToProps, mapDispatchToProps)(WScreenWrapper);