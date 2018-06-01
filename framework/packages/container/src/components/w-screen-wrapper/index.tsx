import * as React from 'react';
import { connect } from 'react-redux';
import { WStore, IMenuTreeItem, IScreenProvider } from '@wface/ioc';
import { WGrid, WPaper, WTypography, WIcon } from '@wface/components';
import { Inject } from 'react.di';

export interface WScreenWrapperProps extends WStore {
    pageInfo: IMenuTreeItem
}

class WScreenWrapper extends React.Component<WScreenWrapperProps, any> {
    
    @Inject('IScreenProvider')
    private screenProvider: IScreenProvider;

    componentWillMount() {
        console.log(this.props.pageInfo.text + " will mount");
    }

    componentWillUpdate(nextProps) {
        console.log(nextProps.pageInfo.text + " will update");
    }

    componentWillUnmount() {
        console.log(this.props.pageInfo.text + " will unmount");
    }

    public render() {
        const Screen = this.screenProvider.getScreen(this.props.pageInfo.project, this.props.pageInfo.screen);
        return (
            Screen ?
                <Screen 
                    pageInfo={this.props.pageInfo}
                    appContext={this.props.appContext}
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

const mapStateToProps = state => ({...state} as WStore);
export default connect(mapStateToProps)(WScreenWrapper);