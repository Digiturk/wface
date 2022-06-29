import * as React from 'react';
import { Typography } from '@mui/material';
import { TypographyProps } from '@mui/material/Typography';

export interface WTypographyProps extends TypographyProps { }



export const  WTypography: React.FC<WTypographyProps> = React.forwardRef((props) => {
  return (
    <Typography {...props} />
  );
});


// export class WTypography extends React.Component<WTypographyProps, any> {
//   public render() {
//     return <Typography {...this.props} />
//   }
// }