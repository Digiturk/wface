import * as React from 'react';
import { WGrid, WPaper, WTheme, WTypography } from '../../../';
import { useTheme } from '@mui/material';

export default () => {
  const theme = useTheme<WTheme>();
  return(
  <div style={{ padding: theme?.designDetails?.pagePadding, paddingBottom: 10, marginTop:theme?.designDetails?.pageMargin }}>
  <WGrid container justifyContent="center" mt={2}>
    <WGrid item md={6}>
      <WPaper elevation={0} style={{ padding: 20 }}>
        <WTypography variant="h5" align="center">
          Sayfa bulunamadı
        </WTypography>
        <WTypography align="center">
          Lütfen proje ve ekran alanlarını doğru tanımladığınızdan emin olunuz.
        </WTypography>
      </WPaper>
    </WGrid>
  </WGrid>
  </div>
)}