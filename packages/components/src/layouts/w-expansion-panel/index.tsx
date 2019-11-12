import * as React from 'react';
import ExpansionPanel, { ExpansionPanelProps } from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelDetails, ExpansionPanelSummary, ExpansionPanelActions } from '@material-ui/core';
import { WIcon } from '../../medias/w-icon';
import { WTypography } from '../../others/w-typography';
import { WButton } from '../../buttons/w-button';
import { BaseComponentProps } from '../../base/base-component-props';
import { createStyles, withStyles } from '@material-ui/styles';
import { WTheme } from '../../others/w-theme-provider/w-theme';
// @ts-ignore
import classNames from 'classnames';

export type WExpansionPanelProps = BaseComponentProps & ExpansionPanelProps & {
  title: string;
  actions?: { text?: string, onClick?: (event) => void, custom?: React.ReactNode }[];
  theme?: WTheme;
  classes?: any;
}

class WExpansionPanelInner extends React.Component<WExpansionPanelProps, any> {
  public render() {
    const { classes } = this.props;

    return (
      <ExpansionPanel elevation={this.props.theme.designDetails.defaultElevation} {...this.props}>
        <ExpansionPanelSummary expandIcon={<WIcon>expand_more</WIcon>} classes={{ root: classes.summaryRoot, content: classes.summaryContent }}>
          <WTypography variant="h5">{this.props.title}</WTypography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          {this.props.children}
        </ExpansionPanelDetails>
        {this.props.actions &&
          <ExpansionPanelActions>
            {
              this.props.actions.map(action => {
                if (action.custom) {
                  return action.custom;
                }
                else {
                  return <WButton id={this.props.id + "-btn"} size="small" onClick={action.onClick}>{action.text}</WButton>;
                }
              })
            }
          </ExpansionPanelActions>
        }
      </ExpansionPanel>
    );
  }
}

const styles = (theme: WTheme) => createStyles({
  summaryRoot: {
    padding: '0px 8px',
    margin: 0,
    "&.Mui-expanded": {
      minHeight: 'auto'
    }
  },
  summaryContent: {
    margin: 0,
    "&.Mui-expanded": {
      "margin": '0px'
    }
  },
});

export const WExpansionPanel = withStyles(styles, { withTheme: true })(React.forwardRef<any, WExpansionPanelProps>((props, ref) => <WExpansionPanelInner {...props} ref={ref} />));