import { Stepper, Step, StepLabel, withTheme } from '@material-ui/core';

import { PaperProps } from '@material-ui/core/Paper';
import * as React from 'react';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { createStyles, withStyles } from '@material-ui/core';

export interface WWizardStepProps {
  data: any;
  activeStep: number;
  onDataChanged: (data: any) => void;
  onForward: () => void;
  onBackward: () => void;
}

export interface WWizardProps {
  classes?: any;
  theme?: WTheme;
  initialData?: any;
  defaultStep?: number;
  onDataChanged?: (newData: any) => void;
  onStepChanged?: (newStep: number) => void;
  steps: {
    label: string;
    component: React.ElementType<WWizardStepProps>
  }[]
}

interface WWizardState {
  activeStep: number;
  data: any;
}

export class WWizardInner extends React.Component<WWizardProps, WWizardState> {
  
  constructor(props: WWizardProps) {
    super(props);
    
    this.state = {
      activeStep: props.defaultStep || 0,
      data: props.initialData || {}
    }
  }

  onDataChanged = (data: any) => {
    this.setState({ data }, () => {
      this.props.onDataChanged && this.props.onDataChanged(data);
    });
  }

  public render() {
    const { classes, steps } = this.props;
    const { activeStep, data } = this.state;
    const StepComponent = steps[activeStep].component;
    return (
      <>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(({label}) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className={classes.stepContainer}>
          <StepComponent           
            data={data} 
            activeStep={activeStep} 
            onDataChanged={this.onDataChanged}
            onForward={() => {
              if(activeStep < steps.length - 1) {
                this.setState({activeStep: this.state.activeStep + 1});
              }
            }}
            onBackward={() => {
              if(activeStep > 0) {
                this.setState({activeStep: this.state.activeStep - 1});
              }
            }}
          />
        </div>
      </>
    )
  }
}

const styles = (theme: WTheme) => createStyles({
  stepContainer: {
    padding: `${theme.spacing(1)}px ${theme.spacing(2)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`
  }
});

export const WWizard = withStyles(styles, {withTheme: true})(WWizardInner);

