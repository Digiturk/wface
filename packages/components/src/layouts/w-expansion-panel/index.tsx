import * as React from 'react';
import ExpansionPanel, { ExpansionPanelProps } from '@material-ui/core/ExpansionPanel';
import { ExpansionPanelDetails, ExpansionPanelSummary, ExpansionPanelActions } from '@material-ui/core';
import { WIcon } from '../../medias/w-icon';
import { WTypography } from '../../others/w-typography';
import { WButton } from '../../buttons/w-button';
import { BaseComponentProps } from '../../base/base-component-props';
import { withTheme } from '@material-ui/styles';
import { WTheme } from '../../others/w-theme-provider/w-theme';

export type WExpansionPanelProps = BaseComponentProps & ExpansionPanelProps & { 
  title: string;
  actions?: {text?: string, onClick?: (event) => void, custom?: React.ReactNode}[];
  theme?: WTheme;
}

class WExpansionPanelInner extends React.Component<WExpansionPanelProps, any> {
  public render() {
    return (
      <ExpansionPanel elevation={this.props.theme.designDetails.defaultElevation} {...this.props}>
        <ExpansionPanelSummary expandIcon={<WIcon>expand_more</WIcon>}>
          <WTypography variant="subtitle1">{this.props.title}</WTypography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            {this.props.children}
        </ExpansionPanelDetails>
        { this.props.actions && 
          <ExpansionPanelActions>
          {
            this.props.actions.map(action => {
              if(action.custom) {
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

export const WExpansionPanel = withTheme(WExpansionPanelInner);