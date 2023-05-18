import * as React from 'react';
import { WGrid, WPaper, WTypography } from '../../../';

export default () => (
  <WGrid container justifyContent="center" mt={2}>
    <WGrid item md={6}>
      <WPaper elevation={0} style={{ padding: 20 }}>
        <WTypography variant="h5" align="center">
          Page not found
        </WTypography>
        <WTypography align="center">
          Please make sure that you have defined the project and screen areas correctly.
        </WTypography>
      </WPaper>
    </WGrid>
  </WGrid>
)