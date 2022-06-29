
import  React, {useState} from 'react';
import { WTheme } from '../../others/w-theme-provider/w-theme';
import { PaperProps } from '@mui/material/Paper';
import createStyles from '@mui/styles/createStyles';
import withStyles from '@mui/styles/withStyles';
import { Stepper, Step, StepLabel } from '@mui/material';
import withTheme from '@mui/styles/withTheme';


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
export const WWizardInner: React.FC<WWizardProps> = React.forwardRef((props) => {
  const [activeStep,setActiveStep]=useState(props.defaultStep ? props.defaultStep: 0);
  const[data,setData]=useState(props.initialData?props.initialData: {});
  const { classes, steps } = props;
  const StepComponent = steps[activeStep].component;

  const onDataChanged = (data: any) => {
    setData(() => {
      props.onDataChanged && props.onDataChanged(data);
    });
  }
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
          onDataChanged={onDataChanged}
          onForward={() => {
            if(activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
            }
          }}
          onBackward={() => {
            if(activeStep > 0) {
            setActiveStep(activeStep- 1);
            }
          }}
        />
      </div>
    </>
  )
});

const styles = (theme: WTheme) => createStyles({
  stepContainer: {
    padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}`
  }
});

export const WWizard = withStyles(styles, {withTheme: true})(WWizardInner);


// export class WWizardInner extends React.Component<WWizardProps, WWizardState> {
  
//   constructor(props: WWizardProps) {
//     super(props);
    
//     this.state = {
//       activeStep: props.defaultStep || 0,
//       data: props.initialData || {}
//     }
//   }

  // onDataChanged = (data: any) => {
  //   this.setState({ data }, () => {
  //     this.props.onDataChanged && this.props.onDataChanged(data);
  //   });
  // }

//   public render() {
//     const { classes, steps } = this.props;
//     const { activeStep, data } = this.state;
//     const StepComponent = steps[activeStep].component;
    // return (
    //   <>
    //     <Stepper activeStep={activeStep} alternativeLabel>
    //       {steps.map(({label}) => (
    //         <Step key={label}>
    //           <StepLabel>{label}</StepLabel>
    //         </Step>
    //       ))}
    //     </Stepper>
    //     <div className={classes.stepContainer}>
    //       <StepComponent           
    //         data={data} 
    //         activeStep={activeStep} 
    //         onDataChanged={this.onDataChanged}
    //         onForward={() => {
    //           if(activeStep < steps.length - 1) {
    //             this.setState({activeStep: this.state.activeStep + 1});
    //           }
    //         }}
    //         onBackward={() => {
    //           if(activeStep > 0) {
    //             this.setState({activeStep: this.state.activeStep - 1});
    //           }
    //         }}
    //       />
    //     </div>
    //   </>
    // )
//   }
// }

// const styles = (theme: WTheme) => createStyles({
//   stepContainer: {
//     padding: `${theme.spacing(1)} ${theme.spacing(2)} ${theme.spacing(2)} ${theme.spacing(2)}`
//   }
// });

// export const WWizard = withStyles(styles, {withTheme: true})(WWizardInner);

