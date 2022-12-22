import * as React from 'react';
import Accordion, { AccordionProps } from '@mui/material/Accordion';
import { AccordionDetails, AccordionSummary, AccordionActions } from '@mui/material';
import { WIcon } from '../../medias/w-icon';
import { WTypography } from '../../others/w-typography';
import { WButton } from '../../buttons/w-button';
import { BaseComponentProps } from '../../base/base-component-props';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import makeStyles from '@mui/styles/makeStyles';

// @ts-ignore
export type WExpansionPanelProps = BaseComponentProps & AccordionProps & {
  title: string;
  actions?: { text?: string, onClick?: (event: any) => void, custom?: React.ReactNode }[];
  theme?: WTheme;
  classes?: any;
}


const useStyles = makeStyles((theme: any) => ({
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
}));

export const WExpansionPanel: React.FC<WExpansionPanelProps> = React.forwardRef((props) => {
  const classes = useStyles();

  return (
    <Accordion elevation={props.theme?.designDetails?.defaultElevation} {...props}>
      <AccordionSummary expandIcon={<WIcon>expand_more</WIcon>} classes={{ root: classes.summaryRoot, content: classes.summaryContent }}>
        <WTypography variant="h6">{props.title}</WTypography>
      </AccordionSummary>
      <AccordionDetails>
        {props.children}
      </AccordionDetails>
      {props.actions &&
        <AccordionActions>
          {
            props.actions.map(action => {
              if (action.custom) {
                return action.custom;
              }
              else {
                return <WButton id={props.id + "-btn"} size="small" onClick={action.onClick}>{action.text}</WButton>;
              }
            })
          }
        </AccordionActions>
      }
    </Accordion>
  );
});