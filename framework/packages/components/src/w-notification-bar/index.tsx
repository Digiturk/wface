import * as React from 'react';
import * as classNames from 'classnames';
import { WGrid, WGridProps } from '../w-grid';
import { WIconButton, WIconButtonProps } from '../w-icon-button';
import { WPaper, WPaperProps } from '../w-paper';
import { WTypography, WTypographyProps } from '../w-typography';
import { withStyles } from '@material-ui/core'
import Close from '@material-ui/icons/Close';


export interface WNotificationBarProps {
    text: string;
    type: string;
    classes?: any;
    onCloseClick?: () => void;
}

class WNotification extends React.Component<WNotificationBarProps, {}> {
    constructor(props) {
        super(props);
    }

    public render() {
        const { classes } = this.props;

        return (            
            <WPaper 
                className={classNames(classes.errorNotification, classes[this.props.type || 'error'])} 
                elevation={4}>
                <WGrid container alignItems="center">
                    <WGrid item xs={11}>
                        <WTypography style={{color:'#eee'}} align="left">
                            {this.props.text}
                        </WTypography>
                    </WGrid>
                    <WGrid item xs={1} style={{height:'100%'}}>
                        <WIconButton style={{margin:0, padding:0}} 
                            onClick={() => this.props.onCloseClick && this.props.onCloseClick()}>
                            <Close style={{ fontSize: 15, color: '#eee' }}/>
                        </WIconButton>
                    </WGrid>
                </WGrid>
            </WPaper>
        );
    }
}

const styles = theme => ({
    notification: theme.mixins.gutters({
        paddingTop:5,
        paddingBottom: 5,
        marginTop: theme.spacing.unit * 3,        
    }),
    error: theme.mixins.gutters({
        backgroundColor: '#EF5350' // TODO bunları tema gibi bir yerden almak lazım   
    }),
    warning: theme.mixins.gutters({
        backgroundColor: '#FFA726' // TODO bunları tema gibi bir yerden almak lazım   
    }),
    info: theme.mixins.gutters({
        backgroundColor: '#42A5F5' // TODO bunları tema gibi bir yerden almak lazım   
    }),
    success: theme.mixins.gutters({
        backgroundColor: '#66BB6A' // TODO bunları tema gibi bir yerden almak lazım   
    })
});

const WNotificationBar = withStyles(styles as any)(WNotification) 
export { WNotificationBar }
